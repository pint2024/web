import React from "react";
import "./iniciar-sessao.css";
import { Botao, Icone, Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";
import { Validador } from "utils/validator";
import { useEffect, useState } from "react";
import "./iniciar-sessao.css";
import { AutenticacaoRequest } from "api/autenticacaoRequest";
import { CaixaTexto, Navegar, Notificacao } from "components/index";
import { BUTTON_VARIANTS } from "data/data";
import { STATUS } from "data/constants";
import { useLoading } from "hooks/useLoading";
import { useNavigate } from "react-router-dom";
import { useInput } from "hooks/useInput";

export function IniciarSessao() {
	const formLogin = useInput();
	const formSenha = useInput();
	const loading = useLoading();
	const navigate = useNavigate();
	const [erros, setErros] = useState({});

	const handleLogin = async () => {
		const esquema = {
			login: { required: true },
			senha: { required: true },
		};

		const validador = new Validador(esquema);
		const data = {
			login: formLogin.value,
			senha: formSenha.value,
		};

		const validacao = validador.validar(data);
		setErros(validacao);
		if (!validador.isValido(validacao)) return;

		loading.start();
		const res = await AutenticacaoRequest.entrar(formLogin.value, formSenha.value);
		if (res.status === 422) {
			Notificacao("É necessário alterar a palavra-passe!", "info");
			navigate(`/atualizar-passe/${res.data.token}`);
		} else if (res === STATUS.ERRO || !res) {
			Notificacao("Os dados estão inválidos!", "error");
		} else {
			Notificacao("Sessão inciada com sucesso!");
			navigate("/");
			window.location.reload();
		}
		loading.stop();
	};
	return (
		<div className="container-fluid">
			<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col-12">
					<div className="cartao bg-dark text-white my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "400px" }}>
						<div className="cartao-body p-5 d-flex flex-column align-items-center mx-auto w-100">
							<Texto type={COMMON_TYPES.INVERSO} size={COMMON_SIZES.FS5} className="mb-2 text-uppercase">
								Iniciar Sessão
							</Texto>
							<Texto className="text-white-50 mb-5">Introduza o login e palavra-passe!</Texto>

							<div className="mb-4 mx-5 w-100">
								<CaixaTexto
									handleSubmit={() => handleLogin()}
									handleChange={(e) => formLogin.onChange(e)}
									value={formLogin.value}
									label="Username ou email"
									isInvalid={erros.login}
									disabled={loading.isLoading}
									isInversed={true}
								/>
							</div>

							<div className="mb-4 mx-5 w-100">
								<CaixaTexto
									handleSubmit={() => handleLogin()}
									handleChange={(e) => formSenha.onChange(e)}
									value={formSenha.value}
									label="Palavra-passe"
									type="password"
									isInvalid={erros.senha}
									disabled={loading.isLoading}
									isInversed={true}
								/>
							</div>

							<p className="small mb-3 pb-lg-2">
								<Navegar to="/esqueceu-passe" className="text-white-50">
									Esqueceu-se da palavra-passe?
								</Navegar>
							</p>

							<Botao onClick={handleLogin}>Entrar</Botao>

							<div className="d-flex flex-row mt-3">
								<a href="#!" className="m-3" style={{ color: "white" }}>
									<Icone iconName="Google" size={COMMON_SIZES.FS4} type={COMMON_TYPES.INVERSO} />
								</a>
								<a href="#!" className="m-3">
									<Icone iconName="Facebook" size={COMMON_SIZES.FS4} type={COMMON_TYPES.INVERSO} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
