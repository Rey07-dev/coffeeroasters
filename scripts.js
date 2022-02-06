// mobile menu animation
    // Grab our menu hamburger icon, hamburger close icon and nav
var menuIcon = document.querySelector('.mobile-menu-icon');
var closeIcon = document.querySelector('.menu-icon-close');
var menu = document.querySelector('.mobile-screen-menu');

// Fuction to listen for click on our menu icon to open menu
menuIcon.addEventListener('click', () => {
    // change the styles on our menu
    menu.style.visibility = "visible";
    menu.style.opacity = 1;
    menu.style.height = '500px';
    // change styles on our close icon to make it visible
    closeIcon.style.display = 'block';
    closeIcon.style.opacity = 1;
    // hide our hamburger menu icon while close icon is visbile
    menuIcon.style.display = 'none';
});
// Fuction to listen for click on our close icon to close the menu
closeIcon.addEventListener('click', () => {
    // change the styles on our menu back
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
    menu.style.height = 0;
    // change styles on our close icon to make it hidden
    closeIcon.style.display = 'none';
    closeIcon.style.opacity = 0;
    // make our hamburger icon visible again
    menuIcon.style.display = 'block';
});