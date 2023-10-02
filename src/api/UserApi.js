class UserApi {
  constructor(options) {
    this._url = options.url;
  }
// Проверка ответа сервера.
  _checkServerResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
// Регистрация пользователя.
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
// Авторизация пользователя. Не раздаём токен, потому что болванка, если с бэком решим, что таки будет токен - добавим.
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
  
export const userApi = new UserApi({ url: 'http://localhost:3000' }) // надо уточнить, куда мы будем стучаться на бэк.
