import { Imagem } from "components/index";
import "./comentario.css"

export function Comentario({ utilizador, comentario }) {
	return (
		<div key={comentario.id} className="comentario" style={{ display: "flex" }}>
			<div className="comentario-imagem">
				<Imagem src={utilizador.imagem} className="card-user-picture" />
			</div>
			<div className="comentario-conteudo col" style={{ marginLeft: "8px" }}>
				<div>{comentario.comentario}</div>
			</div>
		</div>
	);
};
