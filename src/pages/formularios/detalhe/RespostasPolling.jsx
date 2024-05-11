import { Texto } from "components/elementos";
import { Bloco } from "components/elementos/blocos/Bloco";
import { GraficoPizza } from "components/graficos/GraficoPizza";

import "./form-detalhe.css";

export const RespostasPolling = () => {
	const dadosFicticios = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "My First Dataset",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
				hoverOffset: 4,
			},
		],
	};

	return (
		<Bloco>
			<div>
				<Texto size={3}>Pergunta?</Texto>
				<Texto size={0}>9 respostas</Texto>
			</div>
			<GraficoPizza chartData={dadosFicticios} Nome="Exemplo de Gráfico de Pizza" className="grafico-tamanho" />
		</Bloco>
	);
};
