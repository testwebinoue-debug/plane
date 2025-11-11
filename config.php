<?php
/**
 * メール設定ファイル
 * 
 * このファイルには機密情報が含まれているため、
 * Webからアクセスできない場所に配置するか、
 * .htaccessで保護してください。
 */

// 管理者のメールアドレス（お問い合わせを受信するアドレス）
define('ADMIN_EMAIL', 'design@sept3.co.jp'); // ← ここを実際のメールアドレスに変更

// 送信元メールアドレス
define('MAIL_FROM', 'noreply@sept3.co.jp'); // ← ここを実際のメールアドレスに変更

// データベース設定（将来的にデータベースに保存する場合）
/*
define('DB_HOST', 'localhost');
define('DB_NAME', 'database_name');
define('DB_USER', 'username');
define('DB_PASS', 'password');
*/

// タイムゾーン設定
date_default_timezone_set('Asia/Tokyo');

// 文字エンコーディング設定
mb_internal_encoding('UTF-8');
mb_language('ja');
?>