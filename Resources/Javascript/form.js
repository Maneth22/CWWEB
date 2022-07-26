

function validate(){
        
    var Name = document.getElementById("fullname").value;
    var tele= document.getElementById("telephone").value;
    var  email= document.getElementById("email").value;
    var erroMsg= document.getElementById("error")
    let errText;
    //var errText;
    if(Name=="" || email=="" || tele==""){
        errText="Please fill all the above fields";
        erroMsg.innerHTML=errText;
        return false;

    }if(isNaN(tele) || tele.length!=10){
        errText="Incorrect Telephone Number"
        erroMsg.innerHTML=errText;
        return false;
    }else{
        errText="success";
        erroMsg.innerHTML=errText;
        document.getElementById("myform").reset(); 
        return false;
    }
    return false;

};

