/// React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";

/// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";

/// Toastify
import "react-toastify/dist/ReactToastify.css";

/// Componentes
import { renderRoutes } from "./routes";
import { PageLayout } from "layouts/pageLayout";

function App() {
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
