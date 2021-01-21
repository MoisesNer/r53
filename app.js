const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-ul');
const links = document.querySelectorAll('.nav-ul li');

hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});