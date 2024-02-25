import { Link } from "react-router-dom";
import "./cartao.css";
import User from "../../assets/logo2.png";
import Texto from "../texto/texto";
import { SmallUser } from "../utilizador-info/smallUser";

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
					<SmallUser imagem={utilizadorImage} nome={utilizador} data={date} />
				</div>
				<div className="cartao-corpo-titulo" title={titulo}>
					<Texto size={3} className="card-title-header">
						{titulo}
					</Texto>
				</div>
				<div className="cartao-corpo-descricao" title={descricao}>
					<Texto className="card-body-descricao">{descricao}</Texto>
				</div>
				{footer ? <div className="remove-user-select">{footer}</div> : null}
			</div>
		</div>
	);
}

export default Cartao;
