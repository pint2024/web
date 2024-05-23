import { useState } from "react";
import { Icon } from "components/ui";
import { CaixaTexto } from "../index";
import { Botao } from "components/index";

export function ItemControlAdd({ onAddItem }) {
	const [text, setText] = useState("");

	const handleAdicionar = () => {
		setText("");
		onAddItem(text);
	};

	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div className="d-flex">
			<CaixaTexto placeholder="Adicionar" value={text} onChange={(e) => handleChange(e)} />
			<Botao onClick={() => handleAdicionar()}>
				<Icon iconName="PlusCircleFill" type="inverse" />
			</Botao>
		</div>
	);
}
