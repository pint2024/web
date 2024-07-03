import React from "react";
import { Link } from "react-router-dom";
import "./side-menu.css";
import logo from "assets/images/logo.png";
import { Header } from "layouts/header/Header";
import { Imagem, Texto } from "components";
import { COMMON_TYPES } from "data/data";

function SideBarItems({ titulo, icon, route, children }) {
	return (
		<li key={route} className="nav-text align-items-center">
			<Link to={route}>
				<Texto type={COMMON_TYPES.INVERSO} size={3}>
					{titulo}
				</Texto>
			</Link>
			{children && <ul className="submenu-items">{children}</ul>}
		</li>
	);
}

export function SideMenu() {
	return (
		<div className="remove-user-select">
			<Header />
			<nav className="nav-menu">
				<section className="nav-menu-items">
					<div className="navbar-toggle d-flex align-items-center">
						<Link className="navbar-brand" to="/">
							<Imagem src={logo} className="navbar-logo-size d-inline-block align-top" alt="Logo do Site" />
						</Link>
					</div>
					<div className="d-flex flex-column justify-content-between item-list">
						<div>
							<SideBarItems titulo={"Utilizador"} route={"utilizadores"} />
							<SideBarItems titulo={"Estatísticas"} route={"estatisticas"} />
							<SideBarItems titulo={"Revisão"} route={"revisoes"} />
							<SideBarItems titulo={"Denuncias"} route={"denuncias"} />
						</div>
						<div>{/*<SideBarItems titulo={"Backoffice"} route={"/backoffice"} />*/}</div>
					</div>
				</section>
			</nav>
		</div>
	);
}
