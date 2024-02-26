import React, { useCallback } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, isAuthenticated, ...rest }) => {
	const verificarCargo = useCallback(() => {
		const cargo = localStorage.getItem("Cargo");

		const cargosPermitidos = {
			/*
				1 administrador
				0 utilizador
			*/
			"/backoffice": ["0"],

			"/vagaseditar/:nvaga": ["0", "5"],
			"/criarVaga": ["0", "5"],
			"/dashboard": ["0", "5"],
			"/candidaturas/:ncand": ["0", "5"],
			"/entrevistas": ["0", "5"],
			"/entrevistas/:nentre": ["0", "5"],

			"/ideias": ["0", "4"],
			"/ideias/:nideia": ["0", "4"],

			"/utilizadores": ["0"],
			"/utilizadores/:nuser": ["0"],
			"/criarutilizador": ["0"],

			"/perfil": ["0", "1", "2", "3", "4", "5"],
			"/calendario": ["0", "1", "2", "3", "4", "5"],
			"/criarIdeia": ["0", "1", "2", "3", "4", "5"],
			"/oportunidades": ["0", "1", "2", "3", "4", "5"],
			"/oportunidades/:nOportunidade": ["0", "1", "2", "3", "4", "5"],
		};

		const cargosPermitidosParaPagina = cargosPermitidos[path];

		return cargosPermitidosParaPagina && cargosPermitidosParaPagina.includes(cargo);
	}, [path]);

	return (
		<Route
			{...rest}
			render={(props) => (isAuthenticated && verificarCargo(path) ? <Component {...props} /> : <Redirect to="/" />)}
		/>
	);
};

export default PrivateRoute;
