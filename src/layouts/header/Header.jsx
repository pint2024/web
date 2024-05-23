import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Dropdown, Imagem } from "components/index";
import { userItems } from "./headerData";
import userDefault from "assets/images/user-default.png";
import logo from "assets/images/logo.png";

import "./header.css";

export function Header() {
	return (
		<section id="Header">
			<div className="nav-area">
				<Link to="/" className="header-logo remove-margin">
					<Imagem src={logo} alt="Logo" className="header-site-logo" />
				</Link>
				<Navbar />
				<div>
					<Dropdown items={userItems}>
						<Imagem src={userDefault} alt="Imagem do utilizador" className="header-user-image cursor-pointer" />
					</Dropdown>
				</div>
			</div>
		</section>
	);
};
