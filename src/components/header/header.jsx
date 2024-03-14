import MobileNav from "./mobile/navMobile";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import userDefault from "assets/images/user-default.png";
import logo from "assets/images/logo.png";
import "./styles.css";

const Header = () => {
	return (
		<section>
			<div className="nav-area">
				<Link to="/" className="header-logo">
					<img src={logo} alt="Imagem do utilizador" className="header-site-logo" />
				</Link>
				<Navbar />
				<MobileNav />
				<div>
					<Link to="/utilizador" className="header-user">
						<img src={userDefault} alt="Imagem do utilizador" className="header-user-image" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Header;
