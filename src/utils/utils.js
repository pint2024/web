import { STATUS } from "data/constants";
import { Log } from "./log.utils";
import UtilizadorDefault from "assets/images/user-default.png";

export class Utils {
	static isEmpty(...variaveis) {
		try {
			for (let variavel of variaveis) {
				if (
					variavel === STATUS.ERRO ||
					variavel === STATUS.SEM_DATA ||
					!variavel ||
					variavel === null ||
					this.isWhitespaces(variavel)
				) {
					return true;
				}
			}
			return false;
		} catch (error) {
			Log.erro(error);
			return true;
		}
	}

	static waitData(setLoading, ...dataVars) {
		if (this.isEmpty(...dataVars)) {
			setLoading(true);
			return true;
		} else {
			setLoading(false);
			return false;
		}
	}

	static isWhitespaces(variavel) {
		try {
			return variavel?.trim() === "";
		} catch {
			return false;
		}
	}

	static CompareRegex(regex, string) {
		if (typeof regex !== "object" || typeof string !== "string") return false;
		if (!(regex instanceof RegExp)) regex = new RegExp(regex);
		if (regex.test(string)) return true;
		return false;
	}

	static SetImagemUtilizador(imagem) {
		if (imagem) return imagem;
		return UtilizadorDefault;
	}
}
