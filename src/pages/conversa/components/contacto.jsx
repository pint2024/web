import Texto from "components/texto/texto";
import "../conversa.css";
import { ContactoInfo } from "components/utilizador-info/contactoInfo";

export function Contacto({ id = 1, imagem, nome, data, mensagem }) {
	return (
		<div className="remove-user-select">
			<div className="card-contacto card-hover">
				<ContactoInfo id={`contacto-${id}`} imagem={imagem} titulo={nome} subtitulo={mensagem} data={data} />
			</div>
		</div>
	);
}
