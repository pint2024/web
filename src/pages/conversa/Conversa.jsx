import { CONTENT_VH } from "data/constants";
import { Contactos } from "./components/Contactos";
import { Mensagens } from "./components/Mensagens";
import { useState } from "react";
import { isEmpty } from "utils/utils";
import { getSizes } from "data/cssVars";

export function Conversa() {
	const [contactosId, setContactosId] = useState(1);
	const [mensagenId, setMensagenId] = useState(2);

	return (
		<div style={{ display: "flex" }} className="content-height">
			<div style={{ flex: "0.3", height: "100%", width: "100%" }}>
				<Contactos id={contactosId} />
			</div>

			<div style={{ flex: "1", height: "100%" }}>
				<Mensagens id={mensagenId} />
			</div>
		</div>
	);
}
