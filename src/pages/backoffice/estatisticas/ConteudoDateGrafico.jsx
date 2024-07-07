import { ApiRequest } from "api";
import { GraficoLinhas } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";

export function ConteudoDateGrafico() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		handleFetchArea();
	}, []);

	const handleFetchArea = async () => {
		startLoading();
		const data = await ApiRequest.listar("conteudo");
		setdataConteudo(data);
		stopLoading();
	};

	const chartData = () => {
		if (!dataConteudo) return null;

		const conteudosPorDia = {};

		dataConteudo.forEach((conteudo) => {
			const dataPublicacao = new Date(conteudo.data_criacao);
			const dia = dataPublicacao.toISOString().split("T")[0];

			if (!conteudosPorDia[dia]) {
				conteudosPorDia[dia] = {
					date: dia,
					count: 0,
				};
			}

			conteudosPorDia[dia].count++;
		});

		const sortedDays = Object.values(conteudosPorDia).sort((a, b) => a.date.localeCompare(b.date));

		const labels = sortedDays.map((dia) => dia.date);
		const data = sortedDays.map((dia) => dia.count);

		return {
			labels: labels,
			datasets: [
				{
					label: "Quantidade de conteúdos por dia",
					data: data,
					fill: false,
					borderColor: "rgb(75, 192, 192)",
					tension: 0.1,
				},
			],
		};
	};

	return <>{dataConteudo && <GraficoLinhas chartData={chartData()} />}</>;
}
