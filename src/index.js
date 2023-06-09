import React from "react";
import ReactDOM from "react-dom/client";
import './styles.scss'
import Home from "./components/home/Home";
import Router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Router />);
