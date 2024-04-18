import { Divider, Icon } from "components/elementos";
import { CaixaTexto, ComboBox, SwitchToggle } from "components/form";
import { FORM_OPTIONS } from "data/constants";
import { FormularioOpcoes } from "./FormularioOpcoes";

export const FormularioPergunta = ({ id }) => {
	return (
		<div className="bloco">
			<div>{id}. Formulário</div>
			<div className="d-flex">
				<CaixaTexto placeholder="Pergunta" />
				<ComboBox options={FORM_OPTIONS} placeholder="-" />
			</div>
			<FormularioOpcoes />
			<Divider />
			<div className="d-flex align-items-center gap-2">
				<Icon iconName="TrashFill" />
				Obrigatório <SwitchToggle />
			</div>
		</div>
	);
};
