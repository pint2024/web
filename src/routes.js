import React from "react";
import { NotFound } from "layouts/errors/NotFound";
import { Calendario } from "pages/calendario";
import { IniciarSessao, CriarConta } from "pages/autenticacao";
import { Conteudo, ConteudoCriar } from "pages/conteudo";
import { Conta } from "pages/conta/Conta";
import { PaginaInicial } from "pages/PaginaInicial";
import { ConteudoDetalhe } from "pages/conteudo/detalhe/ConteudoDetalhe";
import { ContaEditar } from "pages/conta/editar/ContaEditar";
import { Temporary } from "layouts/errors/Temporary";
import { RevisaoConteudo } from "pages/dashboard/revisao/conteudo/RevisaoConteudo";
import { Denuncia } from "pages/dashboard/denuncia/Denuncia";
import { RevisaoComentario } from "pages/dashboard/revisao/comentario/RevisaoComentario";
import { Botao } from "components";
import { ConteudoTipoListagem } from "pages/conteudo/ConteudoTipoListagem";

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
				{
					title: "Tipo",
					path: "/tipo/:tipo",
					element: <ConteudoTipoListagem />,
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

	static DashboardRoutes = [
		{
			title: "Dashboard",
			path: "/dashboard",
			element: <Temporary />,
			perfis: [],
			children: [
				{
					title: "Tabelas",
					path: "/tabelas",
					element: <Temporary><Botao route="utilizador">utilizador</Botao></Temporary>,
					perfis: [],
					children: [
						{
							title: "tilizador",
							path: "/utilizador",
							element: <Temporary />,
							perfis: [],
						},
					],
				},
				{
					title: "Estatísticas",
					path: "/estatisticas",
					element: <Temporary />,
					perfis: [],
					children: [
						{
							title: "x",
							path: "/x",
							element: <Temporary />,
							perfis: [],
						},
					],
				},
				{
					title: "Revisões",
					path: "/revisoes",
					element: <Temporary><Botao route="conteudo">conteudo</Botao><Botao route="comentario">comentario</Botao></Temporary>,
					perfis: [],
					children: [
						{
							title: "Conteudo",
							path: "/conteudo",
							element: <RevisaoConteudo />,
							perfis: [],
						},
						{
							title: "Comentário",
							path: "/comentario",
							element: <RevisaoComentario />,
							perfis: [],
						},
					],
				},
				{
					title: "Denuncias",
					path: "/denuncias",
					element: <Denuncia />,
					perfis: [],
					children: [
						{
							title: "x",
							path: "/x",
							element: <Temporary />,
							perfis: [],
						},
					],
				},
			],
		},
	];
}
