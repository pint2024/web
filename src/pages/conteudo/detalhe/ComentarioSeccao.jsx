import User from "assets/images/user-placeholder.png";
import { Comentario, CaixaTexto, Texto } from "components/index";

export function ComentarioSeccao() {
	return (
		<div className="conteudo-detalhe-comentario">
			<Texto size={4}>Comentário (10)</Texto>
			<CaixaTexto placeholder="Adicione um comentário..." />
			<Comentario imagem={User} comentario={"Ola jasdfnjklas ngjklasdng kjlasdnlk"} />
		</div>
	);
}
