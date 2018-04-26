import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import OktaSignIn from "@okta/okta-signin-widget";

import Signup from "./components/auth/Signup";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

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

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.setOktaSession = this.setOktaSession.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth && window.location.href === "/login") {
      this.setOktaSession();
    }
  }

  setOktaSession() {
    this.widget.session.get(response => {
      if (response.status !== "INACTIVE") {
        this.props.setOktaUser(response);
        window.location.href = "/";
      } else {
        this.showLogin();
      }
    });
  }

  showLogin() {
    this.widget.renderEl(
      { el: this.loginContainer },
      response => {
        this.setOktaSession();
      },
      err => {
        console.log(err);
      }
    );
  }

  logout() {
    this.widget.signOut(() => {
      this.props.setOktaUser();

      this.showLogin();
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={Signup} />

            {!this.props.auth ? (
              <div
                ref={div => {
                  this.loginContainer = div;
                }}
              />
            ) : null}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
