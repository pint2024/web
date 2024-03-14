import { CONTENT_VH } from "data/constants";
import { Contactos } from "./components/contactos";
import { Mensagens } from "./components/mensagens";
import { useState } from "react";
import { isEmpty } from "utils/utils";

export function Conversa() {
	const [contactosId, setContactosId] = useState(1);
	const [mensagenId, setMensagenId] = useState(2);

	return (
		<div style={{ display: "flex", height: `${CONTENT_VH}vh` }}>
			<div style={{ flex: "0.3", height: "100%", width: "100%" }}>
				<Contactos id={contactosId} />
			</div>

			<div style={{ flex: "1", height: "100%" }}>
				<Mensagens id={mensagenId} />
			</div>
		</div>
	);
}
