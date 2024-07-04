import { ApiRequest } from "api";
import { Botao, CaixaTexto, ComboBox, Notificacao } from "components";
import { REGEX } from "data/regex";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Validador } from "utils/validator";

export function CriarUtilizadorBackoffice() {
	const [formNome, setFormNome] = useState("");
	const [formSobrenome, setFormSobrenome] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formSenha, setFormSenha] = useState("");
	const [formCentro, setFormCentro] = useState("");
	const [dataCentro, setdataCentro] = useState(null);
	const [erros, setErros] = useState({
		nome: false,
		sobrenome: false,
		email: false,
		senha: false,
		centro: false,
	});
	const { startLoading, stopLoading } = useCarregando();
	const navigate = useNavigate();

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
			navigate("/backoffice/utilizadores");
		}
		stopLoading();
	};

	return (
		<>
			<CaixaTexto
				handleChange={(e) => setFormNome(e.target.value)}
				value={formNome}
				isInvalid={erros.nome}
				label="Nome"
			/>
			<CaixaTexto
				handleChange={(e) => setFormSobrenome(e.target.value)}
				value={formSobrenome}
				isInvalid={erros.sobrenome}
				label="Sobrenome"
			/>
			<CaixaTexto
				handleChange={(e) => setFormEmail(e.target.value)}
				value={formEmail}
				isInvalid={erros.email}
				label="Email"
			/>
			<CaixaTexto
				handleChange={(e) => setFormSenha(e.target.value)}
				value={formSenha}
				isInvalid={erros.senha}
				label="Senha"
				type="password"
			/>
			<ComboBox
				options={transformarDados()}
				placeholder="Escolha o centro..."
				handleChange={(e) => setFormCentro(e)}
				value={formCentro}
				isInvalid={erros.centro}
				label="Centro"
			/>
			<Botao onClick={handleLogin}>Entrar</Botao>
		</>
	);
}
