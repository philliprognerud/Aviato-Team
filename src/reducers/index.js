import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerUser from "./registerUser";

export default combineReducers({
  auth: authReducer,
  registerRes: registerUser
});
