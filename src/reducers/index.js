import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerUser from "./registerUser";
import logoutUser from "./logoutUser";

export default combineReducers({
  auth: authReducer,
  registerRes: registerUser,
  logoutUser
});
