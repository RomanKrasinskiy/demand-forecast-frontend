import { API_MAIN_CONFIG } from "../utils/constants";

class Auth {
   register({ email, password, userName, usersPosition }) {
    return fetch(API_MAIN_CONFIG.signUp, {
      method: "POST",
      headers: API_MAIN_CONFIG.headers,
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        userName: `${userName}`,
        usersPosition: `${usersPosition}`,
      }),
      credentials: 'include',
    })
    .then((res) => {
      console.log(res)
      this._checkServerResponse(res)
      console.log(res)
    })
    }
  login(email, password, shop) {
    return fetch(API_MAIN_CONFIG.signIn, {
      method: "POST",
      headers: API_MAIN_CONFIG.headers,
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        shop: `${shop}`,

      }),
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
  }
  logout () {
    return fetch(API_MAIN_CONFIG.signOut, {
      method: 'DELETE',
      headers: API_MAIN_CONFIG.headers,
      credentials: 'include',
    })
  }
  getInfoProfile () {
    return fetch(API_MAIN_CONFIG.user, {
      method: "POST",
      headers: API_MAIN_CONFIG.headers,
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
  }
  checkToken() {
    return fetch(API_MAIN_CONFIG.signOut, {
      method: "GET",
      headers: API_MAIN_CONFIG.headers,
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
  }
  _checkServerResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const auth = new Auth();
