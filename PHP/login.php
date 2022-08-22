<?php
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $mail=mb_strtolower($_POST["mail"]);
    $sifre=mb_strtolower($_POST["sifre"]);
    if($mail=="b191200046@sakarya.edu.tr" && $sifre=="3434")
    {
        echo "<h1 class='display-2'> Hoşgeldin B191200046 </h1>";
        header("Refresh: 2; url=../index.html");
    }
    else
    {
        echo"<script>alert('Mail Adresi yada Parola Hatalı!!! Giriş Ekranına Yönlendiriliyorsunuz, Lütfen Bekleyin ')</script>";
        header("Refresh: 2; url=login.html");
    }
}

?>


