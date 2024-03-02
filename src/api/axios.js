import axios from 'axios';
import { backendUrl } from 'src/data/constants';

const api = axios.create({
	baseURL: backendUrl,
});

export async function myAxios({ url, method = 'get', data = null, headers = {} }) {
	try {
		const response = await api.request({
			url: url,
			method,
			headers,
			data
		});
		return response;
	} catch (error) {
		return error;
	}
}
