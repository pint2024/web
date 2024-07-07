import { ApiRequest } from "api";
import { GraficoLinhas } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";

export function AreaGrafico() {
	const [dataArea, setdataArea] = useState(null);
	const [graphData, setgraphData] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		handleFetchArea();
	}, []);

	useEffect(() => {
		if (dataArea) handleFormatData();
	}, [dataArea]);

	useEffect(() => {
		if (graphData) chartData();
	}, [graphData]);

	const handleFormatData = () => {
		const contadorTopicos = {};
		dataArea.forEach((item) => {
			contadorTopicos[item.id] = {
				numConteudos: item.conteudo_subtopico ? item.conteudo_subtopico.length : 0,
				area: item.area,
			};
		});
		setgraphData(contadorTopicos);
	};

	const handleFetchArea = async () => {
		startLoading();
		const data = await ApiRequest.listar("subtopico");
		setdataArea(data);
		stopLoading();
	};

	const dataNumContent = () => {
		let label = [];
		if (graphData) {
			for (let item of Object.values(graphData)) {
				label.push(item.numConteudos);
			}
		}
		return label;
	};

	const labelArea = () => {
		let label = [];
		if (graphData) {
			for (let item of Object.values(graphData)) {
				label.push(item.area);
			}
		}
		return label;
	};

	const chartData = () => {
		const x = {
			labels: labelArea(),
			datasets: [
				{
					label: "Quantidade de conteudos por area",
					data: dataNumContent(),
					fill: false,
					borderColor: "rgb(75, 192, 192)",
					tension: 0.1,
				},
			],
		};
		console.log(x);
		return x;
	};

	return (
		<>
			<GraficoLinhas chartData={chartData()} />
		</>
	);
}
