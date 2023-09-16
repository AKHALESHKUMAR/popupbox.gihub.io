
let model1=document.querySelector(".modal");
let btn=document.querySelector(".btn");
let close=document.querySelector(".close");


btn.addEventListener("click",openmodel);
close.addEventListener("click", closemodel);


function openmodel(e){
    e.preventDefault();
    model1.style.display="block";
}

function closemodel(){
    model1.style.display="none";
}


