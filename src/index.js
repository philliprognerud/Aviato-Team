import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";
import bg from "./bg.jpg";
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

document.body.style.backgroundImage = `url(${bg})`;

document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
