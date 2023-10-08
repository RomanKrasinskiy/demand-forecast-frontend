import { API_MAIN_CONFIG } from "../utils/constants";
import { checkResponse } from '../api/checkResponse';

export const signUp = async ({ email, password, userName, usersPosition }) => {
  const res = await fetch(API_MAIN_CONFIG.signUp, {
    method: "POST",
    headers: API_MAIN_CONFIG.headers,
    // credentials: 'include',
    
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      username: `${userName}`,
      position: `${usersPosition}`,
    }),
  });
  return checkResponse(res);
};

export const signIn = async ({ email, password}) => {
  const res = await fetch(API_MAIN_CONFIG.signIn, {
    method: 'POST',
    headers: API_MAIN_CONFIG.headers,
    // credentials: 'include',
    body: JSON.stringify({
      email: `${email}`, // в этом поле ключ не username а email. Такое присвоение удобно для бека
      password: `${password}`,
    }),
  });
  return checkResponse(res);
};

export const signOut = async () => {
  const res = await fetch(API_MAIN_CONFIG.signOut, {
    method: 'DELETE',
      headers: API_MAIN_CONFIG.headers,
      // credentials: 'include',
  });
  return checkResponse(res);
};

export const checkToken = async () => {
  const res = await fetch(API_MAIN_CONFIG.user, {
    method: "GET",
      headers: API_MAIN_CONFIG.headers,
      // credentials: 'include',
  });
  return checkResponse(res);
};

// export const getInfoProfile = async () => {
//   const res = await fetch(API_MAIN_CONFIG.user, {
//     method: "POST",
//       headers: API_MAIN_CONFIG.headers,
//       credentials: 'include',
//   });
//   return chechResponse(res);
// };
