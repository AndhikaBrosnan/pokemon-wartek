import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducer";
import thunk from "redux-thunk";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <Routes />
  </Provider>,

  document.querySelector("#root")
);
