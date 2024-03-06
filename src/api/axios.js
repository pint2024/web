import axios from 'axios';
import { API_URL } from 'data/constants';

const api = axios.create({
	baseURL: API_URL,
});

export async function myAxios({ url, method = 'get', data = null, headers = {} }) {
	try {
		const response = await api.request({
			url,
			method,
			headers,
			data
		});
		if (response.data.success) // caso o request tenha corrido bem receba os dados
			return response.data.data;
		else // caso contrario devolve false
			return response.data.success;
	} catch (error) {
		return error;
	}
}
