import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import OktaSignIn from "@okta/okta-signin-widget";

import LoginPage from "./components/auth/LoginPage";
import Signup from "./components/auth/Signup";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.widget = new OktaSignIn({
      baseUrl: "https://dev-842835.oktapreview.com",
      clientId: "0oaeszy1axIjhc08c0h7",
      logo:
        "http://www.perfectfitcomputers.ca/wp-content/uploads/2014/08/aviato-logo.svg",
      redirectUri:
        "http://ec2-34-217-31-45.us-west-2.compute.amazonaws.com:3000",
      authParams: {
        responseType: "id_token"
      }
    });
  }

  componentDidMount() {
    // this.props.fetchOktaWidget();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header widget={this.widget} />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
