import { useContext } from "react";
import { AutenticacaoContext } from "src/context/autenticacaoContext";

export const useAutenticacao = () => {
	return useContext(AutenticacaoContext);
};
