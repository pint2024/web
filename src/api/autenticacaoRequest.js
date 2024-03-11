import axios from "axios";
import { backendUrl, userAuthLocalStorageItem } from "../data/constants";
import { myAxios } from "src/lib/axios";
import { log } from "utils/logUtils";

export class AutenticacaoRequest {
	entrar(login, password) {
		return axios.post(`${backendUrl}/utilizador/login`, { login, password }).then(
			(res) => {
				try {
					if (res.data.token) {
						localStorage.setItem(userAuthLocalStorageItem, JSON.stringify(res.data));
					}
					return res.data;
				} catch (error) {
					return null;
				}
			},
			(reason) => {
				log.erro("Utilizador Inválido");
			}
		);
	}
	terminar_sessao() {
		localStorage.removeItem(userAuthLocalStorageItem);
	}
	getCurrentUser() {
		try {
			const user = this.getToken();
			if (!user && !user.token) return false;
			return new Promise((resolve, reject) => {
				axios
					.get(`${backendUrl}/utilizador/dados`, { headers: { Authorization: `Bearer ${user.token}` } })
					.then((response) => {
						const data = response.data.data;
						resolve({
							id: data.id,
							tag: data.tag,
							email: data.email,
							perfil: data.perfil,
							imagem: data.imagem,
						});
					})
					.catch((error) => {
						reject(error);
					});
			});
		} catch (error) {
			return false;
		}
	}
	confirmarUtilizador(token) {
		try {
			if (!token) return false;
			return new Promise((resolve, reject) => {
				axios
					.get(`${backendUrl}/utilizador/confirmacao`, { headers: { Authorization: `Bearer ${token}` } })
					.then((response) => {
						if (response.data.token) {
							localStorage.setItem(userAuthLocalStorageItem, JSON.stringify(response.data));
						}
						resolve(response.data);
					})
					.catch((error) => {
						reject(null);
					});
			});
		} catch (error) {
			return false;
		}
	}
	refreshAuth() {
		const token = this.getToken().token;
		return axios.post(`${backendUrl}/utilizador/auth/refresh`, { token }).then(
			(res) => {
				try {
					if (res.data.token) {
						localStorage.setItem(userAuthLocalStorageItem, JSON.stringify(res.data));
					}
					return res.data;
				} catch (error) {
					return null;
				}
			},
			(reason) => {
				throw new Error("Utilizador Inválido");
			}
		);
	}
	getToken() {
		return JSON.parse(localStorage.getItem(userAuthLocalStorageItem));
	}
}
