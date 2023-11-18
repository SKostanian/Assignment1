/* Applying the toggleMenu function */
function toggleMenu() {
    // Looking for an element on the page by class selector
    // url: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    const mobileMenu = document.querySelector('.mobile__menu');
    if (mobileMenu) {
        // If the element is found, we access the classList property - an array of classes that the found element has
        // and use the built-in function to add/remove the hidden class
        mobileMenu.classList.toggle('hidden');
    }
}

// Looking for an element on the page by class selector
const burgerMenu = document.querySelector('.header__menu-burger');
if (burgerMenu) {
    // If the item is found, we listen for the click event. When the click occurs, the toggleMenu function will be executed
    burgerMenu.addEventListener('click', toggleMenu);
}

