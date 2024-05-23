import "./cartao.css";
import User from "assets/images/user-placeholder.png";
import { Texto, PequenoPerfil } from "components/index";
import { Link } from "react-router-dom";

export function Cartao({
	id = 0,
	titulo = "Por definir",
	descricao = "Por definir",
	utilizador = "João Santos",
	date = "11/05/2024",
	handleClick = null,
	footer = "teste",
	imagem = User,
	route = "",
}) {
	return (
		<Link className="main-cartao" to={route} onClick={handleClick} id={id}>
			<div className="card active cartao-corpo card-body">
				<div className="d-flex">
					<PequenoPerfil imagem={imagem} titulo={utilizador} subtitulo={date} />
				</div>
				<div className="cartao-corpo-titulo" title={titulo}>
					<Texto size={3} className="card-title-header">
						{titulo}
					</Texto>
				</div>
				<div className="cartao-corpo-descricao">
					<Texto className="card-body-descricao">{descricao}</Texto>
				</div>
				{footer ? <div className="remove-user-select">{footer}</div> : null}
			</div>
		</Link>
	);
}
