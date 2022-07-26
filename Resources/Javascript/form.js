

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
        
        x=localStorage.setItem('customerName',Name);
        console.log(x);
        return false;

        
    }
    return false;

};

function calculateTotal(){
    let totalContainer= document.querySelector('.calTotal');
    let cartCost= localStorage.getItem('totalCost');
    console.log(cartCost);
    totalContainer.innerHTML='<span style="margin-right:3rem;">Total Cost </span>'+'Rs.'+cartCost+'.00';


}
function popup(){
    let displayName=localStorage.getItem('customerName');
    let cartCost= localStorage.getItem('totalCost');
    alert("Dear "+displayName+" ,You have confirmed the amount of Rs."+cartCost+".00");
    localStorage.clear();
}

document.getElementById("totalClick").addEventListener("click", popup); 

calculateTotal();
