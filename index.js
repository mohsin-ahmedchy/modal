'use strict'
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');
let showModal = document.querySelectorAll('.show-modal');
//console.log(showModal);
//remove class 
let btnOpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// Add class
let btnCloseModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i =0;i<showModal.length;i++){
showModal[i].addEventListener('click',btnOpenModal);
}
closeModal.addEventListener('click',btnCloseModal);
overlay.addEventListener('click',btnCloseModal);

//Escape key/ fixed key take from keyboard

document.addEventListener('keydown',function(e){
 if(e.key==='Escape'||e.key==='k' &&(!modal.classList.contains
 ('hidden'))){
     btnCloseModal();
 }
})