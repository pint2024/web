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
