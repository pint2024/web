import { ApiRequest } from "api";
import { Botao, CaixaTexto, Notificacao } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useState } from "react";
import { Validador } from "utils/validator";

export function CriarCentroPainel({ handleCreated }) {
	const [formCentro, setFormCentro] = useState("");
	const [erros, setErros] = useState({});
	const { startLoading, stopLoading } = useCarregando();

	const handleAdicionar = async () => {
		const esquema = { centro: { required: true } };
		const validador = new Validador(esquema);
		const data = { centro: formCentro };

		const validacao = validador.validar(data);
		setErros(validacao);
		if (!validador.isValido(validacao)) return;

		startLoading();
		const response = await ApiRequest.criar("centro", data);
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
				handleChange={(e) => setFormCentro(e.target.value)}
				value={formCentro}
				isInvalid={erros.centro}
				label="Tópico"
			/>
			<Botao className="mt-4" onClick={handleAdicionar}>
				Adicionar
			</Botao>
		</>
	);
}
