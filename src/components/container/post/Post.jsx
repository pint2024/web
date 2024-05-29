import { Link } from "react-router-dom";
import { Texto, Imagem } from "components/index";

import "./post.css";

export function Post({ id, titulo, descricao, topico, utilizador, date, imagem }) {

	return (
		<article className="Post" id={id} >
			<Link to={`${id}`}>
				<div className="card" style={{ width: "18rem" }}>
					<Imagem src={imagem} className="card-img-top" />
					<div className="card-body">
						<Texto size={2} className="line-limit-tittle">
							{titulo}
						</Texto>
						<Texto className="line-limit-text">{descricao}</Texto>
					</div>
				</div>
			</Link>
		</article>
	);
}
