import React from "react";
import { Route } from "react-router-dom";
import { NotFound } from "pages/NotFound";
import { Calendario } from "pages/calendario";
import { IniciarSessao, CriarConta } from "pages/autenticacao";
import { Conteudo, ConteudoCriar } from "pages/conteudo";
import { Conta } from "pages/conta";
import { PaginaInicial } from "pages/PaginaInicial";
import { ConteudoDetalhe } from "pages/conteudo/ConteudoDetalhe";

export const DataRoutes = [
	{
		title: "Página Inicial",
		path: "/",
		element: <PaginaInicial />,
		perfis: [],
	},
	{
		title: "Conteudos",
		path: "/conteudos",
		element: <Conteudo />,
		perfis: [],
		children: [
			{
				title: "Criar",
				path: "/criar",
				element: <ConteudoCriar />,
				perfis: [],
			},
			{
				title: "Detalhe",
				path: "/:id",
				element: <ConteudoDetalhe />,
				perfis: [],
			},
		],
	},
	{
		title: "Calendário",
		path: "/calendario",
		element: <Calendario />,
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
