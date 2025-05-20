const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Optional: toggle hamburger icon between ☰ and X
        hamburgerButton.textContent = hamburgerButton.textContent === '☰' ? 'X' : '☰';
    });
} else {
    console.error('Required elements not found in the DOM.');
}