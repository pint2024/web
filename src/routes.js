import React from "react";
import { NotFound } from "layouts/errors/NotFound";
import { Calendario } from "pages/calendario";
import { IniciarSessao, CriarConta } from "pages/autenticacao";
import { Conteudo, ConteudoCriar } from "pages/conteudo";
import { Conta } from "pages/conta/Conta";
import { PaginaInicial } from "pages/PaginaInicial";
import { ConteudoDetalhe } from "pages/conteudo/detalhe/ConteudoDetalhe";
import { ContaEditar } from "pages/conta/editar/ContaEditar";

export class Routes {
	static InicialRoutes = [
		{
			title: "Página Inicial",
			path: "/",
			element: <PaginaInicial />,
			perfis: [],
		},
	];

	static ConteudoRoutes = [
		{
			title: "Conteudos",
			path: "/conteudos",
			element: <Conteudo />,
			perfis: [],
			children: [
				{
					title: "Atividades",
					path: "/atividades",
					element: <ConteudoCriar />,
					perfis: [],
				},
				{
					title: "Eventos",
					path: "/eventos",
					element: <ConteudoCriar />,
					perfis: [],
				},
				{
					title: "Recomendações",
					path: "/recomendacoes",
					element: <ConteudoCriar />,
					perfis: [],
				},
				{
					title: "Espaços",
					path: "/espacos",
					element: <ConteudoCriar />,
					perfis: [],
				},
				{
					title: "Criar",
					path: "/criar/:id",
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
	];

	static CalendarioRoutes = [
		{
			title: "Calendário",
			path: "/calendario",
			element: <Calendario />,
			perfis: [],
		},
	];

	static UtilizadorRoutes = [
		{
			title: "Conta",
			path: "/conta/:id",
			element: <Conta />,
			perfis: [],
			children: [
				{
					title: "Editar",
					path: "/editar",
					element: <ContaEditar />,
					perfis: [],
				},
			],
		},
	];

	static AutenticacaoRoutes = [
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
	];

	static ErrosRoutes = [
		{
			title: "Não encontrado",
			path: "*",
			element: <NotFound />,
			perfis: [],
		},
	];
}

export class BackofficeRoutes {
	static Routes = {};
}
