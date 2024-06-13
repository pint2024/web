import { BlocoPrincipal } from "./BlocoPrincipal";
import { BlocoAtividade } from "./BlocoAtividade";
import { BlocoEventos } from "./BlocoEventos";
import { BlocoEstatisticas } from "./BlocoEstatisticas";
import { BlocoComentarios } from "./BlocoComentario";
import { useEffect, useState } from "react";
import { useCarregando } from "hooks/useCarregando";
import { Request } from "api";
import { useParams } from "react-router-dom";

export function Conta() {
	const [dataConteudo, setdataConteudo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();
	const { id } = useParams();

	useEffect(() => {
		const fetchConteudoData = async () => {
			startLoading();
			const data = await Request.obter("utilizador", id);
			setdataConteudo(data);
			stopLoading();
		};
		fetchConteudoData();
	}, []);

	if (!dataConteudo) return;

	return (
		<div>
			<BlocoPrincipal data={dataConteudo} />
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
};
