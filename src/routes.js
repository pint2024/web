import React from "react";
import { Route } from "react-router-dom";
import { Teste } from "pages/teste.test";
import { NotFound } from "pages/NotFound";
import { Calendario } from "pages/calendario";
import { Conversa } from "pages/conversa";
import { IniciarSessao, CriarConta } from "pages/autenticacao";
import { Atividade, AtividadeCriar } from "pages/atividades";
import { Conta } from "pages/conta";
import { PaginaInicial } from "pages/PaginaInicial";
import { Rei } from "pages/rei.test";
import { Dashboard } from "pages/dashboard/Dashboard";

export const DataRoutes = [
	{
		title: "Página Inicial",
		path: "/",
		element: <PaginaInicial />,
		perfis: [],
	},
	{
		title: "Teste",
		path: "/teste",
		element: <Teste />,
		perfis: [],
		children: [
			{
				title: "Rei",
				path: "/rei",
				element: <Rei />,
			},
		],
	},
	{
		title: "Atividade",
		path: "/atividade",
		element: <Atividade />,
		perfis: [],
		children: [
			{
				title: "Criar Atividade",
				path: "/criar",
				element: <AtividadeCriar />,
				perfis: [],
			},
		],
	},
	{
		title: "Conversa",
		path: "/conversa",
		element: <Conversa />,
		perfis: [],
	},
	{
		title: "Calendário",
		path: "/calendario",
		element: <Calendario />,
		perfis: [],
	},
	{
		title: "Dashboard",
		path: "/dashboard",
		element: <Dashboard />,
		perfis: [],
	},
	{
		title: "Conta",
		path: "/conta/:id",
		element: <Conta />,
		perfis: [],
		children: [
			{
				title: "Editar",
				path: "/editar",
				element: <Conta />,
				perfis: [],
			},
		],
	},
	{
		title: "Criar Conta",
		path: "/criar-conta",
		element: <CriarConta />,
		perfis: [],
	},
	{
		title: "Iniciar Sessão",
		path: "/iniciar-sessao",
		element: <IniciarSessao />,
		perfis: [],
	},
	{
		title: "Terminar Sessão",
		path: "/terminar-sessao",
	},
	{
		title: "Não encontrado",
		path: "*",
		element: <NotFound />,
		perfis: [],
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
			if (route.path === currentPath || route.path.split("/:")[0] === currentPath) {
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
