export const REGEX_NAME = /^[a-zA-ZА-Яа-яЁё'\- ]{2,}$/
export const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/


const MAIN_URL = 'http://localhost:8000';
const API = '/api';
const AUTH = '/auth/token'

export const API_MAIN_CONFIG = {
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",

    }, 
    signUp: `${MAIN_URL}/users`, 
    signIn: `${MAIN_URL}${AUTH}/login`, 
    signOut: `${MAIN_URL}${AUTH}/logout`, 
    categories: `${MAIN_URL}${API}/categories`,
    shops: `${MAIN_URL}${API}/shops`,
    sales: `${MAIN_URL}${API}/sales`,
    forecast: `${MAIN_URL}${API}/forecast`,
  }

