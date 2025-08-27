import {cart, removeFromCart, calculateCartQuantity, updateQuantity} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import deliveryOptions from '../data/deliveryOptions.js'

const today = dayjs();
const deliveryDate = today.add(7, 'days'); 
console.log(deliveryDate.format('dddd, MMMM D'));

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-amount">${cartItem.quantity}</span>
            </span>

            <span class="js-update-quantity-link update-quantity-link link-primary" data-product-id="${matchingProduct.id}">
              Update
            </span>

            <input type="number" min="1" max="1000" class="quantity-input js-quantity-amount-${matchingProduct.id}" data-product-id="${matchingProduct.id}">

            <span class="save-quantity-link js-save-link link-primary" data-product-id="${matchingProduct.id}">Save</span>

            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `
});

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = '';

  // loop deliveryOptions and make future date const
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'
    );
  
  // formate future date const 
  const dateString = deliveryDate.format(
    'dddd, MMMM, d'
  );

  const priceString = deliveryOption.priceCents === 0 ? 
    'FREE' 
    : `$${formatCurrency(deliveryOption.priceCents)}`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId; 

    //for each option generate HTML & combine together
    html += `
    <div class="delivery-option">
      <input type="radio"
        ${isChecked ? 'checked' : ''}
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}"/>
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
          ${priceString} - Shipping
        </div>
      </div>
    </div>
    `
  })
  return html; 
}

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      updateCartQuantity();
    });
  });

function updateCartQuantity() {
const cartQuantity = document.querySelector('.js-update-cart-quantity')
  .innerHTML = `Checkout (${calculateCartQuantity()}) items`;
}

updateCartQuantity()

document.querySelectorAll('.js-update-quantity-link')
  .forEach((updateLink) => {
    updateLink.addEventListener('click', () => {
      const productId = updateLink.dataset.productId
      console.log(productId);

      //add class to container on click update
      document.querySelector(`.js-cart-item-container-${productId}`).classList.add("is-editing-quantity")

    });
  });

function clickSave(productId) {

  // remove class that hides quantity and update 
  document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity')

  // when clicking "Save", use DOM to get quantity of input value (remmeber to convert into a number)
  const quantityValue = Number(document.querySelector(`.js-quantity-amount-${productId}`).value)

  // update new quantity to cart 
  updateQuantity(productId, quantityValue);
  console.log(cart);
  
  //make sure quantity >= 0
  if (quantityValue < 0 || quantityValue > 1000) {
    quantityValue = 0;
  };

  //display quantity on checkout.html
  updateCartQuantity();
  document.querySelector('.js-quantity-amount').innerHTML = quantityValue;
  };

// add evenlistener to all save links. when clicking "Save" remove the class "is-editing-quantity"
document.querySelectorAll('.js-save-link')
  .forEach((saveLink) => {
    const productId = saveLink.dataset.productId

    saveLink.addEventListener('click', () => {
      clickSave(productId);
    });

    document.querySelectorAll(`.js-quantity-amount-${productId}`)
    .forEach((inputbox) => {
      inputbox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          const productId = inputbox.dataset.productId
          clickSave(productId);
        };
      });   
    });

  });


