class UserApi {
  constructor(options) {
    this._url = options.url;
  }

  _checkServerResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(user) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: user.email, 
        password: user.password
      }),
    })
    .then((res) => this._checkServerResponse(res))
  }

  login(user) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: user.email, 
        password: user.password, 
      }),
    })
    .then((res) => this._checkServerResponse(res))
  }
}
  
export const userApi = new UserApi({ url: 'http://localhost:3000' })
