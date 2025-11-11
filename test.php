```php
<?php
echo "PHP Version: " . phpversion() . "<br>";
echo "Session Test: ";
@session_start();
echo isset($_SESSION) ? "OK" : "NG";
?>
```