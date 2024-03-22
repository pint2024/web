import { STATUS } from "data/constants";
import { LOG } from "./log.utils";

export function isEmpty(...variaveis) {
	try {
		for (let variavel of variaveis) {
			if (
				variavel === STATUS.ERRO ||
				variavel === STATUS.SEM_DATA ||
				!variavel ||
				variavel === null ||
				isWhitespaces(variavel)
			) {
				return true; // se algum for verdadeiro devolve que é vazio
			}
		}
		return false;
	} catch (error) {
		LOG.erro(error);
		return true;
	}
}

export function waitData(setLoading, ...dataVars) {
	if (isEmpty(...dataVars)) {
		setLoading(true);
		return true;
	} else {
		setLoading(false);
		return false;
	}
}

export function isWhitespaces(variavel) {
	try {
		return variavel?.trim() === "";
	} catch {
		return false;
	}
}
