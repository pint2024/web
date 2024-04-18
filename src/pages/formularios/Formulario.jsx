import { CaixaTexto, ComboBox, SwitchToggle, TextArea } from "components/form";
import "./formulario.css";
import { ORDER_OPTIONS } from "data/constants";
import { Icon } from "components/elementos";
import { FormularioPergunta } from "./FormularioPergunta";

export function Formulario() {
	return (
		<>
			<div className="bloco">
				<CaixaTexto placeholder="Título" />
				<TextArea placeholder="Descrição" />
			</div>
			<FormularioPergunta id={1} />
			<FormularioPergunta id={2} />
			<FormularioPergunta id={3} />
		</>
	);
}
