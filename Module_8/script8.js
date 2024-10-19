let products = [
    { id: 1, name: 'Cruise Bahamas', price: 1110.99, image: 'img/cruse1.jpg'},
    { id: 2, name: 'Cruise Alaska', price: 520.99, image: 'img/cruse2.png'},
    { id: 3, name: 'Cruise Western Caribbean', price: 634.99, image: 'img/cruse3.jpg'},
    { id: 4, name: 'Cruise New England', price: 215.99, image: 'img/cruse4.png'},
    { id: 5, name: 'Cruise Jamaica', price: 122.99, image: 'img/cruse5.png'},
    { id: 6, name: 'Cruise Key West', price: 249.99, image: 'img/cruse6.jpg'},
];

let cart = [];

function renderProducts()
{
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
         <img src = "${product.image}" alt="${product.name}">
         <h3>${product.name}</h3>
         <p>$${product.price}</p>
         <button>Add to Cart</button>
        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId)
{
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart()
{
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) =>
    {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</td>
            <td>$${product.price}</td>
            <td>$${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal()
{
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        swal({
            text: "Your cart is empty!",
            icon: "warning",
            title: "Oops...",
            button: "close",
        });
    } else {
        swal({
            title: "Success!",
            text: "Your request was submitted successfully!",
            icon: "success",
            button: "close",

        });
     }
});

renderProducts();