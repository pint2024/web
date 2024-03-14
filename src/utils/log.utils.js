export class log {
	static log(log, prefix = "LOG: ") {
		console.log("> " + prefix + log);
	}

	static sucesso(log) {
		log(log, "SUCESSO: ");
	}

	static erro(log) {
		log(log, "ERRO: ");
		throw new Error(log);
	}

	static debug(log) {
		log(log, "DEBUG: ");
	}
};