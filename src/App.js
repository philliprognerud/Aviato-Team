import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";
import LoginPage from "./components/auth/LoginPage";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/login" component={LoginPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
