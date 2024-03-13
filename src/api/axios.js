import axios from "axios";
import { API_URL } from "data/constants";

const api = axios.create({
	baseURL: API_URL,
});

export async function myAxios({ url, method = "get", data = null, headers = {} }) {
	try {
		const response = await api.request({
			url,
			method,
			headers,
			data,
		});
		console.log(response)
		if (response.data.success)
			// caso o request tenha corrido bem receba os dados
			return response.data.data;
		// caso contrario devolve false
		else return response.data.success;
	} catch (error) {
		return error;
	}
}
