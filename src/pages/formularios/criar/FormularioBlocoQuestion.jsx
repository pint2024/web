import { Divider, Icon } from "components/elementos";
import { CaixaTexto, ComboBox, ItemControl, SwitchToggle, TextBox } from "components/form";
import { FORM_OPTIONS } from "data/constants";
import { FormularioOpcoes } from "./FormularioOpcoes";

export const FormularioBlocoQuestion = ({ id }) => {
	return (
		<div className="bloco">
			<div>
				<div>{id}º Formulário</div>
				<TextBox placeholder="Insira a sua pergunta." />
			</div>
			<FormularioOpcoes/>
		</div>
	);
};
