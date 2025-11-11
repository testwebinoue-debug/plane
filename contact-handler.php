<?php
/**
 * お問い合わせフォーム処理（お名前.com完全対応版）
 */

 // セッション保存先の設定（お名前.com対応）
$session_path = __DIR__ . '/tmp/sessions';
if (!is_dir($session_path)) {
    @mkdir($session_path, 0700, true);
}
if (is_dir($session_path) && is_writable($session_path)) {
    @ini_set('session.save_path', $session_path);
}

// エラー表示を完全にオフ
error_reporting(0);
@ini_set('display_errors', '0');
@ini_set('display_startup_errors', '0');

// セッション保存先の設定（お名前.com対応）
$session_path = __DIR__ . '/tmp/sessions';
if (!is_dir($session_path)) {
    @mkdir($session_path, 0700, true);
}
if (is_dir($session_path) && is_writable($session_path)) {
    @ini_set('session.save_path', $session_path);
}

// セッション設定
@ini_set('session.cookie_httponly', '1');
@ini_set('session.use_strict_mode', '1');
@ini_set('session.use_only_cookies', '1');

// HTTPS使用時のみ有効化
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
    @ini_set('session.cookie_secure', '1');
}

// PHP 7.3以上の場合
if (version_compare(PHP_VERSION, '7.3.0', '>=')) {
    @ini_set('session.cookie_samesite', 'Strict');
}

// セッション開始
if (session_status() === PHP_SESSION_NONE) {
    @session_start();
}

// セッション開始失敗時の対応
if (session_status() !== PHP_SESSION_ACTIVE) {
    http_response_code(500);
    echo json_encode(array('success' => false, 'message' => 'Session initialization failed'));
    exit;
}

// セッションハイジャック対策
if (!isset($_SESSION['initiated'])) {
    session_regenerate_id(true);
    $_SESSION['initiated'] = true;
}

// セキュリティヘッダーの設定
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Content-Type: application/json; charset=utf-8');

// CORS設定（同一オリジンのみ許可）
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Credentials: true');
}
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// POSTリクエストのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array('success' => false, 'message' => 'Method not allowed'));
    exit;
}

// 設定ファイルの読み込み
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
} else {
    http_response_code(500);
    echo json_encode(array('success' => false, 'message' => 'Configuration file not found'));
    exit;
}

// POSTリクエストのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// 設定ファイルの読み込み
require_once __DIR__ . '/config.php';

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
    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : '0.0.0.0';
}

/**
 * 入力値のサニタイズ（強化版）
 */
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    // 制御文字の除去
    $data = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $data);
    return $data;
}

/**
 * SQLインジェクション対策（将来のDB対応）
 */
function sanitizeSQL($data) {
    $data = str_replace(['\\', "\0", "\n", "\r", "'", '"', "\x1a"], ['\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'], $data);
    return $data;
}

/**
 * メールヘッダーインジェクション対策
 */
function sanitizeEmail($email) {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    // 改行文字の除去
    $email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);
    return $email;
}

/**
 * メールアドレスの検証（強化版）
 */
function validateEmail($email) {
    $email = sanitizeEmail($email);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    // 使い捨てメールドメインのブラックリスト（例）
    $blacklistedDomains = [
        '10minutemail.com',
        'guerrillamail.com',
        'mailinator.com',
        'tempmail.com',
        'throwaway.email'
    ];
    $domain = substr(strrchr($email, "@"), 1);
    if (in_array(strtolower($domain), $blacklistedDomains)) {
        return false;
    }
    return $email;
}

/**
 * 電話番号の検証（日本の形式）
 */
function validatePhone($phone) {
    // ハイフンなしの数字のみ許可
    return preg_match('/^0\d{9,10}$/', str_replace('-', '', $phone));
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
 * ハニーポット（ボット対策）のチェック
 */
function checkHoneypot($data) {
    // contact-form.jsで追加される隠しフィールド
    if (isset($data['website']) && !empty($data['website'])) {
        return false; // ボットの可能性
    }
    return true;
}

/**
 * タイムスタンプチェック（高速送信ボット対策）
 */
function checkTimestamp($data) {
    if (!isset($data['timestamp'])) {
        return false;
    }
    
    $formLoadTime = intval($data['timestamp']);
    $currentTime = time();
    $elapsed = $currentTime - $formLoadTime;
    
    // 3秒未満で送信された場合はボットの可能性
    if ($elapsed < 3) {
        return false;
    }
    
    // 1時間以上経過している場合は無効
    if ($elapsed > 3600) {
        return false;
    }
    
    return true;
}

/**
 * レート制限チェック（強化版）
 */
function checkRateLimit() {
    $ip = getRealIP();
    $key = 'rate_limit_' . hash('sha256', $ip);
    $limit = 3; // 3回まで
    $period = 3600; // 1時間
    
    $file = __DIR__ . '/tmp/' . $key . '.json';
    
    if (!is_dir(__DIR__ . '/tmp')) {
        mkdir(__DIR__ . '/tmp', 0755, true);
    }
    
    // 古いファイルのクリーンアップ
    cleanOldFiles(__DIR__ . '/tmp', 86400); // 24時間以上古いファイルを削除
    
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        if ($data && $data['time'] > time() - $period) {
            if ($data['count'] >= $limit) {
                // ログに記録
                logSecurity('Rate limit exceeded', $ip);
                return false;
            }
            $data['count']++;
        } else {
            $data = ['time' => time(), 'count' => 1];
        }
    } else {
        $data = ['time' => time(), 'count' => 1];
    }
    
    file_put_contents($file, json_encode($data), LOCK_EX);
    return true;
}

/**
 * 古いファイルの削除
 */
function cleanOldFiles($dir, $maxAge) {
    if (!is_dir($dir)) {
        return;
    }
    
    $now = time();
    $files = scandir($dir);
    
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') {
            continue;
        }
        
        $filepath = $dir . '/' . $file;
        if (is_file($filepath) && ($now - filemtime($filepath)) > $maxAge) {
            unlink($filepath);
        }
    }
}

/**
 * セキュリティログの記録
 */
function logSecurity($message, $ip = null) {
    $logDir = __DIR__ . '/logs';
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $ip = $ip ?: getRealIP();
    $logFile = $logDir . '/security_' . date('Y-m') . '.log';
    $logData = date('Y-m-d H:i:s') . " | " . $ip . " | " . $message . "\n";
    file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);
}

try {
    // JSONデータの取得
    $json = file_get_contents('php://input');
    
    // JSONのサイズチェック（DoS対策）
    if (strlen($json) > 1048576) { // 1MB
        throw new Exception('Request too large');
    }
    
    $data = json_decode($json, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        logSecurity('Invalid JSON: ' . json_last_error_msg());
        throw new Exception('Invalid JSON data');
    }
    
    // CSRFトークンの検証
    if (!isset($data['csrf_token']) || !validateCSRFToken($data['csrf_token'])) {
        logSecurity('CSRF token validation failed');
        throw new Exception('CSRF token validation failed');
    }
    
    // ハニーポットチェック
    if (!checkHoneypot($data)) {
        logSecurity('Honeypot triggered - Bot detected');
        throw new Exception('Invalid request');
    }
    
    // タイムスタンプチェック
    if (!checkTimestamp($data)) {
        logSecurity('Timestamp check failed');
        throw new Exception('Invalid request timing');
    }
    
    // レート制限チェック
    if (!checkRateLimit()) {
        http_response_code(429);
        throw new Exception('送信回数の上限に達しました。しばらく時間をおいてから再度お試しください。');
    }
    // 必須項目のチェック
    $requiredFields = array('inquiryType', 'lastName', 'firstName', 'lastNameKana', 'firstNameKana', 'phone', 'email', 'content');
    foreach ($requiredFields as $field) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            throw new Exception('必須項目が入力されていません');
        }
    }
    
    // データのサニタイズ
    $inquiryType = sanitizeInput($data['inquiryType']);
    $company = isset($data['company']) ? sanitizeInput($data['company']) : '';
    $lastName = sanitizeInput($data['lastName']);
    $firstName = sanitizeInput($data['firstName']);
    $lastNameKana = sanitizeInput($data['lastNameKana']);
    $firstNameKana = sanitizeInput($data['firstNameKana']);
    $phone = sanitizeInput($data['phone']);
    $email = sanitizeInput($data['email']);
    $content = sanitizeInput($data['content']);
    
    // 文字数制限チェック
    if (mb_strlen($lastName, 'UTF-8') > 50 || mb_strlen($firstName, 'UTF-8') > 50) {
        throw new Exception('お名前が長すぎます');
    }
    if (mb_strlen($company, 'UTF-8') > 100) {
        throw new Exception('会社名が長すぎます');
    }
    if (mb_strlen($content, 'UTF-8') > 5000) {
        throw new Exception('お問い合わせ内容が長すぎます');
    }
    
    // バリデーション
    if (!in_array($inquiryType, array('consultation', 'other'), true)) {
        throw new Exception('お問い合わせの種類が不正です');
    }
    
    $email = validateEmail($email);
    if (!$email) {
        throw new Exception('メールアドレスの形式が正しくありません');
    }
    
    if (!validatePhone($phone)) {
        throw new Exception('電話番号の形式が正しくありません');
    }
    
    // カタカナチェック
    if (!preg_match('/^[ァ-ヶー\s]+$/u', $lastNameKana) || !preg_match('/^[ァ-ヶー\s]+$/u', $firstNameKana)) {
        throw new Exception('フリガナはカタカナで入力してください');
    }
    
    // 禁止ワードチェック
    $prohibitedWords = array('<script', 'javascript:', 'onclick', 'onerror', '<iframe');
    $allText = $company . $lastName . $firstName . $content;
    foreach ($prohibitedWords as $word) {
        if (stripos($allText, $word) !== false) {
            logSecurity('Prohibited word detected: ' . $word);
            throw new Exception('不正な文字列が含まれています');
        }
    }
    
    // お問い合わせ種類の日本語変換
    $inquiryTypeText = $inquiryType === 'consultation' ? '新規お取引のご相談' : 'その他';
    
    // メール本文の作成
    $mailBody = "【お問い合わせ内容】\n\n";
    $mailBody .= "お問い合わせの種類: " . $inquiryTypeText . "\n";
    if (!empty($company)) {
        $mailBody .= "会社名: " . $company . "\n";
    }
    $mailBody .= "お名前: " . $lastName . " " . $firstName . "\n";
    $mailBody .= "フリガナ: " . $lastNameKana . " " . $firstNameKana . "\n";
    $mailBody .= "電話番号: " . $phone . "\n";
    $mailBody .= "メールアドレス: " . $email . "\n";
    $mailBody .= "\n【お問い合わせ内容】\n";
    $mailBody .= $content . "\n\n";
    $mailBody .= "---\n";
    $mailBody .= "送信日時: " . date('Y年m月d日 H:i:s') . "\n";
    $mailBody .= "送信元IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
    
    // メールヘッダーの設定（メールヘッダーインジェクション対策）
    $fromEmail = sanitizeEmail(MAIL_FROM);
    $replyEmail = sanitizeEmail($email);
    $adminEmail = sanitizeEmail(ADMIN_EMAIL);
    
    $headers = array();
    $headers[] = 'From: ' . mb_encode_mimeheader('sept.3', 'UTF-8') . ' <' . $fromEmail . '>';
    $headers[] = 'Reply-To: ' . $replyEmail;
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    
    // メール送信（管理者宛）
    $subject = '【sept.3】お問い合わせがありました';
    
    $success = mb_send_mail(
        $adminEmail,
        $subject,
        $mailBody,
        implode("\r\n", $headers)
    );
    
    if (!$success) {
        logSecurity('Mail send failed to admin');
        throw new Exception('メール送信に失敗しました');
    }
    
    // 自動返信メール（お客様宛）
    $autoReplyBody = $lastName . " " . $firstName . " 様\n\n";
    $autoReplyBody .= "この度は、sept.3へお問い合わせいただきありがとうございます。\n";
    $autoReplyBody .= "以下の内容でお問い合わせを受け付けました。\n\n";
    $autoReplyBody .= "---\n\n";
    $autoReplyBody .= "お問い合わせの種類: " . $inquiryTypeText . "\n";
    if (!empty($company)) {
        $autoReplyBody .= "会社名: " . $company . "\n";
    }
    $autoReplyBody .= "お名前: " . $lastName . " " . $firstName . "\n";
    $autoReplyBody .= "電話番号: " . $phone . "\n";
    $autoReplyBody .= "メールアドレス: " . $email . "\n";
    $autoReplyBody .= "\n【お問い合わせ内容】\n";
    $autoReplyBody .= $content . "\n\n";
    $autoReplyBody .= "---\n\n";
    $autoReplyBody .= "内容を確認の上、担当者より改めてご連絡させていただきます。\n";
    $autoReplyBody .= "今しばらくお待ちくださいますようお願いいたします。\n\n";
    $autoReplyBody .= "※このメールは自動送信されています。\n";
    $autoReplyBody .= "※このメールに返信されても対応できませんのでご了承ください。\n\n";
    $autoReplyBody .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $autoReplyBody .= "sept.3 Inc.\n";
    $autoReplyBody .= "〒530-0012 大阪市北区芝田1-12-7 大栄ビル新館N1003\n";
    $autoReplyBody .= "TEL: 06-6376-0903\n";
    $autoReplyBody .= "FAX: 06-6376-0913\n";
    $autoReplyBody .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    
    $autoReplyHeaders = array();
    $autoReplyHeaders[] = 'From: ' . mb_encode_mimeheader('sept.3', 'UTF-8') . ' <' . $fromEmail . '>';
    $autoReplyHeaders[] = 'Content-Type: text/plain; charset=UTF-8';
    
    $autoReplySuccess = mb_send_mail(
        $replyEmail,
        '【sept.3】お問い合わせを受け付けました',
        $autoReplyBody,
        implode("\r\n", $autoReplyHeaders)
    );
    
    if (!$autoReplySuccess) {
        logSecurity('Auto-reply mail send failed to: ' . $email);
    }
    
    // ログ記録（成功）
    $logDir = __DIR__ . '/logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    if (is_dir($logDir) && is_writable($logDir)) {
        $logFile = $logDir . '/contact_' . date('Y-m') . '.log';
        $logData = date('Y-m-d H:i:s') . " | SUCCESS | " . getRealIP() . " | " . $email . " | " . $inquiryTypeText . "\n";
        @file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);
    }
    
    // セッションIDの再生成（セキュリティ強化）
    session_regenerate_id(true);
    
    // 成功レスポンス
    echo json_encode(array(
        'success' => true,
        'message' => 'お問い合わせを受け付けました。ご入力いただいたメールアドレスに確認メールをお送りしました。'
    ));
    
} catch (Exception $e) {
    // エラーログ記録
    $logDir = __DIR__ . '/logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    if (is_dir($logDir) && is_writable($logDir)) {
        $logFile = $logDir . '/contact_' . date('Y-m') . '.log';
        $logData = date('Y-m-d H:i:s') . " | ERROR | " . getRealIP() . " | " . $e->getMessage() . "\n";
        @file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);
    }
    
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => $e->getMessage()
    ));
}
?>