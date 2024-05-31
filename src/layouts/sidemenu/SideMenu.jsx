import React from "react";
import { Link } from "react-router-dom";
import "./side-menu.css";
import logo from "assets/images/logo.png";

function SideBarItems({ titulo, icon, route }) {
	return (
		<li key={route} className="nav-text align-items-center">
			<Link to={route}>
				<h4 className="nome-item text-white">{titulo}</h4>
			</Link>
		</li>
	);
}

export function SideMenu() {
	const Header = () => (
		<header className="header d-flex justify-content-between align-items-center">
			<div className="d-flex align-items-center bars-logo">
				<div>
					<Link className="navbar-brand" to="/">
						<img src={logo} className="navbar-logo-size d-inline-block align-top" alt="Logo do Site" />
					</Link>
				</div>
			</div>
			<div>
				<ul className="d-flex sem-ponto gap-3 header-items">
					<li className="header-item"></li>
					<li className="header-item"></li>
				</ul>
			</div>
		</header>
	);

	const SideMenu = () => (
		<nav className="nav-menu">
				<ul className="nav-menu-items">
					<li className="navbar-toggle">
						<div className="d-flex align-items-center bars-logo">
							<Link className="navbar-brand" to="/">
								<img src={logo} className="navbar-logo-size d-inline-block align-top" alt="Logo do Site" />
							</Link>
						</div>
					</li>
					<div className="d-flex flex-column justify-content-between item-list">
						<div>
							<SideBarItems titulo={"Tabelas"} route={"tabelas"} />
							<SideBarItems titulo={"Estatísticas"} route={"estatisticas"} />
							<SideBarItems titulo={"Revisão"} route={"revisao"} />
							<SideBarItems titulo={"Denuncias"} route={"denuncias"} />
						</div>
						<div>
							<SideBarItems titulo={"Dashboard"} route={"/dashboard"} />
						</div>
					</div>
				</ul>
			</nav>
	);

	return (
		<div className="no-select">
			{Header()}
			{SideMenu()}
		</div>
	);
}
