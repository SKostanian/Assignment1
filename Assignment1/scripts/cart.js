// Create a table row for the shopping cart
function createRowForTable(product){
    const tr = document.createElement("tr");

    const tdIndex = document.createElement('td');
    tdIndex.textContent = product[5];

    const tdImage = document.createElement('td');
    const cover = document.createElement("img");
    cover.src = product[4];
    tdImage.appendChild(cover);

    const color = document.createElement("p");
    color.textContent = product[1];
    tdImage.appendChild(color);

    const tdProduct = document.createElement('td');
    tdProduct.textContent = product[0];

    const tdPrice = document.createElement('td');
    tdPrice.textContent = product[3];

    const tdAction = document.createElement('td');
    const actionRemove = document.createElement('button');
    actionRemove.textContent = "Remove";
    actionRemove.addEventListener('click', function(){
        // Removing a single item from local storage
        localStorage.removeItem(`item_${product[5]}`);
        const tableRows = document.querySelectorAll('.cart tbody tr');
        if (tableRows){
            // Searching for a row
            for (let row of tableRows){
                const index = row.dataset.index;
                if (index == product[5]){
                    row.remove();
                }
            }
        }
        // The listener is triggered once, by default it is false
        // url: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    }, {once:true});
    tdAction.appendChild(actionRemove);

    tr.appendChild(tdIndex);
    tr.appendChild(tdImage);
    tr.appendChild(tdProduct);
    tr.appendChild(tdPrice);
    tr.appendChild(tdAction);
    // set the data attribute with the index key for the string
    tr.dataset.index = product[5];

    return tr;
}
// Load products from local storage
function loadingProducts(){
    const tableTbody = document.querySelector('.cart tbody');
    if (tableTbody){
        const keys = Object.keys(localStorage);
        // Searching for a key
        for(let key of keys){
            const product = JSON.parse(localStorage.getItem(key));
            const row = createRowForTable(product);
            tableTbody.appendChild(row);
        }
    }
}
// Clear the cart function
function clearCart(){
    localStorage.clear();
    const tableRows = document.querySelectorAll('.cart tbody tr');
    if (tableRows){
        tableRows.forEach(function(item){
            item.remove();
        });
    }
}
// Calling the loading products and clear chat function once it's loaded
window.onload = function(){
    loadingProducts();

    const buttonClearAll = document.querySelector('.cart__clear');
    if (buttonClearAll){
        buttonClearAll.addEventListener('click', clearCart);
    }
}