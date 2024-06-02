// document.getElementById('burgerBtn').addEventListener('click', function() {
//     var menu = document.getElementById('menu');
//     if (menu.classList.contains('active')) {
//         menu.classList.remove('active');
//     } else {
//         menu.classList.add('active');
//     }
// });

// const menu = document.getElementById('menu');
// const burgerBtn = document.getElementById('burgerBtn');

// burgerBtn.addEventListener('click', () => {
//     // burgerBtn.classList.toggle('active');
//     menu.classList.toggle('active');
// });

function openMenu(icon) {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    icon.classList.toggle('fa-x')
}    