import { CONTENT_VH } from "data/constants";
import { Contactos } from "./components/contactos";
import { Mensagens } from "./components/mensagens";

export function Conversa() {
	return (
		<div style={{ display: "flex", height: `${CONTENT_VH}vh` }}>
			<div style={{ flex: "0.3", height: "100%", width: "100%" }}>
				<Contactos id={1} />
			</div>

			<div style={{ flex: "1", height: "100%" }}>
				<Mensagens id={1} />
			</div>
		</div>
	);
}
