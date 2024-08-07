/// React
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

/// Componentes
import { PageLayout } from "layouts/pageBase/PageLayout";
import { PROJETO_NAME } from "data/constants";
import { Rotas } from "routes";
import { useCurrentUser } from "hooks/useCurrentUser";
import { AccessDenied } from "layouts/errors/AccessDenied";
import { useLoading } from "hooks/useLoading";

function App() {
	const [isLogged, setisLogged] = useState(null);
	const [userRole, setuserRole] = useState(null);
	const { userData, isValid } = useCurrentUser(true);
	const loading = useLoading();

	useEffect(() => {
		if (!userData) return;
		setuserRole(userData.perfil);
	}, [isValid, userData]);

	useEffect(() => {
		document.title = PROJETO_NAME;
	}, []);

	useEffect(() => {
		loading.stop();
		const handleLoading = (event) => {
			loading.start();
		};
	  
		window.addEventListener("beforeunload", handleLoading);
		//window.addEventListener("DOMContentLoaded", handleLoading);
		//window.addEventListener("load", handleLoading);
	  
		return () => {
			window.removeEventListener("beforeunload", handleLoading);
		  	//window.removeEventListener("DOMContentLoaded", handleLoading);
		  	//window.removeEventListener("load", handleLoading);
		};
	  }, []);

	if (userData?.inativo) {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<PageLayout />}>
						<Route path="/*" element={<AccessDenied />} />
						<Route path="/" element={<AccessDenied />} />
					</Route>
				</Routes>
			</Router>
		);
	}

	return (
		<Router>
			<Routes>
				{isValid && (
					<Route path="/" element={<PageLayout />}>
						{Rotas.RenderRoutes(userRole)}
						{Rotas.RenderBackofficeRoutes(userRole)}
					</Route>
				)}
				<Route path="/">{Rotas.RenderAuthenticationRoutes()}</Route>
			</Routes>
		</Router>
	);
}

export default App;
