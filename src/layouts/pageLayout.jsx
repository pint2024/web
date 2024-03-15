import { Outlet } from "react-router-dom";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import PageContent from "./pageContent";
import { HEADER_VH, FOOTER_VH } from "data/constants";

export function PageLayout() {
	return (
		<div>
			<header className="header-height">
				<Header />
			</header>
			<main className="content-min-height">
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
