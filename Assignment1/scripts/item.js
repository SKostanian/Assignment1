// Uploading product from the array and parsing an item from Session Storage
function uploadProduct(){
    const product = JSON.parse(sessionStorage.getItem('product'));
    const productCover = document.querySelector('.product-cover img');
    productCover.src = product[4];

    const productHeading = document.querySelector('.product-description h2');
    productHeading.innerText = product[0] + ' - ' + product[1];
    const productDescription = document.querySelector('.product-description p');
    productDescription.innerText = product[2];
    const productPrice = document.querySelector('.product-description b');
    productPrice.innerText = product[3];
}

// Window onload function for adding item to the cart
window.onload = function () {
    uploadProduct();
    const buttonCart = document.querySelector('.add-to-cart');
    if (buttonCart) {
        buttonCart.addEventListener('click', function () {
            const product = JSON.parse(sessionStorage.getItem('product'));
            addToCart(product);
        })
    }
}