import { Outlet } from "react-router-dom";
import { Footer } from "layouts/footer/Footer";
import { Breadcrumb } from "./Breadcrumb";
import { SideMenu } from "layouts/sidemenu/SideMenu";
import "./backoffice-layout.css";

export function BackofficeLayout() {
	return (
		<div id="BackofficeLayout">
			<header className="header-height">
				<SideMenu />
			</header>
			<div className="content-area">
				<Breadcrumb />
				<main className="container content-min-height">
					<Outlet />
				</main>
				<footer className="footer-height">
					<Footer />
				</footer>
			</div>
		</div>
	);
}
