<?php

/**
 * CSRFトークン生成API（エンタープライズレベル・お名前.com SD対応版）
 */

// エラー表示を完全にオフ（本番環境）
error_reporting(0);
@ini_set('display_errors', '0');

// 設定ファイルの読み込み
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Configuration error']);
    exit;
}

// ユーティリティ関数の読み込み
if (file_exists(__DIR__ . '/includes/security-functions.php')) {
    require_once __DIR__ . '/includes/security-functions.php';
}

// セッション保存先の設定
$session_path = defined('SESSION_SAVE_PATH') ? SESSION_SAVE_PATH : __DIR__ . '/tmp/sessions';
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
@ini_set('session.cookie_lifetime', '0');
@ini_set('session.gc_maxlifetime', defined('CSRF_TOKEN_LIFETIME') ? CSRF_TOKEN_LIFETIME : 3600);

// HTTPS使用時のみ有効化
if (
    (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ||
    (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
) {
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

// セキュリティヘッダーの設定
if (defined('SECURITY_HEADERS') && is_array(SECURITY_HEADERS)) {
    foreach (SECURITY_HEADERS as $header => $value) {
        header($header . ': ' . $value);
    }
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

// CORS設定（同一オリジンのみ許可）
$allowedOrigins = [
    'https://' . $_SERVER['HTTP_HOST'],
    'http://' . $_SERVER['HTTP_HOST']
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Credentials: true');
}

// GETリクエストのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// IP制限チェック（有効な場合）
if (defined('ENABLE_IP_RESTRICTION') && ENABLE_IP_RESTRICTION && function_exists('checkIPRestriction')) {
    if (!checkIPRestriction()) {
        logSecurity('IP restriction: Access denied from ' . getRealIP());
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Access denied']);
        exit;
    }
}

// CSRFトークンの生成（有効期限付き）
$tokenLifetime = defined('CSRF_TOKEN_LIFETIME') ? CSRF_TOKEN_LIFETIME : 3600;

if (!isset($_SESSION['csrf_token']) || !isset($_SESSION['csrf_token_time'])) {
    // 新規トークン生成
    $_SESSION['csrf_token'] = generateSecureToken(32);
    $_SESSION['csrf_token_time'] = time();
} else {
    // トークンの有効期限チェック
    if (time() - $_SESSION['csrf_token_time'] > $tokenLifetime) {
        $_SESSION['csrf_token'] = generateSecureToken(32);
        $_SESSION['csrf_token_time'] = time();
    }
}

// 二重送信防止トークンの生成（有効な場合）
$doubleSubmitToken = null;
if (defined('DOUBLE_SUBMIT_PREVENTION') && DOUBLE_SUBMIT_PREVENTION) {
    $doubleSubmitToken = generateSecureToken(16);
    $_SESSION['double_submit_token'] = $doubleSubmitToken;
    $_SESSION['double_submit_time'] = time();
}

// 監査ログ記録
if (defined('ENABLE_AUDIT_LOG') && ENABLE_AUDIT_LOG && function_exists('logAudit')) {
    logAudit('CSRF_TOKEN_REQUESTED', [
        'ip' => getRealIP(),
        'user_agent' => isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Unknown'
    ]);
}

$response = [
    'success' => true,
    'csrf_token' => $_SESSION['csrf_token'],
    'timestamp' => time()
];

if ($doubleSubmitToken) {
    $response['double_submit_token'] = $doubleSubmitToken;
}

echo json_encode($response);

/**
 * セキュアなトークン生成
 */
function generateSecureToken($length = 32) {
    if (function_exists('random_bytes')) {
        return bin2hex(random_bytes($length));
    } elseif (function_exists('openssl_random_pseudo_bytes')) {
        return bin2hex(openssl_random_pseudo_bytes($length));
    } else {
        return hash('sha256', uniqid(mt_rand(), true));
    }
}

/**
 * IPアドレスの取得
 */
if (!function_exists('getRealIP')) {
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
}

/**
 * セキュリティログの記録
 */
if (!function_exists('logSecurity')) {
    function logSecurity($message, $ip = null) {
        $logDir = defined('LOG_SAVE_PATH') ? LOG_SAVE_PATH : __DIR__ . '/logs';
        if (!is_dir($logDir)) {
            @mkdir($logDir, 0755, true);
        }
        
        $ip = $ip ?: getRealIP();
        $logFile = $logDir . '/security_' . date('Y-m') . '.log';
        $logData = date('Y-m-d H:i:s') . " | " . $ip . " | " . $message . "\n";
        @file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);
    }
}

?>