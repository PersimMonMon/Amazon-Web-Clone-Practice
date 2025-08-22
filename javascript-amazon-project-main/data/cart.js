export const cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
}, {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}];

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
 