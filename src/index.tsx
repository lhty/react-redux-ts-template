import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import RootRouter from "./routes";

import "./styles/main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

render(<App />, document.getElementById("app"));
