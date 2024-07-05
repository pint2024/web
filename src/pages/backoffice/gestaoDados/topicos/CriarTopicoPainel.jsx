import { ApiRequest } from "api";
import { Botao, CaixaTexto, ComboBox, Notificacao } from "components";
import { REGEX } from "data/regex";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { Validador } from "utils/validator";

export function CriarTopicoPainel({ handleCreated }) {
	const [formTopico, setFormTopico] = useState("");
	const [erros, setErros] = useState({});
	const { startLoading, stopLoading } = useCarregando();

	const handleAdicionar = async () => {
		const esquema = { topico: { required: true } };
		const validador = new Validador(esquema);
		const data = { topico: formTopico };

		setErros(validador.validar(data));
		if (!validador.isValido(erros)) return;

		startLoading();
		const response = await ApiRequest.criar("topico", data);
		if (response) {
			Notificacao("Tópico criado!");
			handleCreated();
		}
		stopLoading();
	};

	return (
		<>
			<CaixaTexto
				className="mt-2"
				handleChange={(e) => setFormTopico(e.target.value)}
				value={formTopico}
				isInvalid={erros.topico}
				label="Tópico"
			/>
			<Botao className="mt-4" onClick={handleAdicionar}>
				Adicionar
			</Botao>
		</>
	);
}
