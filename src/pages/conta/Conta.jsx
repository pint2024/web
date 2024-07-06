import { BlocoPrincipal } from "./blocos/BlocoPrincipal";
import { BlocoAtividade } from "./blocos/BlocoAtividade";
import { BlocoEventos } from "./blocos/BlocoEventos";
import { BlocoEstatisticas } from "./blocos/BlocoEstatisticas";
import { BlocoComentarios } from "./blocos/BlocoComentario";
import { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { useParams } from "react-router-dom";
import { ApiRequest } from "api/apiRequest";
import { BlocoParticipacoes } from "./blocos/BlocoParticipacoes";
import { useUserValidation } from "hooks/useAuth";

export function Conta() {
	const { id } = useParams();
	const [dataConta, setdataConta] = useState(null);
	const [dataParticipacao, setdataParticipacao] = useState(null);
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		startLoading();
		await fetchParticipacaoData();
		await fetchContaData();
		stopLoading();
	};

	const fetchContaData = async () => {
		const data = await ApiRequest.obter("utilizador/simples", id);
		console.log("feito1");
		setdataConta(data);
	};

	const fetchParticipacaoData = async () => {
		const data = await ApiRequest.listar("participante", { utilizador: id });
		console.log("feito2");

		setdataParticipacao(data);
	};

	if (!dataConta || !dataParticipacao) return;

	return (
		<div>
			<BlocoPrincipal data={dataConta} />
			<div className="mt-3">
				<BlocoParticipacoes data={dataParticipacao} />
			</div>
			<div className="mt-3">
				<BlocoAtividade />
			</div>
			<div className="mt-3">
				<BlocoEventos />
			</div>
			<div className="mt-3">
				<BlocoEstatisticas />
			</div>
			<div className="mt-3">
				<BlocoComentarios />
			</div>
		</div>
	);
}
