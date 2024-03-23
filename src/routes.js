import React from "react";
import { Route } from "react-router-dom";
import { Teste } from "pages/teste.test";
import { NotFound } from "pages/NotFound";
import { Calendario } from "pages/calendario/index";
import { Conversa } from "pages/conversa/index";
import { IniciarSessao, CriarConta } from "pages/autenticacao/index";
import { Atividade, AtividadeCriar } from "pages/atividades/index";
import { Conta } from "pages/conta/index";
import { PaginaInicial } from "pages/paginaInicial";

export const DataRoutes = [
	{
		title: "Página Inicial",
		path: "/",
		element: <PaginaInicial />,
	},
	{
		title: "Teste",
		path: "/teste",
		element: <Teste />,
	},
	{
		title: "Atividade",
		path: "/atividade",
		element: <Atividade />,
		children: [
			{
				title: "Criar Atividade",
				path: "/criar",
				element: <AtividadeCriar />,
			},
		],
	},
	{
		title: "Conversa",
		path: "/conversa",
		element: <Conversa />,
	},
	{
		title: "Calendário",
		path: "/calendario",
		element: <Calendario />,
	},
	{
		title: "Conta",
		path: "/conta/:id",
		element: <Conta />,
		children: [
			{
				title: "Editar",
				path: "/editar",
				element: <Conta />,
			},
		],
	},
	{
		title: "Criar Conta",
		path: "/criar-conta",
		element: <CriarConta />,
	},
	{
		title: "Iniciar Sessão",
		path: "/iniciar-sessao",
		element: <IniciarSessao />,
	},
	{
		title: "Terminar Sessão",
		path: "/terminar-sessao",
	},
	{
		title: "Não encontrado",
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

export const renderRoutes = criarRoutes(DataRoutes);

export function findRouteByPath(path) {
	const findRecursive = (routes, currentPath) => {
		for (const route of routes) {
			if (route.path === currentPath || route.path.split('/:')[0] === currentPath) {
				return route;
			} else if (route.children) {
				const childRoute = findRecursive(route.children, currentPath);
				if (childRoute) {
					return childRoute;
				}
			}
		}
		return null;
	};

	return findRecursive(DataRoutes, path);
}
