import { TextBox, ComboBox, SwitchToggle, TextArea, Botao } from "components/form";
import "./formulario.css";
import { FormularioBlocoPolling } from "./FormularioBlocoPolling";
import { FormularioBlocoQuestion } from "./FormularioBlocoQuestion";

export function FormularioCriar() {
	return (
		<>
			<div className="bloco">
				<TextBox placeholder="Título" />
				<TextArea placeholder="Descrição" />
				<Botao>Adicionar</Botao>
			</div>
			<FormularioBlocoPolling id={1} />
			<FormularioBlocoQuestion id={2} />
			<FormularioBlocoPolling id={3} />
		</>
	);
}
