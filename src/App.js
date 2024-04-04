/// React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect } from "react";

/// Componentes
import { renderRoutes } from "./routes";
import { PageLayout } from "layouts/PageLayout";
import { PROJETO_NAME } from "data/constants";
import { useAutenticacao } from "hooks/useAutenticacao";
import { DashboardContent } from "layouts/DashboardContent";

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
					<Route path="/dashboard" element={<DashboardContent />} >
						
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
