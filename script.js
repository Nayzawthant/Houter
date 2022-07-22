const menuBtn = document.querySelector('.menu-btn')
const SecondMenu = document.querySelector('.secondMenu')

menuBtn.addEventListener('click',()=>{
    SecondMenu.classList.toggle('mobile-menu')
});