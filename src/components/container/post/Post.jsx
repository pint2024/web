import { Link } from "react-router-dom";
import { Texto, Imagem, PequenoPerfil } from "components/index";

import "./post.css";

export function Post({ id, titulo, topico, utilizador_imagem, utilizador_nome, date, imagem }) {
	return (
		<article className="Post" id={id}>
			<Link to={`${id}`}>
				<div className="card" style={{ width: "16rem" }}>
					<Imagem src={imagem} className="card-img-top" />
					<div className="card-body">
						<div className="mb-2">
							<PequenoPerfil imagem={utilizador_imagem} nome={utilizador_nome} data={date} />
						</div>
						<Texto size={2} className="line-limit-text">
							{titulo}
						</Texto>
					</div>
				</div>
			</Link>
		</article>
	);
}
