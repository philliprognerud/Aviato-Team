import { combineReducers } from "redux";
import authReducer from "./authReducer";
import widget from "./widget";

export default combineReducers({
  auth: authReducer,
  widget: widget
});
