export const cart = [];

export function addToCart(productId, quantitySelector) {
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
 