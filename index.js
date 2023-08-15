const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// dark mode
function myFunction() {
    let icon =document.getElementById('xxx');
    icon.classList.add('icon');
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


//  type

const type = new Typed( ".multiple-text",{
    strings:['MERN Stact Developer','Frontend Developer','Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});