<?php

$_ENV["TEST"];
echo $_ENV["TEST"];

?>
<div><?php echo $_ENV["TEST"]; ?></div>
<html>
    <head>
    </head>
    <body>
        <div>Переменная из php:
            <span><?php echo $_ENV["TEST"]; ?></span>
        </div>
    </body>
</html>
