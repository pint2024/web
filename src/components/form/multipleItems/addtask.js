import { useState } from "react";
import { Botao, CaixaTexto } from "../index";

export default function AddTask({ onAddTask }) {
	const [text, setText] = useState("");

	const handleAdicionar = () => {
		console.log("ola", text)
		setText("");
		onAddTask(text);
	}

	return (
		<>
			<CaixaTexto placeholder="Adicionar" value={text} handleChange={(e) => setText(e)} />
			<Botao
				handleClick={() => handleAdicionar()}
			>
				Adicionar
			</Botao>
		</>
	);
}
