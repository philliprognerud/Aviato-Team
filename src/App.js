import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import $ from "jquery";

import LoginPage from "./components/auth/LoginPage";
import Signup from "./components/auth/Signup";
import Header from "./components/header/Header";

class App extends Component {
  componentDidMount() {
    $(".ui.dropdown").dropdown();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
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
