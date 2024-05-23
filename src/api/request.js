import { myAxios } from "./axios";

export class Request {
	static async atualizar(route, id, data) {
		try {
			const url = `/${route}/atualizar/${id}`;
			return await myAxios({ url, data, method: "put" });
		} catch (error) {
			throw error;
		}
	}

	static async criar(route, data) {
		try {
			const url = `/${route}/criar`;
			return await myAxios({ url, data, method: "post" });
		} catch (error) {
			throw error;
		}
	}

	static async listar(route, data = {}) {
		try {
			const url = `/${route}/listar`;
			return await myAxios({ url, data, method: "post" });
		} catch (error) {
			throw error;
		}
	}

	static async obter(route, id) {
		try {
			const url = `/${route}/obter/${id}`;
			return await myAxios({ url, method: "get" });
		} catch (error) {
			throw error;
		}
	}

	static async remover(route, id) {
		try {
			const url = `/${route}/remover/${id}`;
			return await myAxios({ url, method: "delete" });
		} catch (error) {
			throw error;
		}
	}
}
