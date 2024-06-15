import { Link } from "react-router-dom";
import { Texto, Imagem, PequenoPerfil, Rotulo } from "components/index";

import "./post.css";
import { COMMON_SIZES } from "data/data";
import { DateUtils } from "utils/date.utils";

export function Post({ id, titulo, topico, utilizador, date, imagem }) {
	return (
		<article className="Post" id={id}>
			<Link to={`${id}`}>
				<div className="card" style={{ width: "16rem" }}>
					<Imagem src={imagem} className="card-img-top" style={{ height: "10rem", objectFit: "cover"  }} />
					<div className="card-body">
						<div className="mb-2">
							<Rotulo info={topico} />
						</div>
						<div className="mb-2">
							<PequenoPerfil
								id={utilizador.id}
								imagem={utilizador.imagem}
								nome={utilizador.nome + " " + utilizador.sobrenome}
								data={DateUtils.DataRelativa(date)}
							/>
						</div>
						<Texto size={COMMON_SIZES.FS2} className="line-limit-text">
							{titulo}
						</Texto>
					</div>
				</div>
			</Link>
		</article>
	);
}
