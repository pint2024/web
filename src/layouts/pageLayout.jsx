import { Outlet } from "react-router-dom";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import PageContent from "./pageContent";
import { HEADER_VH, FOOTER_VH } from "data/constants";

export function PageLayout() {
	return (
		<div>
			<header style={{ height: `${HEADER_VH}vh`}}>
				<Header />
			</header>
			<main>
				<PageContent>
					<Outlet />
				</PageContent>
			</main>
			<footer style={{ height: `${FOOTER_VH}vh`}}>
				<Footer />
			</footer>
		</div>
	);
}
