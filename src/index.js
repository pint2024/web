import React from "react";
import ReactDOM from "react-dom/client";
import './styles/styles.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from 'react-toastify';
import "./components/header/header.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ToastContainer />
		<App />
	</React.StrictMode>
);

reportWebVitals();
