import { useEffect, useState } from "react";
import { Contacto } from "./contacto";
import jaumzin from "assets/images/logo2.png";
import { CONTENT_VH } from "data/constants";
import { listarRequest } from "api/listarRequest";
import { ParticipanteDTO } from "dto/participante.dto";
import { isEmpty } from "utils/utils";
import { useLoading } from "modules/hooks/useLoading";

export const Contactos = ({ id }) => {
	const { startLoading, stopLoading } = useLoading();
	const [participantesData, setparticipantesData] = useState([]);
	const [contactos, setContactos] = useState([]);

	useEffect(() => {
		const fetchMensagens = async () => {
			const participantesDTO = [];
			const contactosAux = [];

			const data = await listarRequest("participante", { utilizador: id });


			console.log("opa", data)

			for (const participante of data) {
				const aux = new ParticipanteDTO(participante);
				contactosAux.push(aux.getContactosFormatted());
				participantesDTO.push(aux);
			}

			setContactos(contactosAux);
			setparticipantesData(participantesDTO);
			stopLoading();
		};

		fetchMensagens();
	}, []);

	if (isEmpty(participantesData)) {
		startLoading();
		return;
	}

	return (
		<div style={{ overflowY: "auto", maxHeight: `${CONTENT_VH}vh` }}>
			{contactos.map((contacto, index) => (
				<Contacto key={index} {...contacto} />
			))}
		</div>
	);
};
