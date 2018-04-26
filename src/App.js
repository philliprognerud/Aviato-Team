import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import LoginPage from "./components/auth/LoginPage";
import Signup from "./components/auth/Signup";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";

class App extends Component {
  componentDidMount() {
    // this.props.fetchOktaWidget();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
