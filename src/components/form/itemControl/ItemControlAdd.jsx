import { useState } from "react";
import { Botao, CaixaTexto } from "../";
import { Icon } from "components/elementos";

export function ItemControlAdd({ onAddItem }) {
	const [text, setText] = useState("");

	const handleAdicionar = () => {
		setText("");
		onAddItem(text);
	}

	return (
		<div className="d-flex">
			<CaixaTexto placeholder="Adicionar" value={text} handleChange={(e) => setText(e)} />
			<Botao
				onClick={() => handleAdicionar()}
			>
				<Icon iconName="PlusCircleFill" type="inverse" />
			</Botao>
		</div>
	);
}
