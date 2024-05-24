import { Imagem } from "components/index";
import "./comentario.css"

export function Comentario({ imagem, comentario }) {
	return (
		<div className="comentario" style={{ display: "flex" }}>
			<div className="comentario-imagem">
				<Imagem src={imagem} className="card-user-picture" />
			</div>
			<div className="comentario-conteudo col" style={{ marginLeft: "8px" }}>
				<div>{comentario}</div>
			</div>
		</div>
	);
};
