import { Outlet } from "react-router-dom";
import Header from "layouts/header/1Header";
import Footer from "layouts/footer/1Footer";
import PageContent from "./pageContent";
import { Breadcrumb } from "./breadcrumb";

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
