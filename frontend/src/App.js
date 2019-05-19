import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import GlobalStyles from "./styles/global";

import store from "./store";

import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
