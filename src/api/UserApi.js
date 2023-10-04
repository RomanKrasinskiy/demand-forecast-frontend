import { API_MAIN_CONFIG } from "../utils/constants";

class User {
  getInfoProfile () {
    return fetch(API_MAIN_CONFIG.user, {
      headers: API_MAIN_CONFIG.headers,
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
    .then(() => console.log('получен'))
  }
  _checkServerResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const user = new User();
