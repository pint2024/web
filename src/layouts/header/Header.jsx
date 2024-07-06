import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Dropdown, Icone, Imagem, Navegar } from "components/index";
import { userItems } from "./headerData";
import userDefault from "assets/images/user-default.png";
import logo from "assets/images/logo.png";

import "./header.css";
import { useUserValidation } from "hooks/useAuth";

export function Header() {
	const utilizadorAtual = useUserValidation();

	return (
		<section id="Header">
			<div className="nav-area">
				<Link to="/" className="header-logo remove-margin">
					<Imagem src={logo} alt="Logo" className="header-site-logo" />
				</Link>
				<Navbar />
				<div>
					{utilizadorAtual ? (
						<Dropdown items={userItems}>
							<Imagem src={utilizadorAtual.imagem} className="header-user-image cursor-pointer" />
						</Dropdown>
					) : (
						<Navegar to="/iniciar-sessao">
							<Icone iconName={"PersonPlusFill"} className="icon" />
						</Navegar>
					)}
				</div>
			</div>
		</section>
	);
}
