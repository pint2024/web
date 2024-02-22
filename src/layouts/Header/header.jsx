import { Link } from "react-router-dom";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'


function Header() {
	return (
		<div className="Header">
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="menusuperior">
				<Link className='navbar-brand' to="/">
					<img src={logo} className="header-logo-size d-inline-block align-top" alt="Logo do Site" />
				</Link>
				<div>
					<div className="navigation">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className='nav-link' to="/negocios">Negócios</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link' to="/vagas">Vagas</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link' to="/ideias">Ideias</Link>
							</li>
							<li className="nav-item">
								<Link className='nav-link' to="/beneficios">Benefícios</Link>
							</li>
						</ul>
					</div>
					<div className="icons">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className='text-white nav-link' to="/dashboard">
									<FontAwesomeIcon icon={["fas", "gauge"]} className='FontAwesomeIcons nav-conta' />
								</Link>
							</li>
							<li className="nav-item" to="">
								<Link className='text-white nav-link' to="/calendario">
									<FontAwesomeIcon icon={["fas", "fa-calendar-alt"]} className='FontAwesomeIcons nav-calendario' />
								</Link>
							</li>
							<li className="nav-item">
								<Link className='text-white nav-link' to={`/conta/lucasrei`}>
									<FontAwesomeIcon icon={["fas", "fa-user"]} className='FontAwesomeIcons nav-conta' />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;