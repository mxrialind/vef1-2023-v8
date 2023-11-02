
const products = [
  {
    id: 1,
    title: 'HTML húfa',
    price: 5000,
  },
  {
    id: 2,
    title: 'CSS sokkar',
    price: 3000,
  },
  {
    id: 3,
    title: 'JavaScript jakki',
    price: 20000,
  },
];


function addProductToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    console.error('Product not found');
    return;
  }

  const cartEntry = document.querySelector(`[data-cart-product-id="${productId}"]`);
  if (cartEntry) {
    const quantityElement = cartEntry.querySelector('.quantity');
    const priceElement = cartEntry.querySelector('.price');

    const currentQuantity = parseInt(quantityElement.textContent);
    const newQuantity = currentQuantity + quantity;

    quantityElement.textContent = newQuantity;
    priceElement.textContent = `${product.price * newQuantity} kr.-`;
  } else {
    
    const cartTable = document.querySelector('.cart-table');
    const newRow = document.createElement('tr');
    newRow.setAttribute('data-cart-product-id', productId);

    newRow.innerHTML = `
      <td class="title">${product.title}</td>
      <td class="quantity">${quantity}</td>
      <td class="price">${product.price * quantity} kr.-</td>
        <td class="remove">
        <button onclick="removeProductFromCart(${productId})">Eyða</button>
      </td>
    `;

    cartTable.querySelector('tbody').appendChild(newRow);
  }
}


function removeProductFromCart(productId) {
  const cartEntry = document.querySelector(`[data-cart-product-id="${productId}"]`);
  if (cartEntry) {
    cartEntry.remove();
  } 
}


const addToCartForms = document.querySelectorAll('.add');
addToCartForms.forEach((form) => {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const productId = parseInt(form.closest('tr').getAttribute('data-product-id'));
    const quantityInput = form.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value);
    addProductToCart(productId, quantity);
    quantityInput.value = 0; 
  });
});
