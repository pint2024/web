import { useState } from "react";
import "./resetar-passe.css";
import { AutenticacaoRequest } from "api/autenticacaoRequest";
import { CaixaTexto, Botao, Notificacao } from "components/index";
import { useCarregando } from "hooks/useCarregando";
import { Validador } from "utils/validator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ResetarPasse() {
	const [formSenha, setFormSenha] = useState("");
	const [formSenhaConfirmacao, setFormSenhaConfirmacao] = useState("");
	const [token, settoken] = useState("");
	const [erros, setErros] = useState({});
	const { startLoading, stopLoading } = useCarregando();
	const navigate = useNavigate();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		settoken(urlParams.get("token"));
	}, []);

	const handleResetarPassword = async () => {
		const esquema = {
			senha: { required: true },
			confirmacao_senha: { required: true },
		};

		const validador = new Validador(esquema);
		const data = { senha: formSenha, confirmacao_senha: formSenhaConfirmacao };

		const validacao = validador.validar(data);
		setErros(validacao);
		if (!validador.isValido(validacao)) {
			Notificacao("Verifique os campos!", "error");
			return;
		}
		console.log("oi");

		startLoading();
		const res = await AutenticacaoRequest.resetPassword(token, formSenha, formSenhaConfirmacao);
		console.log("oi", res);
		if (!res) {
			Notificacao("Os dados estão inválidos!", "error");
		} else {
			Notificacao("Sessão inciada com sucesso!");
			navigate("/iniciar-sessao");
		}

		stopLoading();
	};

	return (
		<div className="resetar-passe-container">
			<form>
				<div className="form-container">
					<CaixaTexto
						handleChange={(e) => setFormSenha(e.target.value)}
						isInvalid={erros.senha}
						value={formSenha}
						label="Senha"
					/>
					<CaixaTexto
						handleChange={(e) => setFormSenhaConfirmacao(e.target.value)}
						isInvalid={erros.confirmacao_senha}
						value={formSenhaConfirmacao}
						label="Confirme a Senha"
					/>
				</div>
				<div className="d-flex align-items-center gap-2 mt-4">
					<Botao onClick={handleResetarPassword}>Seguinte</Botao>
				</div>
			</form>
		</div>
	);
}
