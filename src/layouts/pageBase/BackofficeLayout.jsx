import { Outlet } from "react-router-dom";
import { Footer } from "layouts/footer/Footer";
import { Breadcrumb } from "./Breadcrumb";
import "./backoffice-layout.css";
import { Header } from "layouts/header/Header";
import { Sidebar } from "layouts/sidebar/Sidebar";

export function BackofficeLayout() {
	return (
		<div id="BackofficeLayout">
			<header className="header-height">
				<Header/>
				<Sidebar />
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
