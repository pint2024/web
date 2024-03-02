import { myAxios } from "src/lib/axios";

export async function readData(route) {
	if (!route) return null;
	try {
		const response = await myAxios({ url: route, method: 'get' });
		const responseData = response.data.data;
		return responseData
	} catch (error) {
		return null;
	}
}