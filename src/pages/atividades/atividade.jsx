import { ComboBox } from "components/form/__init__";
import { AtividadeItems } from "./atividadeItems";

export const Atividade = () => {
	return (
		<div>
			<div className="d-flex justify-content-end gap-2">
				{/* Sort */}
				<ComboBox placeholder="Recentes" options={[{label: "Mais Gostos", value: "1"}, {label: "Mais Comentários", value: "2"}]} />
				{/* Filter */}
				<ComboBox placeholder="Todos" options={[{label: "Saúde", value: "1"}, {label: "Desporto", value: "2"}, {label: "Gastronomia", value: "3"}]} />
			</div>
			<AtividadeItems />
		</div>
	);
};
