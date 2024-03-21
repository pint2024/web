import { Botao, CaixaTexto } from "components/form/__init__";
import { useState } from "react";
import "./iniciarSessao.css";
import AutenticacaoRequest from "api/autenticacaoRequest";

export function IniciarSessao() {
	const [formData, setFormData] = useState({
		login: "",
		senha: "",
	});

	const handleChange = async (e) => {
		await AutenticacaoRequest.entrar(formData.login, formData.senha);
	};

	return (
		<div className="iniciar-sessao-container">
			
				<form>
				<div className="form-container">
					<CaixaTexto
						handleChange={(e) => setFormData({ ...formData, login: e })}
						value={formData.login}
						label="Email ou Tag"
					/>
					<CaixaTexto
						handleChange={(e) => setFormData({ ...formData, senha: e })}
						value={formData.senha}
						label="Senha"
						type="password"
					/>
					</div>
					<div className="form-container mt-1">
					<Botao handleClick={handleChange} >Entrar</Botao>
					</div >
				</form>

				<Botao variant="secundario" route="/criar-conta" >
					Registrar
				</Botao>
				<a href="/forgot-password">Esqueceu-se da senha?</a>
			
		</div>
	);
}
