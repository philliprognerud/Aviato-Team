import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import LoginPage from "./components/auth/LoginPage";
import Signup from "./components/auth/Signup";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <a href="https://a07cae693dbc4ff0b97e09bfc02303fc.vfs.cloud9.us-west-2.amazonaws.com/">
              Test pickle application
            </a>
            <Route path="/login/:pathParam?" component={LoginPage} />
            <Route path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
