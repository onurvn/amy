const hamburgerMenu = document.querySelector('.navIcon');
const navContent = document.querySelector('#navContent');
const closeNavbar = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('#navContent nav ul li a');
const scrollButton = document.querySelector('.scroll-top');

if (scrollButton) {
    window.addEventListener('scroll', () => {
        if (scrollY > (window.innerHeight * 1.2)) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    scrollButton.addEventListener('click', () => {
        window.scrollTo(0, 0)
    });
}
hamburgerMenu.addEventListener('click', () => {
    navContent.classList.add('show');
    document.body.style.overflow = "hidden";
});
closeNavbar.addEventListener('click', () => {
    navContent.classList.remove('show');
    document.body.style.overflow = "initial";
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContent.classList.remove('show');
        document.body.style.overflow = "initial";
    });
});