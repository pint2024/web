import { Botao, TextBox } from "components/form";
import { useState } from "react";
import "./iniciarSessao.css";
import AutenticacaoRequest from "api/autenticacaoRequest";

export function IniciarSessao() {
	const [formLogin, setFormLogin] = useState("");
	const [formSenha, setFormSenha] = useState("");

	const handleChange = async (e) => {
		await AutenticacaoRequest.entrar(formLogin, formSenha);
	};

	return (
		<div className="iniciar-sessao-container">
			
				<form>
				<div className="form-container">
					<TextBox
						handleChange={(e) => setFormLogin(e)}
						value={formLogin}
						label="Email ou Tag"
					/>
					<TextBox
						handleChange={(e) => setFormSenha(e)}
						value={formSenha}
						label="Senha"
						type="password"
					/>
					</div>
					<div className="form-container mt-1">
						<Botao onClick={handleChange} >Entrar</Botao>
					</div >
				</form>

				<Botao variant="secundario" route="/criar-conta" >
					Registrar
				</Botao>
				<a href="/forgot-password">Esqueceu-se da senha?</a>
			
		</div>
	);
}
