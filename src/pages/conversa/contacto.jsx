import Texto from "components/texto/texto";
import { Link } from "react-router-dom";

export function Contacto({ id = 1, imagem, nome, data, mensagem }) {
	return (
		<Link to={`${id}`}>
			<li className="d-flex align-items-center gap-2 mt-3">
				<img src={imagem} alt="" className="xcard-user-picture" />
				<div>
					<div className="d-flex gap-2 align-items-center">
						<Texto size={3}>{nome}</Texto>
						<Texto size={0}>{data}</Texto>
					</div>
					<Texto>{mensagem}</Texto>
				</div>
			</li>
		</Link>
	);
}
