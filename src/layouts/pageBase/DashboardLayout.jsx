import { Outlet } from "react-router-dom";
import { Footer } from "layouts/footer/Footer";
import { Breadcrumb } from "./Breadcrumb";
import { SideMenu } from "layouts/sidemenu/SideMenu";
import "./dashboard-layout.css";

export function DashboardLayout() {
	return (
		<div id="DashboardLayout">
			<header className="header-height">
				<SideMenu />
			</header>
			<div className="content-area">
				<main className="content-min-height">
					<Breadcrumb />
					<Outlet />
				</main>
				<footer className="footer-height">
					<Footer />
				</footer>
			</div>
		</div>
	);
}
