import User from "assets/images/user-default.png";
import { Comentario, CaixaTexto, Texto } from "components/index";
import { COMMON_SIZES } from "data/data";

export function ComentarioSeccao() {
	return (
		<div className="conteudo-detalhe-comentario">
			<Texto size={COMMON_SIZES.FS4}>Comentário (10)</Texto>
			<CaixaTexto placeholder="Adicione um comentário..." />
			<Comentario imagem={User} comentario={"Ola jasdfnjklas ngjklasdng kjlasdnlk"} />
		</div>
	);
}
