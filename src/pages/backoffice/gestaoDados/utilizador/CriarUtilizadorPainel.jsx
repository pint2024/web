import { ApiRequest } from "api";
import { Botao, CaixaTexto, ComboBox, Notificacao } from "components";
import { REGEX } from "data/regex";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { Validador } from "utils/validator";

export function CriarUtilizadorPainel({ handleCreated }) {
	const [formNome, setFormNome] = useState("");
	const [formSobrenome, setFormSobrenome] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formSenha, setFormSenha] = useState("");
	const [formCentro, setFormCentro] = useState("");
	const [dataCentro, setdataCentro] = useState(null);
	const [erros, setErros] = useState({});
	const { startLoading, stopLoading } = useCarregando();

	useEffect(() => {
		fetchCentro();
	}, []);

	const fetchCentro = async () => {
		startLoading();
		const response = await ApiRequest.listar("centro/simples");
		setdataCentro(response);
		stopLoading();
	};

	if (!dataCentro) return;

	const transformarDados = () => {
		return dataCentro?.map((item) => ({
			value: item.id,
			label: item.centro,
		}));
	};

	const handleLogin = async () => {
		const esquema = {
			nome: { required: true, type: "string" },
			sobrenome: { required: true, type: "string" },
			email: { required: true, pattern: REGEX.EMAIL },
			senha: { required: true },
			centro: { required: true },
		};

		const validador = new Validador(esquema);
		const data = { nome: formNome, sobrenome: formSobrenome, email: formEmail, senha: formSenha, centro: formCentro };

		setErros(validador.validar(data));
		if (!validador.isValido(erros)) return;

		startLoading();
		const response = await ApiRequest.criar("utilizador", data);
		if (response) {
			Notificacao("Utilizador criado!");
			handleCreated();
		}
		stopLoading();
	};

	return (
		<>
			<CaixaTexto
				className="mt-2"
				handleChange={(e) => setFormNome(e.target.value)}
				value={formNome}
				isInvalid={erros.nome}
				label="Nome"
			/>
			<CaixaTexto
				className="mt-2"
				handleChange={(e) => setFormSobrenome(e.target.value)}
				value={formSobrenome}
				isInvalid={erros.sobrenome}
				label="Sobrenome"
			/>
			<CaixaTexto
				className="mt-2"
				handleChange={(e) => setFormEmail(e.target.value)}
				value={formEmail}
				isInvalid={erros.email}
				label="Email"
			/>
			<CaixaTexto
				className="mt-2"
				handleChange={(e) => setFormSenha(e.target.value)}
				value={formSenha}
				isInvalid={erros.senha}
				label="Senha"
				type="password"
			/>
			<ComboBox
				className="mt-2"
				options={transformarDados()}
				placeholder="Escolha o centro..."
				handleChange={(e) => setFormCentro(e)}
				value={formCentro}
				isInvalid={erros.centro}
				label="Centro"
			/>
			<Botao className="mt-4" onClick={handleLogin}>Adicionar</Botao>
		</>
	);
}
