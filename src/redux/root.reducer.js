import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//categorized reducers combined
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
