import { Texto } from "components/elementos";
import { Bloco } from "components/elementos/blocos/Bloco";
import { GraficoPizza } from "components/graficos/GraficoPizza";

import "./form-detalhe.css";

export const RespostasPolling = () => {
	const dadosFicticios = {
		labels: ["Op1", "Op2", "Op3", "Op4", "Op5", "Op6"],
		datasets: [
			{
				label: "Nº respostas",
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
			<GraficoPizza chartData={dadosFicticios} className="grafico-tamanho" />
		</Bloco>
	);
};
