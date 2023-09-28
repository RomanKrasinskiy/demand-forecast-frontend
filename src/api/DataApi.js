class DataApi {
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
// Получение товарных категорий.
  getCategories() {
    return fetch(`${this._url}/categories`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => this._checkServerResponse(res))
  }
// Получение списка магазинов.
  getShops() {
    return fetch(`${this._url}/shops`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => this._checkServerResponse(res))
  }
// Получение статистики - нужно уточнить, как будем реализовывать выбор временного промежутка.
  getSales(storeId, skuId) {
    return fetch(`${this._url}/sales?store=${storeId}&sku=${skuId}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => this._checkServerResponse(res))
  }
// Получение прогноза.
  getForecast(storeId, skuId) {
    return fetch(`${this._url}/forecast?store=${storeId}&sku=${skuId}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => this._checkServerResponse(res))
  }
}

export const dataApi = new DataApi({ url: 'http://localhost:3000' }) // надо уточнить, куда мы будем стучаться на бэк.