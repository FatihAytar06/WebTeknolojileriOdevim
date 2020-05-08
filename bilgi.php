<?php
$kullanici_adi=$_POST['isim'];
$sifre=$_POST['sifre'];
$email=$_POST['eposta'];
$cinsiyet=$_POST['cinsiyet'];
$memleket=$_POST['sehirler'];
echo "Kullanıcı adı :",$kullanici_adi , "<br>";
echo "Şifre :",$sifre , "<br>";
echo "E-mail :",$email , "<br>";
echo "Cinsiyet :",$cinsiyet , "<br>";
echo "Memleket :",$memleket , "<br>";
echo "<a href=anasayfa.html>Çıkış için tıklayın</a></center>";
?>