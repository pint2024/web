import { useEffect, useState } from "react";
import "./iniciar-sessao.css";
import { AutenticacaoRequest } from "api/autenticacaoRequest";
import { CaixaTexto, Botao, Navegar, Notificacao } from "components/index";
import { BUTTON_VARIANTS } from "data/data";
import { STATUS } from "data/constants";
import { useCarregando } from "hooks/useCarregando";
import { useNavigate } from "react-router-dom";

export function IniciarSessao() {
	const [formLogin, setFormLogin] = useState("");
	const [formSenha, setFormSenha] = useState("");
	const { startLoading, stopLoading } = useCarregando();
	const navigate = useNavigate();

	useEffect(() => {
		if (AutenticacaoRequest.existsToken()) {
			navigate("/");
			Notificacao("Você já tem a sessão iniciada!", "info");
		}
	}, []);

	const handleLogin = async () => {
		startLoading();
		const res = await AutenticacaoRequest.entrar(formLogin, formSenha);
		console.log(res);
		if (res.status === 422) {
			Notificacao("É necessário alterar a palavra-passe!", "info");
			navigate(`/atualizar-passe/${res.data.token}`);
		} else if (res === STATUS.ERRO || !res) {
			Notificacao("Os dados estão inválidos!", "error");
		} else {
			Notificacao("Sessão inciada com sucesso!");
			navigate("/");
		}
		stopLoading();
	};

	return (
		<div className="iniciar-sessao-container">
			<form>
				<div className="form-container">
					<CaixaTexto
						handleChange={(e) => setFormLogin(e.target.value)}
						value={formLogin}
						label="Endereço email ou tag"
					/>
					<CaixaTexto
						handleChange={(e) => setFormSenha(e.target.value)}
						value={formSenha}
						label="Palavra-passe"
						type="password"
					/>
				</div>
				<div className="d-flex align-items-center gap-2 mt-4">
					<Botao onClick={handleLogin}>Entrar</Botao>
					<Botao variant={BUTTON_VARIANTS.SECUNDARIO} route="/criar-conta">
						Registrar
					</Botao>
				</div>
			</form>

			<Navegar to="/esqueceu-passe">Esqueceu-se da senha?</Navegar>
		</div>
	);
}
