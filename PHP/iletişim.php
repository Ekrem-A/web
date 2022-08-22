<?php
if($_SERVER["REQUEST_METHOD"]=="POST")
{
echo "<h1 class='display-4' id='yaziilk' >HOŞGELDİNİZ<h1>";
echo "<h1 class='display-4'>İLETİŞİM BİLGİLERİNİZ BAŞARIYLA GÖNDERİLMİŞTİR</h1>";
$adsoyad=$_POST["adsoyad"];
$telefon=$_POST["telefon"];
$mail=$_POST["mail"];
$sifre=$_POST["ilksifre"];
$dogumyeri=$_POST["dogumyeri"];
$dogumtarihi=$_POST["dogumtarihi"];
$cinsiyet=$_POST["cinsiyet"];
$okul=$_POST["egitim"];
$adres=$_POST["adres"];
echo"<h1 class='display-6'>KAYITLI BİLGİLERİNİZ</h1>";
echo"AD SOYAD: ".$adsoyad."<br>";
echo"TELEFON: ".$telefon."<br>";
echo"MAİL: ".$mail."<br>";
echo"ŞİFRE:".$sifre."<br>";
echo"DOĞUM YERİ:".$dogumyeri."<br>";
echo"DOĞUM TARİHİ:".$dogumtarihi."<br>";
echo"CİNSİYET:".$cinsiyet."<br>";
echo"OKUL:".$okul."<br>";
echo"ADRES:".$adres."<br>";

echo "<h1 class='display-4'>ANA SAYFAYA YÖNLENDİRİLİYORSUNUZ. LÜTFEN BEKLEYİN...</h1><br><br><br>";
header("Refresh: 10; url=../index.html");

}

else
{
    echo "HATA";
    header("Refresh: 2; url=../iletişim.html");
}
?>

