import React from "react";
import ReactDOM from "react-dom/client";
import "styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "components/header/styles.css";
import { LoadingProvider } from "modules/providers/loadingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<LoadingProvider>
			<ToastContainer />
			<App />
		</LoadingProvider>
	</React.StrictMode>
);

reportWebVitals();
