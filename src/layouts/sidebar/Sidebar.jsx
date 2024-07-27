import "./sidebar.css";
import { Icone, Texto } from "components";
import { Link } from "react-router-dom";
import { COMMON_TYPES } from "data/data";
import { Row } from "components/ui/Row";
import { useSidebarStatus } from "hooks/useSidebarStatus";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH } from "data/constants";
import { useOnResize } from "hooks/useOnResize";
import { useEffect } from "react";
import { DrawerStateUtils } from "utils/drawerState.utils";

function Item({ route, icone, label }) {
	const { isOpen } = useSidebarStatus();
	return (
		<div className="header-item remove-user-select">
			<Link to={route} className="sidebar-position top-gap-beetwen-items">
				<Row className="gap-3">
					<Icone type={COMMON_TYPES.INVERSO} iconName={icone} size={4} className="sidebar-item-icon" />
					{isOpen && (
						<Texto type={COMMON_TYPES.INVERSO} className="sidebar-item-label">
							{label}
						</Texto>
					)}
				</Row>
			</Link>
		</div>
	);
}

export function Sidebar() {
	const { isOpen, setIsOpen } = useSidebarStatus();
	const windowWidth = useOnResize();

	useEffect(() => {
		if (windowWidth < 1300) setIsOpen(false);
	}, [windowWidth]);

	return (
		<aside
			className={`sidebar-menu`}
			style={{
				width: isOpen ? `${SIDEBAR_CLOSE_WIDTH}px` : `${SIDEBAR_OPEN_WIDTH}px`,
				transition: "width 0.3s ease",
			}}
		>
			<nav className="sidebar-nav-items">
				<Item route="/conteudos" icone="Star" label="Conteudos" />
				<Item route="/calendario" icone="Calendar" label="Calendário" />
				<Item route="/sobre" icone="InfoCircle" label="Sobre" />
				<Item route="/backoffice" icone="PersonBadge" label="Backoffice" />
				<Item route="/backoffice/utilizadores" icone="PeopleFill" label="Utilizador" />
				<Item route="/backoffice/topicos" icone="BookmarksFill" label="Tópicos" />
				<Item route="/backoffice/centros" icone="BuildingsFill" label="Centro" />
				<Item route="/backoffice/revisoes/conteudo" icone="Star" label="Revisão Conteudo" />
				<Item route="/backoffice/revisoes/comentario" icone="ChatFill" label="Revisão Comentario" />
				<Item route="/backoffice/denuncias" icone="ExclamationTriangleFill" label="Denuncias" />
				<Item route="/backoffice/estatisticas" icone="BarChartFill" label="Estatísticas" />
			</nav>
		</aside>
	);
}
