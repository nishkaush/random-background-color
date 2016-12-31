

var buton=document.getElementById("buton");

var allchar="0123456789ABCDEF";

buton.addEventListener("click",myFun);
buton.addEventListener("mouseover", myFun1);
buton.addEventListener("mouseleave", myFun2);

function myFun(){
var randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}


function myFun1(){
   this.style.backgroundColor="white";
}

function myFun2(){
   this.style.backgroundColor="red";
}