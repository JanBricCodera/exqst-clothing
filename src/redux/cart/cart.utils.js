// import { addItem } from "./cart.actions";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    //Append similar ids to one construct
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    //add quantity property to orders with the same id tag
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
