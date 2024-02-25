import Texto from "../texto/texto";
import './utilizador-info.css'

export const SmallUser = ({ imagem, nome, data }) => {
	return (
		<div className="cartao-utilizador-container">
			<div className="cartao-utilizador-imagem">
				<img src={imagem} alt="" className="card-user-picture" />
			</div>
			<div className="cartao-utilizador-info">
				<div className="d-flex flex-column align-items-start">
					<Texto>{nome}</Texto>
					<Texto type="secondary">
						{data}
					</Texto>
				</div>
			</div>
		</div>
	);
};
