//memoization/caching using 'reselect' plugin to avoid multiple computation of the same result if the state never changed. yarn add reselect
//Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulator, cartItems) => accumulator + cartItems.quantity,
      0
    )
);
