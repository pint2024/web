/// React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

/// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";

/// Toastify
import "react-toastify/dist/ReactToastify.css";

/// Componentes
import Layout from "./layouts/pageLayout";
import Home from "./pages/home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
