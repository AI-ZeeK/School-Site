const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('menu-close');
const navHeader = document.getElementById('mobile-nav');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);


function openNav(){
    navHeader.classList.add('active');
    menuBtn.classList.add('menu-btn-active');
}

function closeNav(){
    navHeader.classList.remove('active');
    menuBtn.classList.remove('menu-btn-active');
}

document.addEventListener('click', (event) => {
    if(!event.target.closest('.navbar') && !event.target.closest('.navbar'))
        navHeader.classList.remove('active');
        menuBtn.classList.remove('menu-btn-active');
    // body.style.setProperty('background-color', 'red')
    console.log('clicked')
})

// document.addEventListener('click' , (event) => {;
//     if(!event.target.closest(".header") && !event.target.closest(".navbar")){
//         navHeader.classList.remove('active');
//     }
// })
