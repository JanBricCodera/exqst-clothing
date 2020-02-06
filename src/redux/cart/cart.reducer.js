import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload] //original but with a disadvantage. if user orders the same product more than once, it is not organized into one order with quantity increment
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ) //return the cart items not equal to the item deleted by user when true
      };

    default:
      return state;
  }
};

export default cartReducer;
