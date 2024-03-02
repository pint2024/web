import { backendUrl } from "src/data/constants";
import { authHeader } from "../auth-header";
import axios from "axios";

export async function updateData(route, data, useBackendAPI = true) {
	const apiUrl = useBackendAPI ? backendUrl + route : route;
	return axios
		.put(apiUrl, data, { headers: authHeader() })
		.then((response) => {
			if (response.status === 200) {
				return true;
			} else {
				return false;
			}
		})
		.catch((error) => {
			return false;
		});
}