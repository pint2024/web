import { useEffect, useState } from "react";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import { Link } from "react-router-dom";
import { PequenoPerfil, Icon, Texto, Imagem, Rotulo } from "components/index";
import User from "assets/images/user-placeholder.png";
import Placeholder from "assets/images/placeholder.jpg";
import { ControlosInteracao } from "components/index";

import "./post.css";

export function Post() {
	const [data, setdata] = useState(0);

	useEffect(() => {
		setdata({
			id: "1",
			titulo: PLACEHOLDER_TITLE + PLACEHOLDER_TITLE + PLACEHOLDER_TITLE,
			descricao: PLACEHOLDER_TEXT + PLACEHOLDER_TEXT,
			topico: "Desporto",
			utilizador: "Lucas Sebastião",
			date: "25/04/2024",
			gostos: 10,
			comentarios: 20,
			imagem: Placeholder,
			utilizador_imagem: User,
		});
	}, []);

	return (
		<article className="Post" id={data.id}>
			<Link to={`${data.id}`}>
				<div style={{ padding: "15px" }} className="card-hover post-content card-body main-cartao" id={data.id}>
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<Rotulo info={data.topico} />
						</div>
						<div>
							<Icon iconName="ThreeDotsVertical" className="icon-darker-hover" size={3} />
						</div>
					</div>
					<div className="d-flex mt-2">
						<PequenoPerfil imagem={data.utilizador_imagem} titulo={data.utilizador} subtitulo={data.date} />
					</div>
					<div className="cartao-corpo d-flex justify-content-between align-items-center gap-3">
						<div className="cartao-corpo-text">
							<div className="cartao-corpo-titulo" title={data.titulo}>
								<Texto size={3} className="card-title-header line-limit-tittle">
									{data.titulo}
								</Texto>
							</div>
							<div className="cartao-corpo-descricao">
								<Texto className="card-body-descricao line-limit-text">{data.descricao}</Texto>
							</div>
						</div>
						<div className="cartao-corpo-imagem">
							<Imagem className="cartao-imagem" src={data.imagem} style={{ width: "90px", height: "90px" }} />
						</div>
					</div>
					<ControlosInteracao />
				</div>
			</Link>
		</article>
	);
}
