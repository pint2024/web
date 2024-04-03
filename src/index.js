import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

/// Componentes
import App from "./App";

/// Providers
import { ToastContainer } from "react-toastify";
import { LoadingProvider } from "hooks/useLoading";
import { AutenticacaoProvider } from "hooks/useAutenticacao";
import { render } from "react-dom";

/// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";

/// Toastify
import "react-toastify/dist/ReactToastify.css";

/// Global Styles
import "assets/styles/main.css";

render(
	<React.StrictMode>
			<AutenticacaoProvider>
		<LoadingProvider >
				<ToastContainer />
				<App />
		</LoadingProvider>
		</AutenticacaoProvider>
		
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
