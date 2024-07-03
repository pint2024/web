import { ApiRequest } from "api";
import { Botao, CaixaTexto, ComboBox, Notificacao } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CriarUtilizadorBackoffice() {
	const [formNome, setFormNome] = useState("");
	const [formSobrenome, setFormSobrenome] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formSenha, setFormSenha] = useState("");
	const [formCentro, setFormCentro] = useState("");
	const [dataCentro, setdataCentro] = useState(null);
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
		startLoading();
		const data = { nome: formNome, sobrenome: formSobrenome, email: formEmail, senha: formSenha, centro: formCentro };
		console.log(data)
		const response = await ApiRequest.criar("utilizador", data);
		if (response) {
			Notificacao("Utilizador criado!");
			navigate("/backoffice/utilizadores");
		}
		stopLoading();
	};

	return (
		<>
			<CaixaTexto handleChange={(e) => setFormNome(e)} value={formNome} label="Nome" />
			<CaixaTexto handleChange={(e) => setFormSobrenome(e)} value={formSobrenome} label="Sobrenome" />
			<CaixaTexto handleChange={(e) => setFormEmail(e)} value={formEmail} label="Email" />
			<CaixaTexto handleChange={(e) => setFormSenha(e)} value={formSenha} label="Senha" type="password" />
			<ComboBox options={transformarDados()} placeholder="Escolha o centro..." handleChange={(e) => setFormCentro(e)} value={formCentro} label="Centro" />
			<Botao onClick={handleLogin}>Entrar</Botao>
		</>
	);
}
