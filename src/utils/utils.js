import { LOG } from "./log.utils";

export function isEmpty(...variaveis) {
	try {
		for (let variavel of variaveis) {
			if (variavel && variavel.length !== undefined && variavel.length !== 0) {
				return false;
			} else if (!variavel || variavel === null || isWhitespaces(variavel)) {
				return true;
			}
		}
		return true;
	} catch (error) {
		LOG.erro(error);
		return true;
	}
}

export function isWhitespaces(variavel) {
	return variavel?.trim() === "";
}
