// Change navbar style on scroll

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 10)
})

// Show/Hide FAQ Section

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})

// Navbar Toggle

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close navbar

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav);