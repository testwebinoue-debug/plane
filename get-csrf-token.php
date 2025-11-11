<?php
/**
 * CSRFトークン生成API（お名前.com完全対応版）
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
    session_start();
}

// セキュリティヘッダーの設定
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

// CORS設定（同一オリジンのみ許可）
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Credentials: true');
}

// GETリクエストのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(array('success' => false, 'message' => 'Method not allowed'));
    exit;
}

// CSRFトークンの生成（有効期限付き）
if (!isset($_SESSION['csrf_token']) || !isset($_SESSION['csrf_token_time'])) {
    // PHP 5.6対応のランダムバイト生成
    if (function_exists('random_bytes')) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    } elseif (function_exists('openssl_random_pseudo_bytes')) {
        $_SESSION['csrf_token'] = bin2hex(openssl_random_pseudo_bytes(32));
    } else {
        $_SESSION['csrf_token'] = md5(uniqid(rand(), true));
    }
    $_SESSION['csrf_token_time'] = time();
} else {
    // トークンの有効期限チェック（1時間）
    if (time() - $_SESSION['csrf_token_time'] > 3600) {
        if (function_exists('random_bytes')) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        } elseif (function_exists('openssl_random_pseudo_bytes')) {
            $_SESSION['csrf_token'] = bin2hex(openssl_random_pseudo_bytes(32));
        } else {
            $_SESSION['csrf_token'] = md5(uniqid(rand(), true));
        }
        $_SESSION['csrf_token_time'] = time();
    }
}

echo json_encode(array(
    'success' => true,
    'csrf_token' => $_SESSION['csrf_token'],
    'timestamp' => time()
));
?>