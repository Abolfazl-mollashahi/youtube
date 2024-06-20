// import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Contextprovider } from "./context/context.jsx";
import { AuthContexProvider } from "./context/authContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Contextprovider>
    <BrowserRouter>
      <AuthContexProvider>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthContexProvider>
    </BrowserRouter>
  </Contextprovider>
);
