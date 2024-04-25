import { Texto } from "components/elementos";
import { CaixaTexto } from "components/form";
import User from "assets/images/user-placeholder.png";
import { Comentario } from "../comentario/Comentario";

export function DetalheComentario() {
	return (
		<div className="atividade-detalhe-comentario">
			<Texto size={4}>Comentário (10)</Texto>
			<CaixaTexto placeholder="Adicione um comentário..." />
			<Comentario imagem={User} comentario={"Ola jasdfnjklas ngjklasdng kjlasdnlk"} />
		</div>
	);
}
