import axios from "axios";
import { FETCH_USER, FETCH_WIDGET } from "./types";

export const setOktaUser = res => async dispatch => {
  dispatch({ type: FETCH_USER, payload: res });
};

export const fetchOktaWidget = () => async dispatch => {
  import OktaSignIn from "@okta/okta-signin-widget";

  let widget = new OktaSignIn({
    baseUrl: "https://dev-842835.oktapreview.com",
    clientId: "0oaeszy1axIjhc08c0h7",
    logo:
      "http://www.perfectfitcomputers.ca/wp-content/uploads/2014/08/aviato-logo.svg",
    redirectUri: "http://ec2-34-217-31-45.us-west-2.compute.amazonaws.com:3000",
    authParams: {
      responseType: "id_token"
    }
  });

  dispatch({ type: FETCH_WIDGET, payload: widget });
};
