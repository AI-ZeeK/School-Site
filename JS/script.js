const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('menu-close');
const navHeader = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

function openNav(){
    navHeader.classList.add('active');
    menuBtn.style.setProperty('display', 'none');
}

function closeNav(){
    navHeader.classList.remove('active');
    menuBtn.style.setProperty('display', 'block');
}
