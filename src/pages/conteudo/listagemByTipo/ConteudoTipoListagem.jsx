import { Request } from "api";
import { Post } from "components";
import { EnumConstants } from "data/enum.constants";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./conteudo-tipo-listagem.css";

export function ConteudoTipoListagem() {
	const [dataTipo, setdataTipo] = useState(null);
	const { startLoading, stopLoading } = useCarregando();
	const { tipo } = useParams();

	useEffect(() => {
		const fetchConteudoData = async () => {
			startLoading();
			const data = await Request.listar("conteudo", { tipo: EnumConstants.getTipoIdByRoute(tipo) });
			setdataTipo(data);
			stopLoading();
		};
		fetchConteudoData();
	}, []);

	if (!dataTipo) return;

	return (
		<>
			<div className="post-grid">
				{dataTipo?.map((item) => (
					<Post
						key={item.id}
						id={item.id}
						titulo={item.titulo}
						topico={item.conteudo_subtopico.area}
						utilizador={item.conteudo_utilizador}
						date={item.data_criacao}
						imagem={item.imagem}
					/>
				))}
			</div>
		</>
	);
}
