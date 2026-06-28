/*=====================================
SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=====================================
HEADER SHADOW
=====================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});


/*=====================================
ÜRÜN RESMİ DEĞİŞTİR
=====================================*/

function changeImage(image){

const big=document.getElementById("mainImage");

if(big){

big.src=image.src;

}

}


/*=====================================
WHATSAPP SİPARİŞ
=====================================*/

function orderProduct(){

const size=document.getElementById("size");

if(!size) return;

if(size.value==""){

alert("Lütfen ölçü seçiniz.");

return;

}

const text=

`Merhaba, ${document.title}

${size.value}

ölçüsü için fiyat alabilir miyim?`;

window.open(

"https://wa.me/905550360027?text="+

encodeURIComponent(text),

"_blank"

);

}