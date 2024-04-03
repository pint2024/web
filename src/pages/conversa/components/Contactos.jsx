import { useEffect, useState } from "react";
import { Contacto } from "./Contacto";
import { listarRequest } from "api/listarRequest";
import { ParticipanteDTO } from "dto/participante.dto";
import { isEmpty } from "utils/utils";
import { useLoading } from "hooks/useLoading";

export const Contactos = ({ id }) => {
	const { startLoading, stopLoading } = useLoading();
	const [participantesData, setparticipantesData] = useState([]);
	const [contactos, setContactos] = useState([]);

	useEffect(() => {
		const fetchMensagens = async () => {
			const participantesDTO = [];
			const contactosAux = [];

			const data = await listarRequest("participante", { utilizador: id });
			/*if (data === STATUS.ERRO || data === STATUS.SEM_DATA) {
				setparticipantesData(data);
				return
			};*/
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
		<div style={{ overflowY: "auto" }} className="content-height">
			{contactos.map((contacto) => (
				<Contacto {...contacto} />
			))}
		</div>
	);
};
