import React from "react";
import "./App.css";
import List from "./components";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <List />
      </Provider>
    </div>
  );
}

export default App;
