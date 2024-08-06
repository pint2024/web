import { BlocoPrincipal } from "./blocos/BlocoPrincipal";
import { useEffect, useState } from "react";
import { useLoading } from "hooks/useLoading";
import { useParams } from "react-router-dom";
import { ApiRequest } from "api/apiRequest";
import { BlocoParticipacoes } from "./blocos/BlocoParticipacoes";

export function Conta() {
	const { id } = useParams();
	const [dataConta, setdataConta] = useState(null);
	const [dataParticipacao, setdataParticipacao] = useState(null);
	const loading = useLoading();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		loading.start();
		await fetchParticipacaoData();
		await fetchContaData();
		loading.stop();
	};

	const fetchContaData = async () => {
		const data = await ApiRequest.obter("utilizador/simples", id);
		setdataConta(data);
	};

	const fetchParticipacaoData = async () => {
		const data = await ApiRequest.listar("participante", { utilizador: id });
		setdataParticipacao(data);
	};

	if (!dataConta || !dataParticipacao) return;

	return (
		<div>
			<BlocoPrincipal data={dataConta} />
			{dataParticipacao.length > 0 && <div className="mt-3">
				<BlocoParticipacoes data={dataParticipacao} />
			</div>}
		</div>
	);
}
