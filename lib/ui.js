import { formatNumber } from 'lib/helpers.js';

export function createCartLine(product, quantity) {

 
  const cartLineElement = document.createElement('div');
  const cartLineTitleElement = document.createElement('strong');
  const cartLinePriceElement = document.createElement('span');
  cartLinePriceElement.textContent = formatNumber(product.price);

  cartLineTitleElement.textContent = product.title;

  cartLineElement.appendChild(cartLineTitleElement);
  cartLineElement.appendChild(cartLinePriceElement);

  // TODO hér þarf að búa til eventListener sem leyfir að eyða línu úr körfu

  return cartLineElement;
}

/**
 * Sýna efni körfu eða ekki.
 * @param {boolean} show Sýna körfu eða ekki
 */
export function showCartContent(show = true) {
  // Finnum element sem inniheldur körfuna
  const cartElement = document.querySelector('.cart');

  if (!cartElement) {
    console.warn('fann ekki .cart');
    return;
  }

  const emptyMessage = cartElement.querySelector('.empty-message');
  const cartContent = cartElement.querySelector('.cart-content');

  if (!emptyMessage || !cartContent) {
    console.warn('fann ekki element');
    return;
  }

  if (show) {
    emptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');
  } else {
    emptyMessage.classList.remove('hidden');
    cartContent.classList.add('hidden');
  }
}
