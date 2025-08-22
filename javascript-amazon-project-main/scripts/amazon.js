import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

// make code to generate HTML 
let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-confirmation-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-button" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

//improve buttons to be interactive, when person presses on button, console.log('Added")

function addToCart(productId, quantitySelector) {
  let matchingItem;
  //loop cart see if matching item, if so update variable
  cart.forEach((cartItem) => {
    if (cartItem.name === productId) {
      matchingItem = cartItem;
    }
  });

  // check if matching variable exists
  if (matchingItem) {
    matchingItem.quantity += Number(quantitySelector.value);
  } else {
    cart.push({
    name: productId,
    quantity: Number(quantitySelector.value)
    }
  )
  } 
}

function totalCartQuantity() {
  let cartQuantity = 0;
  // loop cart, grab all quantity and add them up
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const {productId} = button.dataset;
    

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const addConfirmation = document.querySelector(`.js-add-confirmation-${productId}`)
    addConfirmation.classList.add('display-confirmation');
    setTimeout(() => {
      clearTimeout();
      addConfirmation.classList.remove('display-confirmation');
    }, 2000)

    addToCart(productId, quantitySelector);
    totalCartQuantity();
  });
});


