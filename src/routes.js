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
import { TabelaAtividadeListar } from "pages/dashboard/Tabelas/atividades/AtividadeListar";
import { TabelaAtividadeEditar } from "pages/dashboard/Tabelas/atividades/AtividadeEditar";
import { TabelaUtilizadorCriar } from "pages/dashboard/Tabelas/utilizadores/UtilizadorCriar";
import { TabelaUtilizadorEditar } from "pages/dashboard/Tabelas/utilizadores/UtilizadorEditar";
import { Formulario } from "pages/formularios/Formulario";
import { AtividadeDetalhe } from "pages/atividades/detalhe/AtividadeDetalhe";
import { Mapa } from "pages/mapa/Mapa";

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
		title: "Formulário",
		path: "/formulario",
		element: <Formulario />,
		perfis: [],
	},
	{
		title: "Mapa",
		path: "/mapa",
		element: <Mapa />,
		perfis: [],
	},
	{
		title: "Atividade",
		path: "/atividade",
		element: <Atividade />,
		perfis: [],
		children: [
			{
				title: "Criar",
				path: "/criar",
				element: <AtividadeCriar />,
				perfis: [],
			},
			{
				title: "Detalhe",
				path: "/:id",
				element: <AtividadeDetalhe />,
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

export const DashboardDataRoutes = [
	{
		title: "Dashboard",
		path: "/dashboard",
		element: <Dashboard />,
		perfis: [],
		children: [
			{
				title: "Reporting",
				path: "/reporting",
				element: null,
				perfis: [],
				children: [
					{
						title: "Postagens",
						path: "/postagens",
						element: null,
						perfis: [],
					},
					{
						title: "Registos",
						path: "/registos",
						element: null,
						perfis: [],
					},
					{
						title: "Movimentação",
						path: "/movimentacao",
						element: null,
						perfis: [],
					},
				],
			},
			{
				title: "Tabelas",
				path: "/tabelas",
				element: null,
				perfis: [],
				children: [
					{
						title: "Utilizadores",
						path: "/utilizadores",
						element: null,
						perfis: [],
						children: [
							{
								title: "Criar",
								path: "/criar",
								element: <TabelaUtilizadorCriar />,
								perfis: [],
							},
							{
								title: "Editar",
								path: "/editar",
								element: <TabelaUtilizadorEditar />,
								perfis: [],
							},
						],
					},
					{
						title: "Atividades",
						path: "/atividades",
						element: <TabelaAtividadeListar />,
						perfis: [],
						children: [
							{
								title: "Criar",
								path: "/criar",
								element: <TabelaAtividadeListar />,
								perfis: [],
							},
							{
								title: "Editar",
								path: "/editar",
								element: <TabelaAtividadeEditar />,
								perfis: [],
							},
						],
					},
				],
			},
		],
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

export const renderDashboardRoutes = criarRoutes(DashboardDataRoutes);

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
