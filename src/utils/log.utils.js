export class LOG {
	static log(log, prefix = "LOG: ") {
		console.log("> " + prefix + log);
	}

	static sucesso(log) {
		this.log(log, "SUCESSO: ");
	}

	static erro(log) {
		this.log(log, "ERRO: ");
		//throw new Error(log);
	}

	static debug(log) {
		this.log(log, "DEBUG: ");
	}
};