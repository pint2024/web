import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "./components/header/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<body>
		<React.StrictMode>
			<ToastContainer />
			<App />
		</React.StrictMode>
	</body>
);

reportWebVitals();
