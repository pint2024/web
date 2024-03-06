import { myAxios } from "./axios";

export async function listarRequest(route, data = {}) {
	try {
		const url = `/${route}/listar`
		return await myAxios({ url, data, method: "post" });
	} catch (error) {
		throw error;
	}
}
