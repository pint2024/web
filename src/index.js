import { render } from "react-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { LoadingProvider } from "context/loadingContext";
import { AutenticacaoProvider } from "hooks/useAutenticacao";
import { SidebarStatusProvider } from "context/sidebarStatusContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import "assets/styles/main.css";

render(
	<React.StrictMode>
		<AutenticacaoProvider>
			<LoadingProvider>
				<SidebarStatusProvider>
					<ToastContainer />
					<App />
				</SidebarStatusProvider>
			</LoadingProvider>
		</AutenticacaoProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
