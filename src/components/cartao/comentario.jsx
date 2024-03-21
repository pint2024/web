import { PLACEHOLDER_TEXT } from "data/constants";
import User from "assets/images/logo2.png";
import "./comentario.css"

export const Comentario = ({ imagem, comentario }) => {
	return (
		<div className="comentario" style={{ display: "flex" }}>
			<div className="comentario-imagem">
				<img src={User} alt="" className="card-user-picture" />
			</div>
			<div className="comentario-conteudo col" style={{ marginLeft: "8px" }}>
				<div>{comentario}</div>
			</div>
		</div>
	);
};
