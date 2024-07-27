import { Outlet } from "react-router-dom";
import { Header } from "layouts/header/Header";
import { PageContent } from "./PageContent";
import { Breadcrumb } from "./Breadcrumb";
import "./layouts.css";
import { useSidebarStatus } from "hooks/useSidebarStatus";
import { Sidebar } from "layouts/sidebar/Sidebar";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH } from "data/constants";
import { Botao } from "components";

export function PageLayout() {
	const { isOpen } = useSidebarStatus();

	return (
		<div id="PageLayout" className="layout-container">
			<Header />
			<main>
				<Sidebar />
				<div
					id="main-conteudo"
					style={{
						marginLeft: isOpen ? `${SIDEBAR_CLOSE_WIDTH}px` : `${SIDEBAR_OPEN_WIDTH}px`,
						transition: "margin-left 0.3s ease",
					}}
				>
					<PageContent>
						<Outlet />
					</PageContent>
				</div>
			</main>
			{/*<footer className="footer-height">
				<Footer />
			</footer>*/}
		</div>
	);
}
