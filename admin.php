<?php 
 
include("ayar.php");
ob_start();
session_start();
 
if(!isset($_SESSION["login"])){
    header("Location:index.php");
}
else {
    echo "<center>Hoşgeldiniz ";
    echo $user;
    echo "<a href=index.html> Guvenli cikis</a></center>";
}
?>