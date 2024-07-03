import { useState } from "react";
import "./iniciar-sessao.css";
import { AutenticacaoRequest } from "api/autenticacaoRequest";
import { CaixaTexto, Botao, Navegar } from "components/index";
import { BUTTON_VARIANTS } from "data/data";

export function IniciarSessao() {
	const [formLogin, setFormLogin] = useState("");
	const [formSenha, setFormSenha] = useState("");

	const handleLogin = async () => {
		await AutenticacaoRequest.entrar(formLogin, formSenha);
	};

	return (
		<div className="iniciar-sessao-container">
			<form>
				<div className="form-container">
					<CaixaTexto handleChange={(e) => setFormLogin(e)} value={formLogin} label="Endereço email ou tag" />
					<CaixaTexto handleChange={(e) => setFormSenha(e)} value={formSenha} label="Password" type="password" />
				</div>
				<div className="d-flex align-items-center gap-2 mt-4">
					<Botao onClick={handleLogin}>Entrar</Botao>
					<Botao variant={BUTTON_VARIANTS.SECUNDARIO} route="/criar-conta">
						Registrar
					</Botao>
				</div>
			</form>

			<Navegar to="/forgot-password">Esqueceu-se da senha?</Navegar>
		</div>
	);
}
