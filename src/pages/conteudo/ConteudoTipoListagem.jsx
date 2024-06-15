import { Request } from "api";
import { Post } from "components";
import { EnumConstants } from "data/enum.constants";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
			<div className="d-flex gap-4">
				{dataTipo?.map((item) => (
					<Post
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
