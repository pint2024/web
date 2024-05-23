import { Texto } from "components/ui";
import User from "assets/images/user-placeholder.png";
import { Comentario } from "./Comentario";
import { CaixaTexto } from "components/form/index";

export function ComentarioSeccao() {
	return (
		<div className="conteudo-detalhe-comentario">
			<Texto size={4}>Comentário (10)</Texto>
			<CaixaTexto placeholder="Adicione um comentário..." />
			<Comentario imagem={User} comentario={"Ola jasdfnjklas ngjklasdng kjlasdnlk"} />
		</div>
	);
}
