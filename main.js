const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('display-menu');
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('bx-sun');
    icon.classList.toggle('bx-moon');
});

function toggleCopyright() {
    const copyrightContent = document.querySelector('.copyright-content');
    if (copyrightContent.style.maxHeight === '0px' || copyrightContent.style.maxHeight === '') {
        copyrightContent.style.maxHeight = copyrightContent.scrollHeight + 'px'; // Set to the full height
    } else {
        copyrightContent.style.maxHeight = '0'; // Collapse
    }
}
