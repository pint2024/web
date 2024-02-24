import MobileNav from "./mobile/navMobile";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import userDefault from '../../assets/user-default.png'
import logo from '../../assets/logo.png'
import "./header.css";

const Header = () => {
	return (
		<header>
			<div className="nav-area">
				<Link to="/" className="header-logo">
					<img src={logo} alt="Imagem do utilizador" className="header-site-logo" />
				</Link>
				<Navbar />
				{/*<MobileNav />*/}
				<div>
					<Link to="/utilizador" className="header-user">
						Utilizador
						<img src={userDefault} alt="Imagem do utilizador" className="header-user-image" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
