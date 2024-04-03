import { Link } from "react-router-dom";
import MobileNav from "./mobile/NavMobile";
import Navbar from "./Navbar";
import { Dropdown } from "components/dropdown/1Dropdown";
import { userItems } from "./headerData";

import userDefault from "assets/images/user-default.png";
import logo from "assets/images/logo.png";

import "./styles.css";

const Header = () => {
	return (
		<section id="Header">
			<div className="nav-area">
				<Link to="/" className="header-logo">
					<img src={logo} alt="Logo" className="header-site-logo" />
				</Link>
				<Navbar />
				<MobileNav />
				<div>
					<Dropdown items={userItems}>
						<img src={userDefault} alt="Imagem do utilizador" className="header-user-image cursor-pointer" />
					</Dropdown>
				</div>
			</div>
		</section>
	);
};

export default Header;
