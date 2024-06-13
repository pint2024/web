import { myAxios } from "./axios";

export class Request {
	static async atualizar(endpoint, id, data) {
		try {
			const url = `/${endpoint}/atualizar/${id}`;
			return await myAxios({ url, data, method: "put" });
		} catch (error) {
			throw error;
		}
	}

	static async criar(endpoint, data) {
		try {
			const url = `/${endpoint}/criar`;
			return await myAxios({ url, data, method: "post" });
		} catch (error) {
			throw error;
		}
	}

	static async listar(endpoint, data = {}) {
		try {
			const url = `/${endpoint}/listar`;
			return await myAxios({ url, data, method: "post" });
		} catch (error) {
			throw error;
		}
	}

	static async obter(endpoint, id) {
		try {
			const url = `/${endpoint}/obter/${id}`;
			return await myAxios({ url, method: "get" });
		} catch (error) {
			throw error;
		}
	}

	static async remover(endpoint, id) {
		try {
			const url = `/${endpoint}/remover/${id}`;
			return await myAxios({ url, method: "delete" });
		} catch (error) {
			throw error;
		}
	}
}
