import { myAxios } from "./axios";

export async function criarRequest(route, data) {
	try {
		const url = `/${route}/criar`
		return await myAxios({ url, data, method: "post" });
	} catch (error) {
		throw error;
	}
}
