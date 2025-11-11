<?php
/**
 * セキュリティ関数ライブラリ（エンタープライズレベル）
 * 
 * このファイルをpublic_html/includesに配置してください
 */

/**
 * IPアドレスの取得（プロキシ対応）
 */
function getRealIP() {
    $ip = '';
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return filter_var(trim($ip), FILTER_VALIDATE_IP) ? trim($ip) : '0.0.0.0';
}

/**
 * IPアドレス制限チェック
 */
function checkIPRestriction() {
    $ip = getRealIP();
    
    // ホワイトリストチェック
    if (defined('IP_WHITELIST') && is_array(IP_WHITELIST) && in_array($ip, IP_WHITELIST)) {
        return true;
    }
    
    // ブラックリストチェック
    if (defined('IP_BLACKLIST') && is_array(IP_BLACKLIST) && in_array($ip, IP_BLACKLIST)) {
        return false;
    }
    
    // 国別制限チェック
    if (defined('ALLOWED_COUNTRIES') && is_array(ALLOWED_COUNTRIES) && !empty(ALLOWED_COUNTRIES)) {
        $country = getCountryFromIP($ip);
        if ($country && !in_array($country, ALLOWED_COUNTRIES)) {
            return false;
        }
    }
    
    return true;
}

/**
 * IPアドレスから国コードを取得（簡易版）
 * 注意: 正確な判定にはMaxMind GeoIP2などの外部ライブラリが必要
 */
function getCountryFromIP($ip) {
    // プライベートIPアドレスの場合は日本として扱う
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false) {
        return 'JP';
    }
    
    // 簡易判定: 日本のIPレンジかチェック
    // 本番環境ではMaxMind GeoIP2などを使用推奨
    $japaneseRanges = [
        ['1.0.16.0', '1.0.127.255'],
        ['1.1.64.0', '1.1.127.255'],
        // 以下、主要な日本のIPレンジを追加可能
    ];
    
    $ipLong = ip2long($ip);
    if ($ipLong === false) {
        return null;
    }
    
    foreach ($japaneseRanges as $range) {
        $start = ip2long($range[0]);
        $end = ip2long($range[1]);
        if ($ipLong >= $start && $ipLong <= $end) {
            return 'JP';
        }
    }
    
    // 判定できない場合はnullを返す
    return null;
}

/**
 * reCAPTCHA v3の検証
 */
function verifyRecaptcha($token) {
    if (!defined('RECAPTCHA_SECRET_KEY') || empty(RECAPTCHA_SECRET_KEY)) {
        return true; // reCAPTCHAが設定されていない場合はスキップ
    }
    
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => RECAPTCHA_SECRET_KEY,
        'response' => $token,
        'remoteip' => getRealIP()
    ];
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data),
            'timeout' => 10
        ]
    ];
    
    $context = stream_context_create($options);
    $response = @file_get_contents($url, false, $context);
    
    if ($response === false) {
        logSecurity('reCAPTCHA verification failed: Connection error');
        return false;
    }
    
    $result = json_decode($response, true);
    
    if (!$result['success']) {
        logSecurity('reCAPTCHA verification failed: ' . implode(', ', $result['error-codes'] ?? []));
        return false;
    }
    
    // スコアチェック
    $threshold = defined('RECAPTCHA_THRESHOLD') ? RECAPTCHA_THRESHOLD : 0.5;
    if (isset($result['score']) && $result['score'] < $threshold) {
        logSecurity('reCAPTCHA score too low: ' . $result['score']);
        return false;
    }
    
    return true;
}

/**
 * MXレコードの検証
 */
function validateMXRecord($email) {
    if (!defined('ENABLE_MX_VALIDATION') || !ENABLE_MX_VALIDATION) {
        return true;
    }
    
    $domain = substr(strrchr($email, "@"), 1);
    if (!$domain) {
        return false;
    }
    
    // MXレコードの確認
    $mxHosts = [];
    if (getmxrr($domain, $mxHosts)) {
        return true;
    }
    
    // MXレコードがない場合、Aレコードを確認
    if (checkdnsrr($domain, 'A')) {
        return true;
    }
    
    return false;
}

/**
 * 入力値のサニタイズ（強化版）
 */
function sanitizeInput($data) {
    if (!is_string($data)) {
        return $data;
    }
    
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    
    // 制御文字の除去
    $data = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $data);
    
    // NULLバイトの除去
    $data = str_replace("\0", '', $data);
    
    return $data;
}

/**
 * SQLインジェクション対策（将来のDB対応）
 */
function sanitizeSQL($data) {
    if (!is_string($data)) {
        return $data;
    }
    
    $data = str_replace(['\\', "\0", "\n", "\r", "'", '"', "\x1a"], ['\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'], $data);
    return $data;
}

/**
 * メールアドレスの検証（強化版）
 */
function validateEmail($email) {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    
    // 長さチェック
    $maxLength = defined('MAX_EMAIL_LENGTH') ? MAX_EMAIL_LENGTH : 254;
    if (strlen($email) > $maxLength) {
        return false;
    }
    
    // 使い捨てメールドメインのブラックリスト
    $blacklistedDomains = defined('DISPOSABLE_EMAIL_DOMAINS') ? DISPOSABLE_EMAIL_DOMAINS : [];
    $domain = substr(strrchr($email, "@"), 1);
    if (in_array(strtolower($domain), $blacklistedDomains)) {
        return false;
    }
    
    // MXレコード検証
    if (!validateMXRecord($email)) {
        return false;
    }
    
    return $email;
}

/**
 * 電話番号の検証
 */
function validatePhone($phone) {
    $phoneClean = str_replace(['-', ' ', '(', ')'], '', $phone);
    
    // 長さチェック
    $maxLength = defined('MAX_PHONE_LENGTH') ? MAX_PHONE_LENGTH : 15;
    if (strlen($phoneClean) > $maxLength) {
        return false;
    }
    
    // 日本の電話番号形式チェック
    return preg_match('/^0\d{9,10}$/', $phoneClean);
}

/**
 * 禁止ワードチェック
 */
function containsProhibitedWords($text) {
    $prohibitedWords = defined('PROHIBITED_WORDS') ? PROHIBITED_WORDS : [];
    
    foreach ($prohibitedWords as $word) {
        if (stripos($text, $word) !== false) {
            return true;
        }
    }
    
    return false;
}

/**
 * CSRFトークンの検証
 */
function validateCSRFToken($token) {
    if (!isset($_SESSION['csrf_token'])) {
        return false;
    }
    
    return hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * 二重送信防止トークンの検証
 */
function validateDoubleSubmitToken($token) {
    if (!defined('DOUBLE_SUBMIT_PREVENTION') || !DOUBLE_SUBMIT_PREVENTION) {
        return true;
    }
    
    if (!isset($_SESSION['double_submit_token'])) {
        return false;
    }
    
    // トークンの有効期限チェック（5分）
    if (isset($_SESSION['double_submit_time']) && time() - $_SESSION['double_submit_time'] > 300) {
        return false;
    }
    
    $valid = hash_equals($_SESSION['double_submit_token'], $token);
    
    // 使用済みトークンを削除
    if ($valid) {
        unset($_SESSION['double_submit_token']);
        unset($_SESSION['double_submit_time']);
    }
    
    return $valid;
}

/**
 * ハニーポットチェック
 */
function checkHoneypot($data) {
    if (!defined('ENABLE_HONEYPOT') || !ENABLE_HONEYPOT) {
        return true;
    }
    
    if (isset($data['website']) && !empty($data['website'])) {
        return false;
    }
    
    return true;
}

/**
 * タイムスタンプチェック
 */
function checkTimestamp($data) {
    if (!defined('ENABLE_TIMESTAMP_CHECK') || !ENABLE_TIMESTAMP_CHECK) {
        return true;
    }
    
    if (!isset($data['timestamp'])) {
        return false;
    }
    
    $formLoadTime = intval($data['timestamp']);
    $currentTime = time();
    $elapsed = $currentTime - $formLoadTime;
    
    $minTime = defined('MIN_FORM_FILL_TIME') ? MIN_FORM_FILL_TIME : 3;
    $maxTime = defined('MAX_FORM_FILL_TIME') ? MAX_FORM_FILL_TIME : 3600;
    
    if ($elapsed < $minTime) return false;
    if ($elapsed > $maxTime) return false;
    
    return true;
}

/**
 * レート制限チェック（強化版）
 */
function checkRateLimit($email = null) {
    $ip = getRealIP();
    $limitCount = defined('RATE_LIMIT_COUNT') ? RATE_LIMIT_COUNT : 3;
    $limitPeriod = defined('RATE_LIMIT_PERIOD') ? RATE_LIMIT_PERIOD : 3600;
    $strictMode = defined('RATE_LIMIT_STRICT_MODE') ? RATE_LIMIT_STRICT_MODE : false;
    
    // IP制限
    $ipKey = 'rate_limit_ip_' . hash('sha256', $ip);
    if (!checkRateLimitByKey($ipKey, $limitCount, $limitPeriod)) {
        return false;
    }
    
    // 厳格モード: メールアドレスでも制限
    if ($strictMode && $email) {
        $emailKey = 'rate_limit_email_' . hash('sha256', strtolower($email));
        if (!checkRateLimitByKey($emailKey, $limitCount, $limitPeriod)) {
            return false;
        }
    }
    
    return true;
}

/**
 * キーベースのレート制限チェック
 */
function checkRateLimitByKey($key, $limit, $period) {
    $tmpDir = defined('TMP_SAVE_PATH') ? TMP_SAVE_PATH : __DIR__ . '/../tmp';
    if (!is_dir($tmpDir)) {
        @mkdir($tmpDir, 0755, true);
    }
    
    $file = $tmpDir . '/' . $key . '.json';
    
    // 古いファイルのクリーンアップ
    cleanOldFiles($tmpDir, 86400);
    
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        if ($data && $data['time'] > time() - $period) {
            if ($data['count'] >= $limit) {
                logSecurity('Rate limit exceeded: ' . $key);
                return false;
            }
            $data['count']++;
        } else {
            $data = ['time' => time(), 'count' => 1];
        }
    } else {
        $data = ['time' => time(), 'count' => 1];
    }
    
    @file_put_contents($file, json_encode($data), LOCK_EX);
    return true;
}

/**
 * 古いファイルの削除
 */
function cleanOldFiles($dir, $maxAge) {
    if (!is_dir($dir)) return;
    
    $now = time();
    $files = @scandir($dir);
    if (!$files) return;
    
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        
        $filepath = $dir . '/' . $file;
        if (is_file($filepath) && ($now - @filemtime($filepath)) > $maxAge) {
            @unlink($filepath);
        }
    }
}

/**
 * セキュリティログの記録
 */
function logSecurity($message, $ip = null) {
    $logDir = defined('LOG_SAVE_PATH') ? LOG_SAVE_PATH : __DIR__ . '/../logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    
    $ip = $ip ?: getRealIP();
    $logFile = $logDir . '/security_' . date('Y-m') . '.log';
    $logData = date('Y-m-d H:i:s') . " | " . $ip . " | " . $message . "\n";
    @file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);
}

/**
 * 監査ログの記録（エンタープライズレベル）
 */
function logAudit($action, $details = []) {
    if (!defined('ENABLE_AUDIT_LOG') || !ENABLE_AUDIT_LOG) {
        return;
    }
    
    $logDir = defined('LOG_SAVE_PATH') ? LOG_SAVE_PATH : __DIR__ . '/../logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    
    $logFile = $logDir . '/audit_' . date('Y-m') . '.log';
    
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'action' => $action,
        'ip' => getRealIP()
    ];
    
    if (defined('LOG_USER_AGENT') && LOG_USER_AGENT && isset($details['user_agent'])) {
        $logEntry['user_agent'] = $details['user_agent'];
    }
    
    if (defined('LOG_REFERER') && LOG_REFERER && isset($_SERVER['HTTP_REFERER'])) {
        $logEntry['referer'] = $_SERVER['HTTP_REFERER'];
    }
    
    if (defined('LOG_FORM_DATA') && LOG_FORM_DATA && isset($details['form_data'])) {
        $logEntry['form_data'] = $details['form_data'];
    }
    
    $logData = json_encode($logEntry, JSON_UNESCAPED_UNICODE) . "\n";
    @file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);
}

/**
 * エラー通知の送信
 */
function sendErrorNotification($subject, $message) {
    if (!defined('ENABLE_ERROR_NOTIFICATION') || !ENABLE_ERROR_NOTIFICATION) {
        return;
    }
    
    if (!defined('ERROR_NOTIFICATION_EMAIL')) {
        return;
    }
    
    $to = ERROR_NOTIFICATION_EMAIL;
    $headers = "From: Security Alert <noreply@" . $_SERVER['HTTP_HOST'] . ">\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";
    
    $body = "セキュリティアラート\n\n";
    $body .= "日時: " . date('Y-m-d H:i:s') . "\n";
    $body .= "IPアドレス: " . getRealIP() . "\n";
    $body .= "User-Agent: " . (isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Unknown') . "\n\n";
    $body .= $message;
    
    @mb_send_mail($to, $subject, $body, $headers);
}
?>