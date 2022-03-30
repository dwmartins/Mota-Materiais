const activeMenu = document.querySelector('.menu-hamburguer');
const openMenu = document.querySelector('.nav-list');

activeMenu.addEventListener('click', function() {
    openMenu.classList.toggle('active');

    console.log('clicou')
});