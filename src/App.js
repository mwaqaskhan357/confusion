import React from "react";
import Main from "./components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
