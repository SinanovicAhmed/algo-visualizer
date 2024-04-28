import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SortingAlgorithmProvider } from "./context/algorithmSelectionContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <SortingAlgorithmProvider>
        <App />
      </SortingAlgorithmProvider>
    </Router>
  </React.StrictMode>
);
