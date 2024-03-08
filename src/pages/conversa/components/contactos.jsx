import { useState } from "react";
import { Contacto } from "./contacto";
import jaumzin from "assets/logo2.png";
import { CONTENT_VH } from "data/constants";

export const Contactos = ({ id }) => {
	const [contactos, setContactos] = useState([
		{ imagem: jaumzin, nome: "Count Dracula", data: "2/28/2015", mensagem: "How have you been? I was..." },
		{ imagem: jaumzin, nome: "Nadia Jolie", data: "2/20/2015", mensagem: "I'll call you back at..." },
		{ imagem: jaumzin, nome: "Nora S. Vans", data: "2/10/2015", mensagem: "Where is your new..." },
		{ imagem: jaumzin, nome: "John K.", data: "1/27/2015", mensagem: "Can I take a look at..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
		{ imagem: jaumzin, nome: "Kennth M.", data: "1/4/2015", mensagem: "I will be waiting for..." },
	]);

	return (
		<div style={{ overflowY: "auto", maxHeight: `${CONTENT_VH}vh`}}>
			{contactos.map((contacto, index) => (
				<Contacto key={index} {...contacto} />
			))}
		</div>
	);
};
