/// React
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

/// Componentes
import { PageLayout } from "layouts/pageBase/PageLayout";
import { PROJETO_NAME } from "data/constants";
import { Rotas } from "routes";
import { useCurrentUser } from "hooks/useCurrentUser";
import { AccessDenied } from "layouts/errors/AccessDenied";
import { useCarregando } from "hooks/useCarregando";

function App() {
	const [userRole, setuserRole] = useState();
	const { userData, isValid } = useCurrentUser(true);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		if (!userData) return;
		setuserRole(userData.perfil);
	}, [isValid, userData]);

	useEffect(() => {
		document.title = PROJETO_NAME;
	}, []);

	useEffect(() => {
		stopLoading();
		const handleBeforeUnload = (event) => {
			startLoading();
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	if (!isValid) return;

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
				<Route path="/" element={<PageLayout />}>
					{Rotas.RenderRoutes(userRole)}
					{Rotas.RenderBackofficeRoutes(userRole)}
				</Route>
				<Route path="/">{Rotas.RenderAuthenticationRoutes(userRole)}</Route>
			</Routes>
		</Router>
	);
}

export default App;
