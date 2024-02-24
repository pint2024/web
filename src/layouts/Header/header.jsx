import React from "react";
import minLogo from "../../assets/logo.png";
import "./header.css";

const navigation = [
	{
		title: "Atividades",
		route: "/ativadade",
		subpages: [
			{
				title: "Saúde",
				route: "/saude",
			},
			{
				title: "Desporto",
				route: "/desporto",
			},
			{
				title: "Formação",
				route: "/formacao",
			},
			{
				title: "Gastronomia",
				route: "/gastronomia",
			},
			{
				title: "Habitação",
				route: "/habitacao",
			},
			{
				title: "Mobilidade",
				route: "/mobilidade",
			},
			{
				title: "Lazer",
				route: "/lazer",
			},
		]
	},
	{
		title: "Conversa",
		route: "/conversa"
	},
	{
		title: "Calendário",
		route: "/calendario"
	}
]

export function Header() {
	return (
		<nav className="navbar navbar-expand-lg p-3 border-bottom navbar-primary bg-custom-primary fixed-top navbar-hidden">
			<div className="container d-flex justify-content-between align-items-center">
				<a className="navbar-nav" href="/">
					<img src={minLogo} className="logo" alt="logoSoftinsa" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav text-light">
						<li className="nav-item active">
							<a className="nav-link text-light" href="/">
								Página Inicial
							</a>
						</li>
						<li className="nav-item dropdown ">
							<span
								className="nav-link dropdown-toggle text-light"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Vagas
							</span>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/vagas">
										Vagas
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/dashboard">
										Dashboard
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown ">
							<span
								className="nav-link dropdown-toggle text-light"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Ideias
							</span>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/criarIdeia">
										Propor Ideias
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/ideias">
										Listas de Ideias
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="/oportunidades">
								Oportunidades
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="/beneficios">
								Benefícios
							</a>
						</li>
						<li className="nav-item dropdown ">
							<span
								className="nav-link dropdown-toggle text-light"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Administração
							</span>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/utilizadores">
										Utilizadores
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/reporting">
										Reporting
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="btn-group">
					<div className="dropdown text-end ">
						<ul className="dropdown-menu text-small dropdown-menu-end ">
							<li>
								<a className="dropdown-item" href="/calendario">
									Calendário
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="/perfil">
									Perfil
								</a>
							</li>
							<li>
								<hr className="dropdown-divider" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
