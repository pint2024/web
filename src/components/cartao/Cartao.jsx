import "./cartao.css";
import User from "assets/images/user-placeholder.png";
import { Texto } from "components/elementos";
import { CartaoInfo } from "components/info";

function Cartao({
	id = 0,
	titulo = "Por definir",
	descricao = "Por definir",
	utilizador = "",
	date = "",
	handleClick = null,
	footer = null,
	utilizadorImage = User,
}) {
	return (
		<div className="main-cartao" onClick={handleClick} id={id}>
			<div className="card active cartao-corpo card-body">
				<div className="d-flex">
					<CartaoInfo imagem={utilizadorImage} titulo={utilizador} subtitulo={date} />
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
		</div>
	);
}

export default Cartao;