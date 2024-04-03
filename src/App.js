/// React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect } from "react";

/// Componentes
import { renderRoutes } from "./routes";
import { PageLayout } from "layouts/pageLayout";
import { PROJETO_NAME } from "data/constants";
import { useAutenticacao } from "hooks/useAutenticacao";

function App() {
	const utilizadorAtual = useAutenticacao();

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
