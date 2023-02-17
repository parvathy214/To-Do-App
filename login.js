let eml =document.getElementById("eml");
let pwd = document.getElementById("pwd");

function valus(){
    let eml =document.getElementById("eml");
    let erus=document.getElementById("erus");
    let regus = /^[a-zA-Z][a-zA-Z\d]{2,30}$/i;
    if(regus.test(eml.value)){
        erus.innerHTML=" Valid";
        erus.style.color= 'green';
        eml.style.border='2px solid green';
        return true;
    }
    else{
        erus.innerHTML="Not Valid";
        erus.style.color= 'red';
        eml.style.border='2px solid red';
        return false;

    }
}
    function valpwd(){

        let pwd =document.getElementById("pwd");
    let erpwd=document.getElementById("erpwd");
    let regus = /^[\d]{5,}$|^[\dA-Za-z]{5,}$/i
    if(regus.test(pwd.value)){
        erpwd.innerHTML=" Valid"
        erpwd.style.color= 'green'
        pwd.style.border='2px solid green'
        return true
    }
    else{
        erpwd.innerHTML="Not Valid"
        erpwd.style.color= 'red'
        pwd.style.border='2px solid red'
        return false

    } 
}
function ValCpwd(){
    
    let pwd= document.getElementById("pwd");
    let cpwd= document.getElementById("cpwd");
    let cpwderror=document.getElementById("errorcpwd");
    
    if(pwd.value!= cpwd.value){
        cpwderror.innerHTML="Password does not match";
        cpwderror.style.color='red';
        cpwd.style.border="2px solid red"
        return false;
    }
    else{
        cpwderror.innerHTML="Password Match!!!";
        cpwderror.style.color= 'green';
        cpwd.style.border="2px solid green";
        return true;
    }
    
  }
function valform(event,callback){
    if(!valpwd() || !valus()){
       
        alert('Not a valid  Format ');
        event.preventDefault();
    }
    else{
        callback()
        
    }
}

function login(){
    let eml =document.getElementById("eml");
    let pwd = document.getElementById("pwd");
   
    if (eml.value === 'admin' && pwd.value === '12345') {
        alert("success!!")
        // window.open("./home.html")  ;
        event.preventDefault();
        location.replace('./home.html');
   } 
      else {
        alert('Invalid username or password');
      }
    }
    
