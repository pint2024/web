import { AUTH_KEY, STATUS } from "data/constants";
import { Log } from "utils/log.utils";
import { myAxios } from "./axios";
import { Utils } from "utils/utils";

export class AutenticacaoRequest {
	async entrar(login, senha) {
		try {
			const response = await myAxios({ url: "/autenticacao/entrar", method: "post", data: { login, senha } });
			if (response.token) {
				localStorage.setItem(AUTH_KEY, JSON.stringify(response.token));
			}
			return response;
		} catch (error) {
			Log.erro(error);
			return STATUS.SEM_DATA;
		}
		/*return axios.post(`${API_URL}/autenticacao/entrar`, { login, senha }).then(
			(res) => {
				try {
					if (res.data.data.token) {
						console.log(res.data.data.token)
						console.log(AUTH_KEY, JSON.stringify(res.data.data))
						localStorage.setItem(AUTH_KEY, JSON.stringify(res.data.data));
					}
					return res.data.data;
				} catch (error) {
					Log.erro(error);
					return null;
				}
			},
			(reason) => {
				Log.erro("Utilizador inválido.", reason);
			}
		);*/
	}
	terminar_sessao() {
		localStorage.removeItem(AUTH_KEY);
	}
	async obterUtilizadorAtual() {
		try {
			const token = this.getToken();
			console.log("token", token);
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
	getToken() {
		return JSON.parse(localStorage.getItem(AUTH_KEY));
	}
}
