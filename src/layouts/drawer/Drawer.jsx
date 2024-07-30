import "./drawer.css";
import { Icone, Texto } from "components";
import { Link } from "react-router-dom";
import { COMMON_TYPES } from "data/data";
import { Row } from "components/ui/Row";
import { useDrawerStatus } from "hooks/useDrawerStatus";
import { DRAWER_CLOSE_WIDTH, DRAWER_OPEN_WIDTH } from "data/constants";
import { useOnResize } from "hooks/useOnResize";
import { useEffect } from "react";
import { DrawerStateUtils } from "utils/drawerState.utils";
import { EnumConstants } from "data/enum.constants";
import { Authorizor } from "components/helpers/Authorizor";

function Item({ route, icone, label }) {
	const { drawerIsOpen } = useDrawerStatus();
	return (
		<div className="header-item remove-user-select">
			<Link to={route} className="drawer-position top-gap-beetwen-items">
				<Row className="gap-3">
					<Icone type={COMMON_TYPES.INVERSO} iconName={icone} size={4} className="drawer-item-icon" />
					{drawerIsOpen && (
						<Texto type={COMMON_TYPES.INVERSO} className="drawer-item-label">
							{label}
						</Texto>
					)}
				</Row>
			</Link>
		</div>
	);
}

export function Drawer() {
	const { drawerIsOpen, setDrawerIsOpen } = useDrawerStatus();
	const windowWidth = useOnResize();

	useEffect(() => {
		if (windowWidth < 1300) setDrawerIsOpen(false);
	}, [windowWidth]);

	return (
		<aside
			className={`drawer-menu`}
			style={{
				width: drawerIsOpen ? `${DRAWER_CLOSE_WIDTH}px` : `${DRAWER_OPEN_WIDTH}px`,
				transition: "width 0.3s ease",
			}}
		>
			<nav className="drawer-nav-items">
				<Authorizor requiredPermission={EnumConstants.ROLES.USER.ID}>
					<Item route="/conteudos" icone="Star" label="Conteudos" />
					<Item route="/calendario" icone="Calendar" label="Calendário" />
				</Authorizor>
				<Item route="/sobre" icone="InfoCircle" label="Sobre" />
				<Authorizor requiredPermission={EnumConstants.ROLES.ADMIN.ID}>
					<Item route="/backoffice/utilizadores" icone="PeopleFill" label="Utilizadores" />
					<Item route="/backoffice/topicos" icone="BookmarksFill" label="Tópicos" />
					<Item route="/backoffice/centros" icone="BuildingsFill" label="Centro" />
					<Item route="/backoffice/revisoes/conteudo" icone="Star" label="Revisão Conteudo" />
					<Item route="/backoffice/revisoes/comentario" icone="ChatFill" label="Revisão Comentario" />
					<Item route="/backoffice/denuncias" icone="ExclamationTriangleFill" label="Denuncias" />
					<Item route="/backoffice/estatisticas" icone="BarChartFill" label="Estatísticas" />
				</Authorizor>
			</nav>
		</aside>
	);
}
