import { Divider, Icon } from "components/elementos";
import { CaixaTexto, ComboBox, ItemControl, SwitchToggle } from "components/form";
import { FORM_OPTIONS } from "data/constants";
import { FormularioOpcoes } from "./FormularioOpcoes";

export const FormularioBlocoPolling = ({ id }) => {
	return (
		<div className="bloco">
			<div>
				<div>{id}º Formulário</div>
			</div>
			<ItemControl
				options={[
					{ id: 0, text: "crl", done: true },
					{ id: 1, text: "fds", done: false },
					{ id: 2, text: "fdp", done: false },
				]}
			/>
		</div>
	);
};
