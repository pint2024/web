import axios from "axios";
import { API_URL, STATUS } from "data/constants";

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
		if (response.data.success) return response.data.data;
		else return STATUS.ERRO;
	} catch (error) {
		console.error(error);
		return STATUS.SEM_DATA;
	}
}
