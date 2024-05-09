import { useState } from "react";
import { Botao, TextBox } from "../";
import { Icon } from "components/elementos";

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
			<TextBox placeholder="Adicionar" value={text} onChange={(e) => handleChange(e)} />
			<Botao onClick={() => handleAdicionar()}>
				<Icon iconName="PlusCircleFill" type="inverse" />
			</Botao>
		</div>
	);
}
