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
				return true; // se algum for verdadeiro devolve true
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

export function CompareRegex(regex, string) {
	if (typeof regex !== "object" || typeof string !== "string") {
		console.log("A", typeof regex !== "object");
		console.log("G", typeof string !== "string");
		return false;
	}

	if (!(regex instanceof RegExp)) {
		regex = new RegExp(regex);
		console.log("D", !(regex instanceof RegExp));
	}

	if (regex.test(string)) {
		console.log("b");
		return true;
	}
	console.log("c");
	return false;
}
