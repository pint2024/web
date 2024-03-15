import React from "react";
import { Route } from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/NotFound";
import { Saude } from "pages/atividades/saude";
import { Desporto } from "pages/atividades/desporto";
import { Formacao } from "pages/atividades/formacao";
import { Gastronomia } from "pages/atividades/gastronomia";
import { Calendario } from "pages/calendario/calendario";
import { Habitacao } from "pages/atividades/habitacao";
import { Mobilidade } from "pages/atividades/mobilidade";
import { Lazer } from "pages/atividades/lazer";
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
				element: <Saude />,
			},
			{
				path: "/desporto",
				element: <Desporto />,
			},
			{
				path: "/formacao",
				element: <Formacao />,
			},
			{
				path: "/gastronomia",
				element: <Gastronomia />,
			},
			{
				path: "/habitacao",
				element: <Habitacao />,
			},
			{
				path: "/mobilidade",
				element: <Mobilidade />,
			},
			{
				path: "/lazer",
				element: <Lazer />,
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
