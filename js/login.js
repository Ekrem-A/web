function kontrol()
{
    document.getElementById("mailuyari").innerHTML="";
    var mailkontrol=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var mail=document.forms["myform"]["mail"].value;
    if(!mail.match(mailkontrol))
    { 
      document.getElementById("mailuyari").innerHTML="Dogru E-mail Formatinda Girmediniz!!!";
      
      return false;
    }
    else
    {
        return true;
    }
    
}