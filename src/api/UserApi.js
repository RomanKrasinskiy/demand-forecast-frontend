import { API_MAIN_CONFIG } from "../utils/constants";

class Auth {
   register(email, password, userName, usersPosition) {
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
    .then(this._chechResponse);
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
    .then(this._chechResponse);
  }
  logout () {
    return fetch(API_MAIN_CONFIG.signOut, {
      method: 'DELETE',
      headers: API_MAIN_CONFIG.headers,
      credentials: 'include',
    })
  }
  checkToken() {
    return fetch(API_MAIN_CONFIG.signOut, {
      method: "GET",
      headers: API_MAIN_CONFIG.headers,
      credentials: 'include',
    })
    .then(this._chechResponse);
  }
  _chechResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const auth = new Auth();
