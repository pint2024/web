import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuDropdown from "src/components/OverlayTooltip/menuDropdown";

export default function SubheaderMenu({ itemAtivo = 0 }) {
	const isActive = (index) => itemAtivo === index;

	return (
		<div className="subheader">
			<ul className="menu">
				<li>
					<MenuDropdown
						trigger={
							<div className="hover-regular align-items-center cursor-ponteiro d-flex gap-2">
								<h4>Reporting</h4>
								<FontAwesomeIcon icon={["fas", "chevron-down"]} />
							</div>
						}
						items={[
							{ nome: "Candidaturas", icon: "envelope", rota: "/dashboard/reporting/candidaturas" },
							{ nome: "Contratações", icon: "briefcase", rota: "/dashboard/reporting/contratacoes" },
							{ nome: "Negócios", icon: "building", rota: "/dashboard/reporting/negocios" },
							{ nome: "Ideias", icon: "lightbulb", rota: "/dashboard/reporting/ideias" },
							{ nome: "Registos", icon: "user-plus", rota: "/dashboard/reporting/registos" },
						]}
						hover={true}
					/>
				</li>
				<li>
					<MenuDropdown
						trigger={
							<div className="hover-regular align-items-center cursor-ponteiro d-flex gap-2">
								<h4>Tabelas</h4>
								<FontAwesomeIcon icon={["fas", "chevron-down"]} />
							</div>
						}
						items={[
							{ nome: "Utilizadores", icon: "users", rota: "/dashboard/tabelas/utilizadores" },
							{ nome: "Negócios", icon: "building", rota: "/dashboard/tabelas/negocios" },
						]}
						hover={true}
					/>
				</li>
			</ul>
		</div>
	);
}
