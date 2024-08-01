import "./drawer.css";
import { Icone, Texto } from "components";
import { Link, useLocation } from "react-router-dom";
import { COMMON_TYPES } from "data/data";
import { Row } from "components/ui/Row";
import { useDrawerStatus } from "hooks/useDrawerStatus";
import { DRAWER_CLOSE_WIDTH, DRAWER_OPEN_WIDTH } from "data/constants";
import { useOnResize } from "hooks/useOnResize";
import { useEffect, useState } from "react";
import { DrawerStateUtils } from "utils/drawerState.utils";
import { EnumConstants } from "data/enum.constants";
import { Authorizor } from "components/helpers/Authorizor";

function Item({ route, icone, label }) {
	const { drawerIsOpen } = useDrawerStatus();
	const [isSelected, setisSelected] = useState(false);
	const location = useLocation();

	return (
		<div className="header-item remove-user-select">
			<Link to={route} className="drawer-position top-gap-beetwen-items">
				<Row className="gap-3">
					<Icone type={COMMON_TYPES.INVERSO} iconName={icone} size={4} className={`drawer-item-icon ${isSelected ?? "drawer-item-icon-highlight"}`}/>
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
					<Item route="/" icone="HouseFill" label="Inicial" />
					<Item route="/calendario" icone="CalendarFill" label="Calendário" />
				</Authorizor>
				<Item route="/sobre" icone="InfoCircleFill" label="Sobre" />
				<Authorizor requiredPermission={EnumConstants.ROLES.ADMIN.ID}>
					<Item route="/backoffice/utilizadores" icone="PeopleFill" label="Utilizadores" />
					<Item route="/backoffice/conteudos" icone="CollectionPlayFill" label="Conteudos" />
					<Item route="/backoffice/comentarios" icone="ChatLeftTextFill" label="Comentarios" />
					<Item route="/backoffice/estatisticas" icone="GraphUp" label="Estatísticas" />
					<Item route="/backoffice/denuncias" icone="ShieldSlashFill" label="Denuncias" />
					<Item route="/backoffice/topicos" icone="FileTextFill" label="Tópicos" />
					<Item route="/backoffice/centros" icone="Diagram2Fill" label="Centros" />
				</Authorizor>
			</nav>
		</aside>
	);
}
