/// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";

/// Componentes
import { PROJETO_NAME } from "data/constants";
import { Rotas } from "routes";
import { useCurrentUser } from "hooks/useCurrentUser";
import { AutenticacaoRequest } from "api";
import { Notificacao } from "components";

function App() {
	const { userData, isValid, hasFetched } = useCurrentUser(true);

	useEffect(() => {
		document.title = PROJETO_NAME;
	}, []);

	useEffect(() => {
		if (userData?.inativo) {
			AutenticacaoRequest.terminar_sessao();
			Notificacao("A sua conta foi inativa!", "error");
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		}
	}, [userData]);

	if (!hasFetched) return;

	const loggedRoutes = createBrowserRouter(Rotas.Routes);
	const unloggedRoutes = createBrowserRouter(Rotas.Routestwo);
	return <>{isValid ? <RouterProvider router={loggedRoutes} /> : <RouterProvider router={unloggedRoutes} />}</>;
}

export default App;
