import axios from "axios";
import { API_URL, STATUS } from "data/constants";
import { log } from "utils/log.utils";

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
		if (response.data.success)
			// caso o request tenha corrido bem receba os dados
			return response.data.data;
		// caso contrario devolve false
		else return STATUS.ERRO;
	} catch (error) {
		log.erro(error);
		return STATUS.SEM_DATA;
	}
}
