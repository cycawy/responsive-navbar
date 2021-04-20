const burger = document.querySelector('.burger');
const nav=document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.link');

const navSlide = () => {
    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('navbar-active');
        //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })
        // burger animation
        burger.classList.toggle('toggle');
    })
    
}

navSlide();