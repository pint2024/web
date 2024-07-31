import React from "react";
import { NotFound } from "layouts/errors/NotFound";
import { Calendario } from "pages/calendario";
import { IniciarSessao } from "pages/autenticacao";
import { Conteudo, ConteudoCriar } from "pages/conteudo";
import { Conta } from "pages/conta/Conta";
import { PaginaInicial } from "pages/PaginaInicial";
import { ConteudoDetalhe } from "pages/conteudo/detalhe/ConteudoDetalhe";
import { ContaEditar } from "pages/conta/editar/ContaEditar";
import { Temporary } from "layouts/errors/Temporary";
import { RevisaoConteudo } from "pages/backoffice/revisao/conteudo/RevisaoConteudo";
import { Denuncia } from "pages/backoffice/denuncia/Denuncia";
import { RevisaoComentario } from "pages/backoffice/revisao/comentario/RevisaoComentario";
import { Botao } from "components";
import { UtilizadorPainel } from "pages/backoffice/gestaoDados/utilizador/UtilizadorPainel";
import { TopicosPainel } from "pages/backoffice/gestaoDados/topicos/TopicosPainel";
import { CentroPainel } from "pages/backoffice/gestaoDados/centros/CentroPainel";
import { EsqueceuPasse } from "pages/autenticacao/esqueceuPasse/EsqueceuPasse";
import { ResetarPasse } from "pages/autenticacao/resetPasse/ResetarPasse";
import { Sobre } from "pages/sobre/Sobre";
import { RoutesUtils } from "utils/routes.utils";
import { EnumConstants } from "data/enum.constants";
import { Estatisticas } from "pages/backoffice/estatisticas/Estatisticas";
import { AtualizarPasse } from "pages/autenticacao/atualizarPasse/AtualizarPasse";
import { TerminarSessao } from "pages/autenticacao/terminarSessao/TerminarSessao";
import { Navigate } from "react-router-dom";

const ROLES = EnumConstants.ROLES;

export class Rotas {
	static InicialRoutes = [
		{
			title: "Página Inicial",
			path: "/",
			element: <PaginaInicial />,
			perfis: [ROLES.USER.ID],
		},
	];

	static ConteudoRoutes = [
		{
			title: "Conteudos",
			path: "/conteudos",
			element: <Navigate to="/" />,
			perfis: [ROLES.USER.ID],
			children: [
				{
					title: "Criar",
					path: "/criar/:id",
					element: <ConteudoCriar />,
					perfis: [ROLES.USER.ID],
				},
				{
					title: "Detalhe",
					path: "/:id",
					element: <ConteudoDetalhe />,
					perfis: [ROLES.USER.ID],
				},
			],
		},
	];

	static CalendarioRoutes = [
		{
			title: "Calendário",
			path: "/calendario",
			element: <Calendario />,
			perfis: [ROLES.USER.ID],
		},
	];

	static UtilizadorRoutes = [
		{
			title: "Conta",
			path: "/conta/:id",
			element: <Conta />,
			perfis: [ROLES.USER.ID],
			children: [
				{
					title: "Editar",
					path: "/editar",
					element: <ContaEditar />,
					perfis: [ROLES.USER.ID],
				},
			],
		},
	];

	static SobreRoutes = [
		{
			title: "Sobre",
			path: "/sobre",
			element: <Sobre />,
			perfis: [],
		},
	];

	static AutenticacaoRoutes = [
		{
			title: "Iniciar Sessão",
			path: "/iniciar-sessao",
			element: <IniciarSessao />,
			perfis: [],
		},
		{
			title: "Atualizar Palavra-passe",
			path: "/atualizar-passe/:token",
			element: <AtualizarPasse />,
			perfis: [],
		},
		{
			title: "Esqueceu-se da Palavra-passe",
			path: "/esqueceu-passe",
			element: <EsqueceuPasse />,
			perfis: [],
		},
		{
			title: "Resetar a Palavra-passe",
			path: "/resetar-passe",
			element: <ResetarPasse />,
			perfis: [],
		},
		{
			title: "Terminar Sessão",
			path: "/terminar-sessao",
			element: <TerminarSessao />,
			perfis: [],
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

	static AuthenticationRoutes = [...this.AutenticacaoRoutes];

	static FrontofficeRoutes = [
		...this.InicialRoutes,
		...this.ConteudoRoutes,
		...this.CalendarioRoutes,
		...this.UtilizadorRoutes,
		...this.SobreRoutes,
		...this.ErrosRoutes,
	];

	static BackofficeRoutes = [
		{
			title: "Backoffice",
			path: "/backoffice",
			element: <Navigate to={"/backoffice/utilizadores"} />,
			perfis: [0],
			children: [
				{
					title: "Utilizador",
					path: "/utilizadores",
					element: <UtilizadorPainel />,
					perfis: [0],
				},
				{
					title: "Centro",
					path: "/centros",
					element: <CentroPainel />,
					perfis: [0],
				},
				{
					title: "Tópicos",
					path: "/topicos",
					element: <TopicosPainel />,
					perfis: [0],
				},
				{
					title: "Estatísticas",
					path: "/estatisticas",
					element: <Estatisticas />,
					perfis: [0],
				},
				{
					title: "Revisões",
					path: "/revisoes",
					element: (
						<Temporary>
							<Botao route="conteudo">conteudo</Botao>
							<Botao route="comentario">comentario</Botao>
						</Temporary>
					),
					perfis: [0],
					children: [
						{
							title: "Conteudo",
							path: "/conteudo",
							element: <RevisaoConteudo />,
							perfis: [0],
						},
						{
							title: "Comentário",
							path: "/comentario",
							element: <RevisaoComentario />,
							perfis: [0],
						},
					],
				},
				{
					title: "Denuncias",
					path: "/denuncias",
					element: <Denuncia />,
					perfis: [0],
				},
			],
		},
	];

	static RenderRoutes(user_role) {
		const routesUtils = new RoutesUtils(user_role);
		return routesUtils.criarRoutes([...this.FrontofficeRoutes]);
	}

	static RenderBackofficeRoutes(user_role) {
		const routesUtils = new RoutesUtils(user_role);
		return routesUtils.criarRoutes([...this.BackofficeRoutes]);
	}

	static RenderAuthenticationRoutes(user_role) {
		const routesUtils = new RoutesUtils(user_role);
		return routesUtils.criarRoutes([...this.AuthenticationRoutes]);
	}
}
