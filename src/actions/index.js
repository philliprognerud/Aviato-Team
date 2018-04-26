import axios from "axios";
import { FETCH_USER, REGISTER_USER } from "./types";
import OktaSignIn from "@okta/okta-signin-widget";

export const setOktaUser = (res = null) => async dispatch => {
  dispatch({ type: FETCH_USER, payload: res });
};

export const registerOktaUser = (
  firstName,
  lastName,
  email,
  password
) => async dispatch => {
  let res = await axios.post(
    "http://ec2-34-217-31-45.us-west-2.compute.amazonaws.com:8000/api/add-okta-user",
    {
      firstName,
      lastName,
      email,
      password
    }
  );

  dispatch({ type: REGISTER_USER, payload: res });
};
