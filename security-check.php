<?php
/**
 * セキュリティチェックスクリプト
 * セットアップ後に一度実行して、セキュリティ設定を確認してください
 * 確認後は必ずこのファイルを削除してください！
 */

// アクセス制限（IPアドレスで制限する場合）
// $allowed_ip = 'YOUR_IP_ADDRESS';
// if ($_SERVER['REMOTE_ADDR'] !== $allowed_ip) {
//     die('Access Denied');
// }

header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>セキュリティチェック</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 3px solid #4CAF50;
            padding-bottom: 10px;
        }
        h2 {
            color: #555;
            margin-top: 30px;
        }
        .check-item {
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border-left: 4px solid #ddd;
        }
        .ok {
            background: #e8f5e9;
            border-left-color: #4CAF50;
        }
        .warning {
            background: #fff3e0;
            border-left-color: #FF9800;
        }
        .error {
            background: #ffebee;
            border-left-color: #f44336;
        }
        .status {
            font-weight: bold;
            margin-right: 10px;
        }
        .ok .status { color: #4CAF50; }
        .warning .status { color: #FF9800; }
        .error .status { color: #f44336; }
        code {
            background: #f5f5f5;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: monospace;
        }
        .alert {
            background: #ffebee;
            border: 1px solid #f44336;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            color: #c62828;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔒 セキュリティチェック</h1>
        <div class="alert">
            <strong>⚠️ 重要:</strong> このファイルは診断後に必ず削除してください！
        </div>

        <h2>📋 基本設定</h2>
        
        <?php
        // PHPバージョン
        $phpVersion = phpversion();
        $phpVersionOk = version_compare($phpVersion, '7.4', '>=');
        ?>
        <div class="check-item <?php echo $phpVersionOk ? 'ok' : 'warning'; ?>">
            <span class="status"><?php echo $phpVersionOk ? '✓' : '⚠'; ?></span>
            <strong>PHPバージョン:</strong> <?php echo $phpVersion; ?>
            <?php if (!$phpVersionOk): ?>
                <br><small>推奨: PHP 7.4以上</small>
            <?php endif; ?>
        </div>

        <?php
        // display_errors
        $displayErrors = ini_get('display_errors');
        $displayErrorsOk = !$displayErrors || $displayErrors === 'off';
        ?>
        <div class="check-item <?php echo $displayErrorsOk ? 'ok' : 'error'; ?>">
            <span class="status"><?php echo $displayErrorsOk ? '✓' : '✗'; ?></span>
            <strong>display_errors:</strong> <?php echo $displayErrors ? 'On' : 'Off'; ?>
            <?php if (!$displayErrorsOk): ?>
                <br><small>本番環境ではOffにしてください</small>
            <?php endif; ?>
        </div>

        <?php
        // expose_php
        $exposePhp = ini_get('expose_php');
        $exposePhpOk = !$exposePhp || $exposePhp === 'off';
        ?>
        <div class="check-item <?php echo $exposePhpOk ? 'ok' : 'warning'; ?>">
            <span class="status"><?php echo $exposePhpOk ? '✓' : '⚠'; ?></span>
            <strong>expose_php:</strong> <?php echo $exposePhp ? 'On' : 'Off'; ?>
            <?php if (!$exposePhpOk): ?>
                <br><small>Offにすることを推奨</small>
            <?php endif; ?>
        </div>

        <h2>🔐 セッション設定</h2>

        <?php
        // session.cookie_httponly
        $cookieHttponly = ini_get('session.cookie_httponly');
        $cookieHttponlyOk = $cookieHttponly == 1;
        ?>
        <div class="check-item <?php echo $cookieHttponlyOk ? 'ok' : 'error'; ?>">
            <span class="status"><?php echo $cookieHttponlyOk ? '✓' : '✗'; ?></span>
            <strong>session.cookie_httponly:</strong> <?php echo $cookieHttponly ? 'On' : 'Off'; ?>
            <?php if (!$cookieHttponlyOk): ?>
                <br><small>必ずOnにしてください（XSS対策）</small>
            <?php endif; ?>
        </div>

        <?php
        // session.cookie_secure
        $cookieSecure = ini_get('session.cookie_secure');
        $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
        $cookieSecureOk = $isHttps ? ($cookieSecure == 1) : true;
        ?>
        <div class="check-item <?php echo $cookieSecureOk ? 'ok' : 'warning'; ?>">
            <span class="status"><?php echo $cookieSecureOk ? '✓' : '⚠'; ?></span>
            <strong>session.cookie_secure:</strong> <?php echo $cookieSecure ? 'On' : 'Off'; ?>
            <?php if ($isHttps && !$cookieSecureOk): ?>
                <br><small>HTTPSを使用する場合はOnにしてください</small>
            <?php endif; ?>
        </div>

        <h2>📁 ファイル・ディレクトリ</h2>

        <?php
        // config.phpの存在確認
        $configExists = file_exists(__DIR__ . '/config.php');
        ?>
        <div class="check-item <?php echo $configExists ? 'ok' : 'error'; ?>">
            <span class="status"><?php echo $configExists ? '✓' : '✗'; ?></span>
            <strong>config.php:</strong> <?php echo $configExists ? '存在します' : '見つかりません'; ?>
        </div>

        <?php
        // contact-handler.phpの存在確認
        $handlerExists = file_exists(__DIR__ . '/contact-handler.php');
        ?>
        <div class="check-item <?php echo $handlerExists ? 'ok' : 'error'; ?>">
            <span class="status"><?php echo $handlerExists ? '✓' : '✗'; ?></span>
            <strong>contact-handler.php:</strong> <?php echo $handlerExists ? '存在します' : '見つかりません'; ?>
        </div>

        <?php
        // logsディレクトリ
        $logsDir = __DIR__ . '/logs';
        $logsDirExists = is_dir($logsDir);
        $logsDirWritable = $logsDirExists && is_writable($logsDir);
        ?>
        <div class="check-item <?php echo $logsDirWritable ? 'ok' : 'warning'; ?>">
            <span class="status"><?php echo $logsDirWritable ? '✓' : '⚠'; ?></span>
            <strong>logsディレクトリ:</strong> 
            <?php 
            if ($logsDirWritable) {
                echo '存在し、書き込み可能です';
            } elseif ($logsDirExists) {
                echo '存在しますが、書き込み不可です';
            } else {
                echo '存在しません（自動作成されます）';
            }
            ?>
        </div>

        <?php
        // tmpディレクトリ
        $tmpDir = __DIR__ . '/tmp';
        $tmpDirExists = is_dir($tmpDir);
        $tmpDirWritable = $tmpDirExists && is_writable($tmpDir);
        ?>
        <div class="check-item <?php echo $tmpDirWritable ? 'ok' : 'warning'; ?>">
            <span class="status"><?php echo $tmpDirWritable ? '✓' : '⚠'; ?></span>
            <strong>tmpディレクトリ:</strong> 
            <?php 
            if ($tmpDirWritable) {
                echo '存在し、書き込み可能です';
            } elseif ($tmpDirExists) {
                echo '存在しますが、書き込み不可です';
            } else {
                echo '存在しません（自動作成されます）';
            }
            ?>
        </div>

        <h2>📧 メール設定</h2>

        <?php
        if ($configExists) {
            require_once __DIR__ . '/config.php';
            
            $adminEmailOk = defined('ADMIN_EMAIL') && filter_var(ADMIN_EMAIL, FILTER_VALIDATE_EMAIL);
            ?>
            <div class="check-item <?php echo $adminEmailOk ? 'ok' : 'error'; ?>">
                <span class="status"><?php echo $adminEmailOk ? '✓' : '✗'; ?></span>
                <strong>ADMIN_EMAIL:</strong> 
                <?php 
                if ($adminEmailOk) {
                    echo ADMIN_EMAIL;
                } else {
                    echo '未設定または不正な形式';
                }
                ?>
            </div>

            <?php
            $mailFromOk = defined('MAIL_FROM') && filter_var(MAIL_FROM, FILTER_VALIDATE_EMAIL);
            ?>
            <div class="check-item <?php echo $mailFromOk ? 'ok' : 'error'; ?>">
                <span class="status"><?php echo $mailFromOk ? '✓' : '✗'; ?></span>
                <strong>MAIL_FROM:</strong> 
                <?php 
                if ($mailFromOk) {
                    echo MAIL_FROM;
                } else {
                    echo '未設定または不正な形式';
                }
                ?>
            </div>
        <?php } ?>

        <h2>🔧 PHP拡張機能</h2>

        <?php
        // mbstringの確認
        $mbstringLoaded = extension_loaded('mbstring');
        ?>
        <div class="check-item <?php echo $mbstringLoaded ? 'ok' : 'error'; ?>">
            <span class="status"><?php echo $mbstringLoaded ? '✓' : '✗'; ?></span>
            <strong>mbstring:</strong> <?php echo $mbstringLoaded ? 'インストール済み' : '未インストール'; ?>
            <?php if (!$mbstringLoaded): ?>
                <br><small>日本語メール送信に必要です</small>
            <?php endif; ?>
        </div>

        <?php
        // jsonの確認
        $jsonLoaded = extension_loaded('json');
        ?>
        <div class="check-item <?php echo $jsonLoaded ? 'ok' : 'error'; ?>">
            <span class="status"><?php echo $jsonLoaded ? '✓' : '✗'; ?></span>
            <strong>json:</strong> <?php echo $jsonLoaded ? 'インストール済み' : '未インストール'; ?>
        </div>

        <h2>🌐 HTTPS設定</h2>

        <?php
        $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || 
                   (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
        ?>
        <div class="check-item <?php echo $isHttps ? 'ok' : 'warning'; ?>">
            <span class="status"><?php echo $isHttps ? '✓' : '⚠'; ?></span>
            <strong>HTTPS:</strong> <?php echo $isHttps ? '有効' : '無効'; ?>
            <?php if (!$isHttps): ?>
                <br><small>本番環境ではHTTPSの使用を強く推奨します</small>
            <?php endif; ?>
        </div>

        <div style="margin-top: 40px; padding: 20px; background: #fff3e0; border-radius: 5px;">
            <h3 style="margin-top: 0;">✅ 次のステップ</h3>
            <ol>
                <li>すべての項目が <strong style="color: #4CAF50;">✓ OK</strong> または <strong style="color: #FF9800;">⚠ 警告</strong> であることを確認</li>
                <li><strong style="color: #f44336;">✗ エラー</strong> がある場合は修正してください</li>
                <li>お問い合わせフォームで実際にテスト送信を行ってください</li>
                <li>問題がなければ、<strong>このファイル（security-check.php）を削除してください</strong></li>
            </ol>
        </div>
    </div>
</body>
</html>
