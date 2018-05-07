import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import history from "./history";

import LoginPage from "./components/auth/LoginPage";
import Signup from "./components/auth/Signup";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter history={history}>
          <div>
            <Header />
            <Route path="/login/:pathParam?" component={LoginPage} />
            <Route path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
