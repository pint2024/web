import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import PageContent from "./pageContent";

function PageLayout() {
	return (
		<body>
			<header>
				<Header />
			</header>
			<main>
				<PageContent>
					<Outlet />
				</PageContent>
			</main>
			<footer>
				<Footer />
			</footer>
		</body>
	);
}

export default PageLayout;
