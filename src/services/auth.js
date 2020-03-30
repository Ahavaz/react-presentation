export const LOCAL_KEY = "token";

export const getLocalObj = key => JSON.parse(localStorage.getItem(key));

export const getToken = () => getLocalObj(LOCAL_KEY).access_token;

export const setAuthorization = async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
