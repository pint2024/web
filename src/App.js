/// React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect } from "react";

/// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";

/// Toastify
import "react-toastify/dist/ReactToastify.css";

/// Componentes
import { renderRoutes } from "./routes";
import { PageLayout } from "layouts/pageLayout";
import { PROJETO_NAME } from "data/constants";
import { useAutenticacao } from "hooks/useAutenticacao";
import { Rei } from "pages/rei.test";

function App() {
	const utilizadorAtual = useAutenticacao();

	console.log("opa", utilizadorAtual);

	useEffect(() => {
		document.title = PROJETO_NAME;
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<PageLayout />}>
					{renderRoutes}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
