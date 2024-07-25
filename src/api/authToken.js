import { AUTH_KEY } from "data/constants";

export class AuthToken {
  static setToken(token) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(token));
  }

  static getToken() {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
  }

  static removeToken() {
    localStorage.removeItem(AUTH_KEY);
  }

  static existsToken() {
    if (this.getToken()) return true;
    return false;
  }
}
