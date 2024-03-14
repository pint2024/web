import { myAxios } from "./axios";

export async function obterRequest(route, id) {
	try {
		const url = `/${route}/obter/${id}`
		return await myAxios({ url, method: "get" });
	} catch (error) {
		throw error;
	}
}
