// Generating Background Dots
const container = document.getElementById('bg-dots');
const DOTS = 480;
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
for (let i = 0; i < DOTS; i++) {
    const dots = document.createElement('div');
    dots.classList.add('dots');
    container.appendChild(dots);
}


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}