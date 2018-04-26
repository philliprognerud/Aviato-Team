import axios from "axios";
import { FETCH_USER } from "./types";
import OktaSignIn from "@okta/okta-signin-widget";

export const setOktaUser = (res = null) => async dispatch => {
  dispatch({ type: FETCH_USER, payload: res });
};
