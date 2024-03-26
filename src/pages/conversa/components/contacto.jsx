import "../conversa.css";
import { ContactoInfo } from "components/info/index";

export function Contacto({ id, imagem, nome, data, mensagem }) {
	return (
		<div className="card-contacto card-hover remove-user-select" style={{ width: "96%" }}>
			<ContactoInfo id={`contacto-${id}`} imagem={imagem} titulo={nome} subtitulo={mensagem} data={data} />
		</div>
	);
}
