import { AutenticacaoRequest } from "api";
import { ApiRequest } from "api/apiRequest";
import { Comentario, CaixaTexto, Texto, Botao } from "components/index";
import { COMMON_SIZES } from "data/data";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";

export function ComentarioSeccao({ id }) {
	const [dataComentarios, setdataComentarios] = useState(null);
	const [novoComentario, setnovoComentario] = useState("");
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		startLoading();
		fetchComentariosData();
		stopLoading();
	}, []);

	const fetchComentariosData = async () => {
		const data = await ApiRequest.listar("comentario", { conteudo: id });
		setdataComentarios(data);
	};

	if (!dataComentarios) return;

	const handleEnviarComentario = async () => {
		await ApiRequest.criar("comentario", {
			comentario: novoComentario,
			conteudo: id,
			utilizador: 1,
		});
		fetchComentariosData();
		setnovoComentario("");
	};

	const handleNewComentarioChange = (comentario) => {
		setnovoComentario(comentario);
	};

	return (
		<div className="conteudo-detalhe-comentario">
			<Texto size={COMMON_SIZES.FS4}>Comentário ({dataComentarios.length})</Texto>
			<div className="d-flex align-items-center gap-2 mb-3">
				<CaixaTexto
					placeholder="Adicione um comentário..."
					value={novoComentario}
					handleChange={handleNewComentarioChange}
				/>
				<Botao onClick={handleEnviarComentario}>Enviar</Botao>
			</div>
			{dataComentarios.map((comentario, _) => (
				<div className="mb-2">
					<Comentario key={comentario.id} utilizador={comentario.comentario_utilizador} comentario={comentario} />
				</div>
			))}
		</div>
	);
}
