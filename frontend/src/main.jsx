// import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Contextprovider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Contextprovider>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contextprovider>
  
);
