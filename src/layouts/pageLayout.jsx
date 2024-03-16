import { Outlet } from "react-router-dom";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import PageContent from "./pageContent";
import { Breadcrumb } from "./breadcrumb";

export function PageLayout() {
	return (
		<div>
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
