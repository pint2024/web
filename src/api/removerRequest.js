import { myAxios } from "./axios";

export async function removerRequest(route, id) {
	try {
		const url = `/${route}/remover/${id}`
		return await myAxios({ url, method: "delete" });
	} catch (error) {
		throw error;
	}
}
