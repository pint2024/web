import React from "react";
import { Route } from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/NotFound";
import { Saude } from "pages/atividades/rever/saude";
import { Desporto } from "pages/atividades/rever/desporto";
import { Formacao } from "pages/atividades/rever/formacao";
import { Gastronomia } from "pages/atividades/rever/gastronomia";
import { Calendario } from "pages/calendario/calendario";
import { Habitacao } from "pages/atividades/rever/habitacao";
import { Mobilidade } from "pages/atividades/rever/mobilidade";
import { Lazer } from "pages/atividades/rever/lazer";
import { Conversa } from "pages/conversa/conversa";
import { IniciarSessao } from "pages/autenticacao/iniciarSessao/iniciarSessao";
import { CriarConta } from "pages/autenticacao/criarConta/criarConta";
import { Atividade } from "pages/atividades/atividade";
import { Utilizador } from "pages/utilizador/utilizador";

const dataRoutes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/atividade",
		element: <Atividade />,
		children: [
			{
				path: "/saude",
				element: <Atividade />,
			},
			{
				path: "/desporto",
				element: <Atividade />,
			},
			{
				path: "/formacao",
				element: <Atividade />,
			},
			{
				path: "/gastronomia",
				element: <Atividade />,
			},
			{
				path: "/habitacao",
				element: <Atividade />,
			},
			{
				path: "/mobilidade",
				element: <Atividade />,
			},
			{
				path: "/lazer",
				element: <Atividade />,
			},
		],
	},
	{
		path: "/conversa",
		element: <Conversa />,
	},
	{
		path: "/calendario",
		element: <Calendario />,
	},
	{
		path: "/utilizador/:id",
		element: <Utilizador />,
	},
	{
		path: "/iniciar-sessao",
		element: <IniciarSessao />,
	},
	{
		path: "/criar-conta",
		element: <CriarConta />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

const criarRoutes = (route, parentRoute = "") => {
	return route.map((route, index) => (
		<>
			<Route key={index} path={parentRoute + route.path} element={route.element} />
			{route.children && criarRoutes(route.children, parentRoute + route.path)}
		</>
	));
};

export const renderRoutes = criarRoutes(dataRoutes);
