document.addEventListener('DOMContentLoaded', () => {
    const menuOpnBtn = document.getElementById('menu-btn').addEventListener('click', openNav);
    const menuCloseBtn = document.getElementById('close-btn').addEventListener('click', closeNav);
});

function openNav() {
    const menuOpnBtn = document.getElementById('menu-btn');
    const secondNav = document.getElementById('second-nav');
    secondNav.style.display = "block";
}

function closeNav() {
    const menuCloseBtn = document.getElementById('menu-btn');
    const secondNav = document.getElementById('second-nav');
    secondNav.style.display = 'none';
}
