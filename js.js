// Main navigation
const navBar = document.querySelector('.nav-bar');
const mainNav = document.querySelector('.main-nav');
const menuList = document.querySelector('.menu-list');
const navItem = document.querySelectorAll('.nav-item');
const lineBtn = document.querySelectorAll('.line-btn');

let showMenu = false;

navBar.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        navBar.classList.add('close');
        mainNav.classList.add('show');
        menuList.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        lineBtn.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        navBar.classList.remove('close');
        mainNav.classList.remove('show');
        menuList.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        lineBtn.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}

// Redirects
const btnContact = document.querySelector('.btn.btn-contact');
const btnAbout = document.querySelector('.btn.btn-about');
const btnShop = document.querySelector('.btn.btn-shop');

btnContact.addEventListener('click', contactPage);
btnAbout.addEventListener('click', aboutPage);
btnShop.addEventListener('click', shopPage);

function contactPage() {
    window.location.href = 'contact.html';
}

function aboutPage() {
    window.location.href = 'about.html';
}

function shopPage() {
    window.location.href = 'shop.html';
}

// Map
function initMap() {
    var options = {
        zoom: 10,
        center: {lat:32.299507, lng:-64.790337}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}