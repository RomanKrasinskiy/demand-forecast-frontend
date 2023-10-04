import { API_MAIN_CONFIG } from "../utils/constants";

class DataApi {
// Проверка ответа сервера.
  _checkServerResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
// Получение товарных категорий.
  getCategories() {
    return fetch(API_MAIN_CONFIG.categories, {
      method: 'GET',
      headers: API_MAIN_CONFIG.headers})
    .then((res) => this._checkServerResponse(res))
  }
// Получение списка магазинов.
  getShops() {
    return fetch(API_MAIN_CONFIG.shops, {
      method: 'GET',
      headers: API_MAIN_CONFIG.headers})
    .then((res) => this._checkServerResponse(res))
  }
// Получение статистики - нужно уточнить, как будем реализовывать выбор временного промежутка.
  getSales(storeId, skuId) {
    return fetch(`${API_MAIN_CONFIG.sales}?store=${storeId}&sku=${skuId}`, {
      method: 'GET',
      headers: API_MAIN_CONFIG.headers})
    .then((res) => this._checkServerResponse(res))
  }
// Получение прогноза.
  getForecast(storeId, skuId) {
    return fetch(`${API_MAIN_CONFIG.forecast}?store=${storeId}&sku=${skuId}`, {
      method: 'GET',
      headers: API_MAIN_CONFIG.headers})
    .then((res) => this._checkServerResponse(res))
  }
}

export const dataApi = new DataApi() // надо уточнить, куда мы будем стучаться на бэк.