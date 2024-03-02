import { backendUrl } from "src/data/constants";
import { authHeader } from "../auth-header";
import { myAxios } from "src/lib/axios";

export async function createData(
	route,
	data,
	useBackendAPI = true
) {
	try {
		const apiUrl = useBackendAPI ? backendUrl + route : route;
		const response = await myAxios({ url: apiUrl, method: 'post', data: data, headers: authHeader() });
		if (response.data.success) {
			return response;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
}
