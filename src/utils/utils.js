import { LOG } from "./log.utils";

export function isEmpty(...variaveis) {
	try {
		let isEmpty = false;
		for (let variavel of variaveis) {
			if (!variavel || variavel === null || isWhitespaces(variavel)) {
				isEmpty = true;
				break;
			}
		}
		return isEmpty;
	} catch (error) {
		LOG.erro(error);
		return true;
	}
}

export function isWhitespaces(variavel) {
	if (typeof variavel === "string")
		return variavel?.trim() === "";
	return false;
}
