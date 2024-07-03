import { ApiRequest } from "api";
import { Botao, CaixaTexto, Notificacao } from "components";
import { useCarregando } from "hooks/useCarregando";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CriarUtilizadorBackoffice() {
	const [formNome, setFormNome] = useState("");
	const [formSobrenome, setFormSobrenome] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formSenha, setFormSenha] = useState("");
	const { startLoading, stopLoading } = useCarregando();
	const navigate = useNavigate();

	const handleLogin = async () => {
		startLoading();
		const data = { nome: formNome, sobrenome: formSobrenome, email: formEmail, senha: formSenha };
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
			<Botao onClick={handleLogin}>Entrar</Botao>
		</>
	);
}
