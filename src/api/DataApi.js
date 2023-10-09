import { API_MAIN_CONFIG } from '../utils/constants';
import { checkResponse } from '../api/checkResponse';

export const getCategories = async () => {
  const res = await fetch(API_MAIN_CONFIG.categories, {
    method: 'GET',
    headers: API_MAIN_CONFIG.headers,
  })
  return checkResponse(res);
}

export const getShops = async () => {
  const res = await fetch(API_MAIN_CONFIG.shops, {
    method: 'GET',
    headers: API_MAIN_CONFIG.headers,
  })
  return checkResponse(res);
}

export const getSales = async ({ store, product_name }) => {
  const res = await fetch(`${API_MAIN_CONFIG.sales}?store=${store}&product_name=${product_name}`, {
    method: 'GET',
    headers: API_MAIN_CONFIG.headers,
  })
  return checkResponse(res);
}

export const getForecast = async ({ store, product, forecast_date }) => {
  const res = await fetch(`${API_MAIN_CONFIG.forecast}?store=${store}&product=${product}&forecast_date=${forecast_date}`, {
    method: 'GET',
    headers: API_MAIN_CONFIG.headers,
  });
  return checkResponse(res);
};