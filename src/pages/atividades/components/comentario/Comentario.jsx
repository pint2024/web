import { Imagem } from "components/elementos/imagem/Imagem";
import "./comentario.css"

export const Comentario = ({ imagem, comentario }) => {
	return (
		<div className="comentario" style={{ display: "flex" }}>
			<div className="comentario-imagem">
				<Imagem src={imagem} alt="" className="card-user-picture" />
			</div>
			<div className="comentario-conteudo col" style={{ marginLeft: "8px" }}>
				<div>{comentario}</div>
			</div>
		</div>
	);
};
