        const menuBtn = document.querySelector('.menu-btn')
        const menuLast = document.querySelector('.menulast')

        menuBtn.addEventListener('click',()=>{
            menuLast.classList.toggle('mobile-menu')
        });