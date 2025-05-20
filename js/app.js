let total;
clear();

function add() {
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;

    let nameProduct = product.split('-')[0];
    let unitValue= product.split('R$')[1];

    let price = quantity * unitValue;

    let productList = document.getElementById('productList');
    productList.innerHTML = productList.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantity}x</span> ${nameProduct} <span class="texto-azul">R$${price}</span></section>`

    total = total + price;
    let fieldTotal = document.getElementById('total-value');

    fieldTotal.textContent = `R${total}`;
    document.getElementById('quantity').value = 0;
}

function clear() {
    total = 0;
    document.getElementById('productList').innerHTML = '';
    document.getElementById('total-value').textContent = 'R$0';
}