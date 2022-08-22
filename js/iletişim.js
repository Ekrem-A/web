
function bosmu()
{
  var nameler=["adsoyad","telefon","mail","ilksifre","ikisifre","sehirler","dogumtarihi","adres"];
  var idler= ["adsoyad","telefon","mail","sifre1","sifre2","sehir","dogumtarihi","adres"]; 
    for(var i=0; i<nameler.length; i++)
    {
        document.getElementById(idler[i]).innerHTML=""; 
    }
    
    for(var i=0; i<nameler.length; i++)
    {
       if(document.forms["form"][nameler[i]].value=="")
       {
        document.getElementById(idler[i]).innerHTML="BOŞ BIRAKILAMAZ!";
       }
      
    }  
    for(var i=0; i<nameler.length; i++)
    {
       
       if(document.forms["form"][nameler[i]].value=="")
        {
          return false;
        } 
       
    }
    var mailkontrol=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var telkontrol=/^( ?0? ?5[0-9]{2} ?[0-9]{3} ?[0-9]{2} ?[0-9]{2} ?)/;
    var mail=document.forms["form"][nameler[2]].value;
    var tel=document.forms["form"][nameler[1]].value;
    var bosluksuz=tel.replace(/\s+/g, '');
    if(!(bosluksuz.length>9&&bosluksuz.length<12))
    { 
      document.getElementById("telefon").innerHTML="TELEFON NUMARASI 9-11 KARAKTER OLABİLİR!!!";
      return false;
    }
    if(!mail.match(mailkontrol))
    { 
      document.getElementById("mail").innerHTML="LÜTFEN DOĞRU E-MAİL FORMATINDA GİRİNİZ!!!";
      return false;
    }
    if(!tel.match(telkontrol))
    {
      document.getElementById("telefon").innerHTML="LÜTFEN DOĞRU FORMATTA TELEFON NUMARASI GİRİNİZ!!!";
      return false;
    }
    if(!(document.forms["form"][nameler[4]].value==document.forms["myform"][nameler[3]].value) && !(document.forms["form"][nameler[4]].value==""))
    {
     document.getElementById("sifre2").innerHTML="GİRİLEN ŞİFRELER AYNI DEĞİL!!!";
     return false;
    }
    else
    {
          return true;
    }    
    
}

  function temizle()
 {
   document.getElementById("adsoyad").innerHTML="";
   document.getElementById("telefon").innerHTML="";
   document.getElementById("mail").innerHTML="";
   document.getElementById("sifre1").innerHTML="";
   document.getElementById("sifre2").innerHTML="";
   document.getElementById("sehir").innerHTML="";
   document.getElementById("dogumtarihi").innerHTML="";
   document.getElementById("adres").innerHTML="";
  
 }