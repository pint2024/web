import { Link } from "react-router-dom";
import { Texto, Imagem, PequenoPerfil, Rotulo } from "components/index";

import "./post.css";
import { COMMON_SIZES } from "data/data";
import { DateUtils } from "utils/date.utils";

export function Post({ id, titulo, topico, utilizador_imagem, utilizador_nome, date, imagem }) {
	return (
		<article className="Post" id={id}>
			<Link to={`${id}`}>
				<div className="card" style={{ width: "16rem" }}>
					<Imagem src={imagem} className="card-img-top" />
					<div className="card-body">
						<div className="mb-2">
							<Rotulo info={topico} />
						</div>
						<div className="mb-2">
							<PequenoPerfil
								id={id}
								imagem={utilizador_imagem}
								nome={utilizador_nome}
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
