import { Dropdown } from "components/dropdown/Dropdown";
import { Divider, Texto } from "components/elementos";
import "./dashboardHeader.css";

export function DashboardHeader() {
	return (
		<div>
			<div className="subheader align-items-center d-flex gap-5">
				<Dropdown
					items={[
						{ nome: "Postagens", rota: "/dashboard/reporting/postagens" },
						{ nome: "Registos", rota: "/dashboard/reporting/registos" },
						{ nome: "Movimentação", rota: "/dashboard/reporting/motivimentacao" },
					]}
				>
					<Texto size={4}>Reporting</Texto>
				</Dropdown>

				<Dropdown
					items={[
						{ nome: "Utilizadores", icon: "envelope", rota: "/dashboard/reporting/utilizadores" },
						{ nome: "Atividades", icon: "envelope", rota: "/dashboard/tabelas/atividades" },
					]}
				>
					<Texto size={4}>Tabelas</Texto>
				</Dropdown>
			</div>
			<Divider />
		</div>
	);
}
