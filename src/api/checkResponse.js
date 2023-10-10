export const checkResponse = async (res) => {
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  return Promise.reject(data);
}
