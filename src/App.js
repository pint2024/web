/// React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

/// Componentes
import { PageLayout } from "layouts/pageBase/PageLayout";
import { PROJETO_NAME } from "data/constants";
import { Rotas } from "routes";
import { useCurrentUser } from "hooks/useCurrentUser";
import { AccessDenied } from "layouts/errors/AccessDenied";
import { IniciarSessao } from "pages/autenticacao";

function App() {
	const [userRole, setuserRole] = useState();
	const { userData, isValid } = useCurrentUser(true);

	useEffect(() => {
		if (!userData) return;
		setuserRole(userData.perfil);
	}, [isValid, userData]);

	useEffect(() => {
		document.title = PROJETO_NAME;
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
