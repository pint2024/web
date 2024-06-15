import User from "assets/images/user-default.png";
import { Comentario, CaixaTexto, Texto } from "components/index";
import { COMMON_SIZES } from "data/data";

export function ComentarioSeccao({ comentarios }) {
	return (
		<div className="conteudo-detalhe-comentario">
			<Texto size={COMMON_SIZES.FS4}>Comentário ({comentarios.length})</Texto>
			<CaixaTexto placeholder="Adicione um comentário..." />
			{comentarios.map((comentario, _) => (
				<Comentario key={comentario.id} utilizador={comentario.comentario_utilizador} comentario={comentario} />
			))}
		</div>
	);
}
