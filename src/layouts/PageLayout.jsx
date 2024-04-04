import { Outlet } from "react-router-dom";
import { Header } from "layouts/header/Header";
import { Footer } from "layouts/footer/Footer";
import { PageContent } from "./PageContent";
import { Breadcrumb } from "./Breadcrumb";

export function PageLayout() {
	return (
		<div id="PageLayout">
			<header className="header-height">
				<Header />
			</header>
			<main className="content-min-height">
				<Breadcrumb />
				<PageContent>
					<Outlet />
				</PageContent>
			</main>
			<footer className="footer-height">
				<Footer />
			</footer>
		</div>
	);
}
