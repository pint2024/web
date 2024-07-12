import axios from "axios";
import { API_URL, STATUS } from "data/constants";

const api = axios.create({
	baseURL: API_URL,
});

/*
export async function myAxios({ url, method = "get", data = null, headers = {} }) {
	try {
		//console.log(url, method, headers, data)
		const response = await api.request({
			url,
			method,
			headers,
			data,
		});
		if (response.data.success) return response.data.data;
		else return STATUS.SEM_DATA;
	} catch (error) {
		console.error("oi", error);
		return STATUS.ERRO;
	}
}*/

export async function myAxios({ url, method = "get", data = null, headers = {} }) {
	try {
		console.log("ola", API_URL, url);

		const response = await api.request({
			url,
			method,
			headers,
			data,
		});
		return response.data.data;
	} catch (error) {
		const status = error.response.status;
		const serverMessage = error.response.data.message || error.message;
		if (status === 422) {
			return { status: status, message: serverMessage, data: error.response.data.data };
		}
		if (error.response) {
			console.error(
				`Erro na resposta do servidor: ${error.response.status} - ${error.response.data.message || error.message}`
			);
			throw new Error(
				`Erro na resposta do servidor: ${error.response.status} - ${error.response.data.message || error.message}`
			);
		} else if (error.request) {
			console.error(`Erro na requisição: Sem resposta do servidor. ${error.message}`);
			throw new Error(`Erro na requisição: Sem resposta do servidor. ${error.message}`);
		} else {
			console.error(`Erro na configuração da requisição: ${error.message}`);
			throw new Error(`Erro na configuração da requisição: ${error.message}`);
		}
	}
}
