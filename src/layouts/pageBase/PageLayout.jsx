import { Outlet, useLocation } from "react-router-dom";
import { Header } from "layouts/header/Header";
import { PageContent } from "./PageContent";
import "./layouts.css";
import { useDrawerStatus } from "hooks/useDrawerStatus";
import { Drawer } from "layouts/drawer/Drawer";
import { DRAWER_CLOSE_WIDTH, DRAWER_OPEN_WIDTH, PROJETO_NAME } from "data/constants";
import { useEffect } from "react";
import { RoutesUtils } from "utils/routes.utils";

export function PageLayout() {
	const { drawerIsOpen, drawerIsHidden } = useDrawerStatus();
	const { pathname } = useLocation();

	useEffect(() => {
		const rotasAtuais = RoutesUtils.findRouteBySinglePath(pathname);
		const rotaAtual = rotasAtuais[rotasAtuais.length - 1];
		document.title = rotaAtual ? rotaAtual.section + " - " + PROJETO_NAME : PROJETO_NAME;
	}, [pathname]);

	return (
		<div id="PageLayout" className="layout-container">
			<Header />
			<main>
				{!drawerIsHidden && <Drawer />}
				<div
					id="main-conteudo"
					style={{
						marginLeft: !drawerIsHidden ? (drawerIsOpen ? `${DRAWER_CLOSE_WIDTH}px` : `${DRAWER_OPEN_WIDTH}px`) : `0px`,
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
