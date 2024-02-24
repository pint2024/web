import { Link } from "react-router-dom";
import "./styles.css";
import User from "../../assets/logo2.png";
import Texto from "../texto/texto";

function Cartao({ titulo = 'Por definir', descricao = 'Por definir', utilizador = "", date = "", handleClick = null, footer = null }) {
	return (
		<div className="main-cartao">
			<div className="card active cartao-corpo card-body">
				<div onClick={handleClick}>
					<div className="container">
						<div className="row">
							<div className="cartao-utilizador-container">
								<div className="cartao-utilizador-imagem">
									<img src={User} alt="" className="card-user-picture" />
								</div>
								<div className="cartao-utilizador-info">
									<div className="d-flex flex-column align-items-start">
										<Texto size={2}>{utilizador}</Texto>
										<Texto size={1} type="secondary">
											{date}
										</Texto>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="cartao-corpo-titulo" title={titulo}>
						<Texto size={3} className="card-title-header">
							{titulo}
						</Texto>
					</div>
					<div className="cartao-corpo-descricao" title={descricao}>
						<Texto className="card-body-descricao">{descricao}</Texto>
					</div>
				</div>
				{footer ? <div className="remove-user-select">{footer}</div> : null}
			</div>
		</div>
	);
}

export default Cartao;
