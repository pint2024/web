import { Link } from "react-router-dom";
import { Dropdown, Icone, Imagem, Navegar, Texto } from "components/index";
import { userItems } from "./headerData";

import "./header.css";
import { useCurrentUser } from "hooks/useCurrentUser";
import { ImagemUtilizador } from "components/common/imagem/ImagemUtilizador";
import { LOGO } from "data/constants";
import { Row } from "components/ui/Row";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";
import { useSidebarStatus } from "hooks/useSidebarStatus";

export function Header() {
	const { isOpen, setIsOpen } = useSidebarStatus();
	const utilizadorAtual = useCurrentUser();

	const handleTrigger = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header id="Header" className="header-height fixed-header">
			<div className="nav-area">
				<Row className="gap-4">
					<div className="trigger" onClick={handleTrigger}>
						<Icone iconName={isOpen ? "X" : "List"} className="trigger-icon" />
					</div>
					<Link to="/" className="header-logo remove-margin remove-user-select">
						<Imagem src={LOGO} alt="Logo" className="header-site-logo" />
					</Link>
				</Row>
				<nav className="desktop-nav">
					<ul className="menus d-flex remove-padding"></ul>
				</nav>
				<Row className="gap-4 remove-user-select">
					{utilizadorAtual ? (
						<>
							{utilizadorAtual?.utilizador_centro?.centro && (
								<Row className="gap-2">
									<Icone iconName="BuildingsFill" />
									<Texto size={COMMON_SIZES.FS2} type={COMMON_TYPES.INVERSO}>
										{utilizadorAtual?.utilizador_centro?.centro}
									</Texto>
								</Row>
							)}
							<Row className="gap-2">
								<Icone iconName="PersonFill" />
								<div>
									<div>
										<Texto size={COMMON_SIZES.FS2} type={COMMON_TYPES.INVERSO}>
											{utilizadorAtual.nome} {utilizadorAtual.sobrenome}
										</Texto>
									</div>
									<div>
										<Texto size={COMMON_SIZES.FS0} type={COMMON_TYPES.INVERSO}>
											{utilizadorAtual?.utilizador_perfil?.perfil}
										</Texto>
									</div>
								</div>
							</Row>
							<Dropdown items={userItems(utilizadorAtual.id)}>
								<ImagemUtilizador src={utilizadorAtual.imagem} className="header-user-image cursor-pointer" />
							</Dropdown>
						</>
					) : (
						<Navegar to="/iniciar-sessao">
							<Icone iconName={"PersonPlusFill"} className="icon" />
						</Navegar>
					)}
				</Row>
			</div>
		</header>
	);
}
