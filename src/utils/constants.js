export const REGEX_NAME = /^[a-zA-ZА-Яа-яЁё'\- ]{2,}$/
export const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/


const MAIN_URL = 'http://localhost:3000/api';

export const API_MAIN_CONFIG = {
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    }, 
    signUp: `${MAIN_URL}/signup`, //
    signIn: `${MAIN_URL}/signin`, // надо бы объединить в один но с разными запросами
    signOut: `${MAIN_URL}/signout`, //
    user: `${MAIN_URL}/users`,
    categories: `${MAIN_URL}/categories`,
    shops: `${MAIN_URL}/shops`,
    sales: `${MAIN_URL}/sales`,
    forecast: `${MAIN_URL}/forecast`,
  }

