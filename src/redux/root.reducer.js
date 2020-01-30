import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//categorized reducers combined
export default combineReducers({
  user: userReducer
});
