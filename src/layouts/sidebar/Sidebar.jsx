import "./sidebar.css";
import { Icone, Texto } from "components";
import { Link } from "react-router-dom";
import { COMMON_TYPES } from "data/data";
import { Row } from "components/ui/Row";
import { useSidebarStatus } from "hooks/useSidebarStatus";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH } from "data/constants";

function Item({ route, icone, label }) {
	return (
		<div className="header-item">
			<Link to={route} className="sidebar-position top-gap-beetwen-items">
				<Row className="gap-3">
					<Icone type={COMMON_TYPES.INVERSO} iconName={icone} className="sidebar-icon" />
					<Texto type={COMMON_TYPES.INVERSO} className="sidebar-label">{label}</Texto>
				</Row>
			</Link>
		</div>
	);
}

export function Sidebar() {
	const { isOpen } = useSidebarStatus();

	return (
		<aside
			className={`sidebar-menu`}
			style={{
				width: isOpen ? `${SIDEBAR_CLOSE_WIDTH}px` : `${SIDEBAR_OPEN_WIDTH}px`,
				transition: "width 0.3s ease",
			}}
		>
			<nav className="sidebar-nav-items">
				<Item route="/conteudos" icone="PeopleFill" label="Conteudos" />
				<Item route="/calendario" icone="PeopleFill" label="Calendário" />
				<Item route="/sobre" icone="PeopleFill" label="Sobre" />
				<Item route="/backoffice" icone="PeopleFill" label="Backoffice" />


				<Item route="/conteudos" icone="PeopleFill" label="Conteudos" />
				<Item route="/calendario" icone="PeopleFill" label="Calendário" />
				<Item route="/sobre" icone="PeopleFill" label="Sobre" />
				<Item route="/backoffice" icone="PeopleFill" label="Backoffice" />
				<Item route="/conteudos" icone="PeopleFill" label="Conteudos" />
				<Item route="/calendario" icone="PeopleFill" label="Calendário" />
				<Item route="/sobre" icone="PeopleFill" label="Sobre" />
				<Item route="/backoffice" icone="PeopleFill" label="Backoffice" />
				<Item route="/conteudos" icone="PeopleFill" label="Conteudos" />
				<Item route="/calendario" icone="PeopleFill" label="Calendário" />
				<Item route="/sobre" icone="PeopleFill" label="Sobre" />
				<Item route="/backoffice" icone="PeopleFill" label="Backoffice" />

			</nav>
		</aside>
	);
}
