import { AUTH_KEY, STATUS } from "data/constants";
import { Log } from "utils/log.utils";
import { myAxios } from "./axios";
import { Utils } from "utils/utils";

export class AutenticacaoRequest {
	static async entrar(login, senha) {
		try {
			console.log(login, senha)
			const response = await myAxios({ url: "/autenticacao/entrar", method: "post", data: { login, senha } });
			if (response.token) {
				localStorage.setItem(AUTH_KEY, JSON.stringify(response.token));
			}
			return response;
		} catch (error) {
			Log.erro(error);
			return STATUS.SEM_DATA;
		}
	}
	static terminar_sessao() {
		localStorage.removeItem(AUTH_KEY);
	}
	static async obterUtilizadorAtual() {
		try {
			const token = this.getToken();
			if (Utils.isEmpty(token)) return false;
			const response = await myAxios({
				url: "/autenticacao/obter",
				method: "get",
				headers: { Authorization: `Bearer ${token}` },
			});
			return response;
		} catch (error) {
			Log.erro(error);
			return STATUS.SEM_DATA;
		}
	}
	/*confirmarUtilizador(token) {
		try {
			if (!token) return false;
			return new Promise((resolve, reject) => {
				axios
					.get(`${AUTH_KEY}/utilizador/confirmacao`, { headers: { Authorization: `Bearer ${token}` } })
					.then((response) => {
						if (response.data.token) {
							localStorage.setItem(AUTH_KEY, JSON.stringify(response.data));
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
		return axios.post(`${AUTH_KEY}/utilizador/auth/refresh`, { token }).then(
			(res) => {
				try {
					if (res.data.token) {
						localStorage.setItem(AUTH_KEY, JSON.stringify(res.data));
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
	}*/
	static getToken() {
		return JSON.parse(localStorage.getItem(AUTH_KEY));
	}
}
