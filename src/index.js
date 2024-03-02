import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "./components/header/styles.css";
import { LoadingProvider } from "./hooks/loadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<body>
		<React.StrictMode>
			<LoadingProvider>
				<ToastContainer />
				<App />
			</LoadingProvider>
		</React.StrictMode>
	</body>
);

reportWebVitals();
