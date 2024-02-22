/// React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';

/// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.min.js';

/// Toastify
import 'react-toastify/dist/ReactToastify.css';

	/// Estilização
import './App.css';

/// Componentes
import Layout from "./layouts/PageLayout/pageLayout";
import Inicial from "./pages/paginaInicial";



function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Inicial />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
