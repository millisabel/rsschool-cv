window.addEventListener('DOMContentLoaded', ()=>{
    const nav = document.querySelector('.nav');
    const navBtn = document.querySelector('button.nav__btn');
    const navLink = document.querySelectorAll('.nav .nav__link');
    
    if(!nav.classList.contains('nav--hide')){
        nav.classList.add('nav--hide');
    }
    
    if(navBtn.classList.contains('nav--hide')){
        navBtn.classList.remove('nav__btn--close');
    }
    
    navBtn.addEventListener('click', ()=>{
        toggleMenu(nav, navBtn);
    })

    navLink.forEach((item) =>{
        item.addEventListener('click', (e) => {
            toggleMenu(nav, navBtn);
        })
    })
})

function toggleMenu(item, btn){
    item.classList.toggle('nav--hide');
    btn.classList.toggle('nav__btn--close');
}