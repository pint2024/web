import { AutenticacaoRequest } from "api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function TerminarSessao() {
	const navigate = useNavigate();

	useEffect(() => {
		handleTerminarSessao();
	}, []);

	const handleTerminarSessao = async () => {
		await AutenticacaoRequest.terminar_sessao();
		navigate("/iniciar-sessao");
		window.location.reload();
	};

	return <></>;
}
