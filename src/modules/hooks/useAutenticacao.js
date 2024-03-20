import { AutenticacaoContext } from "modules/contexts/autenticacao.context";
import { useContext } from "react";

export const useAutenticacao = () => {
	return useContext(AutenticacaoContext);
};
