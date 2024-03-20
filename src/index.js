import React from "react";
import ReactDOM from "react-dom/client";
import "assets/styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "components/header/styles.css";
import { LoadingProvider } from "modules/providers/loading.provider";
import { AutenticacaoProvider } from "modules/providers/autenticacao.provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<LoadingProvider>
			<AutenticacaoProvider>
				<ToastContainer />
				<App />
			</AutenticacaoProvider>
		</LoadingProvider>
	</React.StrictMode>
);

reportWebVitals();
