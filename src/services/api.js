import axios from "axios";

import { setAuthorization } from "./auth";

const { REACT_APP_USERS_API, REACT_APP_CATALOGS_API } = process.env;

export const usersApi = axios.create({
  baseURL: REACT_APP_USERS_API
});

export const catalogsApi = axios.create({
  baseURL: REACT_APP_CATALOGS_API
});

usersApi.interceptors.request.use(async config => setAuthorization(config));
catalogsApi.interceptors.request.use(async config => setAuthorization(config));
