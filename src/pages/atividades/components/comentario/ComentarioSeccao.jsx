import { Texto } from "components/elementos";
import { TextBox } from "components/form";
import User from "assets/images/user-placeholder.png";
import { Comentario } from "./Comentario";

export function ComentarioSeccao() {
	return (
		<div className="atividade-detalhe-comentario">
			<Texto size={4}>Comentário (10)</Texto>
			<TextBox placeholder="Adicione um comentário..." />
			<Comentario imagem={User} comentario={"Ola jasdfnjklas ngjklasdng kjlasdnlk"} />
		</div>
	);
}
