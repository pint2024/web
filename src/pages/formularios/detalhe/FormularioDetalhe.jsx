import { Bloco } from "components/elementos/blocos/Bloco";
import { ComboBox, SwitchToggle } from "components/form";
import { RespostasPolling } from "./RespostasPolling";
import { RespostasQuestion } from "./RespostasQuestion";

export const FormularioDetalhe = () => {
	// Vai buscar
	return (
		<>
			<Bloco>
				<div>9 respostas</div>
				<div>
					Aceitar Respostas <SwitchToggle />
					<ComboBox placeholder={"Filtrar por utilizador"} />
				</div>
			</Bloco>
			<div className="mt-3">
				<RespostasPolling />
			</div>
			<div className="mt-3">
				<RespostasQuestion />
			</div>
		</>
	);
};
