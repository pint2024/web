/// React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect } from "react";

/// Componentes
import { renderBackofficeRoutes, renderRoutes } from "utils/routes.utils";
import { PageLayout } from "layouts/pageBase/PageLayout";
import { PROJETO_NAME } from "data/constants";
import { useAutenticacao } from "hooks/useAutenticacao";
import { BackofficeLayout } from "layouts/pageBase/BackofficeLayout";

function App() {
	const utilizadorAtual = useAutenticacao();

	useEffect(() => {
		document.title = PROJETO_NAME;
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/backoffice" element={<BackofficeLayout />}>
					{renderBackofficeRoutes}
				</Route>
				<Route path="/" element={<PageLayout />}>
					{renderRoutes}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
