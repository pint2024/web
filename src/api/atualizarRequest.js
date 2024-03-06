import { myAxios } from "./axios";

export async function atualizarRequest(route, id, data) {
	try {
		const url = `/${route}/atualizar/${id}`
		return await myAxios({ url, data, method: "put" });
	} catch (error) {
		throw error;
	}
}
