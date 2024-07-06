import { useState } from "react";
import "./esqueceu-passe.css";
import { AutenticacaoRequest } from "api/autenticacaoRequest";
import { CaixaTexto, Botao, Notificacao } from "components/index";
import { useCarregando } from "hooks/useCarregando";
import { REGEX } from "data/regex";
import { Validador } from "utils/validator";

export function EsqueceuPasse() {
	const [formLogin, setFormLogin] = useState("");
	const [erros, setErros] = useState({});
	const { startLoading, stopLoading } = useCarregando();

	const handleLogin = async () => {
		const esquema = {
			email: { required: true, pattern: REGEX.EMAIL },
		};

		const validador = new Validador(esquema);
		const data = { email: formLogin };

		const validacao = validador.validar(data);
		setErros(validacao);
		if (!validador.isValido(validacao)) return;

		startLoading();
		const res = await AutenticacaoRequest.forgotPassword(formLogin);
		if (!res) {
			Notificacao("Os dados estão inválidos!", "error");
		} else {
			Notificacao("Sessão inciada com sucesso!");
		}

		stopLoading();
	};

	return (
		<div className="esqueceu-passe-container">
			<form>
				<div className="form-container">
					<CaixaTexto
						handleChange={(e) => setFormLogin(e.target.value)}
						isInvalid={erros.email}
						value={formLogin}
						label="Email"
					/>
				</div>
				<div className="d-flex align-items-center gap-2 mt-4">
					<Botao onClick={handleLogin}>Seguinte</Botao>
				</div>
			</form>
		</div>
	);
}
