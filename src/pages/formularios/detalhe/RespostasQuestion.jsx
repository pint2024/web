import { Texto } from "components/elementos";
import { Bloco } from "components/elementos/blocos/Bloco";

import "./form-detalhe.css";
import { TextoDestaque } from "components/elementos/textoDestaque/TextoDestaque";

export const RespostasQuestion = () => {
	return (
		<Bloco>
			<div>
				<Texto size={3}>Pergunta?</Texto>
				<Texto size={0}>9 respostas</Texto>
			</div>
			<div className="mt-2">
				<TextoDestaque>Joao Santos</TextoDestaque>
			</div>
			<div className="mt-2">
				<TextoDestaque>Oi</TextoDestaque>
			</div>
		</Bloco>
	);
};
