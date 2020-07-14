function validation(){


}
function nameValidation(){
    var name=document.getElementById("name").value;
    var messege="OK";
    var messegeColor="green";
    if(name.length<3){
        messege="Kérlek adj meg hosszabb felhasználló nevet!";
        messegeColor="red";
    }else if(name.length>50){
        messege=" Kérlek adj meg rövidebb felhasznáó nevet!";  
        messegeColor="red"; 
    }
    document.getElementById("nameMessegeBox").innerHTML=messege;
    document.getElementById("nameMessegeBox").style.color = messegeColor;
}
function emailValidation(){
    var email=document.getElementById("email").value;
    var messege="OK";
    var messegeColor="green";
    if(email.length<3){
        messege="Hibás email cím!";
        messegeColor="red";
    }else if(email.length>50){
        messege="Hibás email cím!";  
        messegeColor="red"; 
    }else if(email.indexOf("@")==-1 && email.indexOf(".")==-1){
        messege="Hibás email cím!";  
        messegeColor="red"; 
    }
    document.getElementById("emailMessegeBox").innerHTML=messege;
    document.getElementById("emailMessegeBox").style.color = messegeColor;
}
