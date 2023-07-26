// This code sets up a React application with Redux for state management and React Router for handling navigation. 

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./store";
const store = configureStore(); //This line creates the Redux store by calling the configureStore function and stores it in the variable store
ReactDOM.render(
  // This line renders the React application into the HTML element with the ID "root".
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// <React.StrictMode> is a wrapper component that activates strict mode in React, which helps identify potential issues in the application during development.
{/* <Router> wraps the application and provides the routing functionality using hash-based URLs. */}
{/* <Provider> wraps the entire application and provides access to the Redux store to all components using React's context API. */}
{/* <App /> is the main component of the application that will be rendered inside the provider and router components. */}

reportWebVitals();
// This line calls the reportWebVitals function, which measures and reports performance metrics in the application.