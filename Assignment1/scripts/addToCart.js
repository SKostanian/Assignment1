// function which popping out the alert message when user clicked on buy, to add the cart -->
function addToCart(product){
    alert(product[0] + ' - ' + product[1] + " added to Cart");
    localStorage.setItem(`item_${product[5]}`, JSON.stringify(product));
}


