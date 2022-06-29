import axios from 'axios';

import { API_DEFAULT_OPTIONS } from './api.constants';
 import { getAPIConfig } from './api.utils';
// import { errorLogger, requestLogger, responseLogger, errorHandler, getAPIConfig } from './api.utils';
export const httpClient = axios.create(API_DEFAULT_OPTIONS);

// httpClient.interceptors.response.use(null, errorHandler);

// if (process.env.NODE_ENV === 'development') {
//   httpClient.interceptors.request.use(requestLogger);
//   httpClient.interceptors.response.use(responseLogger, errorLogger);
// }

// const accessToken = lscache.get('accessToken');

// if (accessToken) {
//   httpClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// }

export const makeRequest = (endpoint, { method = 'get', params = {} } = {}, config) =>
  httpClient[method](endpoint, params, config);

const get = async endpoint => {
  const res = await axios.get(`${API_DEFAULT_OPTIONS.baseURL}${endpoint}`, getAPIConfig());
  return res.data;
};

// const post = async (endpoint, payload) => {
//   const res = await axios.post(`${API_DEFAULT_OPTIONS.baseURL}${endpoint}`, payload, getAPIConfig());
//   return res.data;
// };

// const put = async (endpoint, payload) => {
//   const res = await axios.put(`${API_DEFAULT_OPTIONS.baseURL}${endpoint}`, payload, getAPIConfig());
//   return res.data;
// };

// const del = async (endpoint, payload) => {
//   const res = await axios.delete(`${API_DEFAULT_OPTIONS.baseURL}${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${lscache.get('accessToken')}`,
//       'Content-Type': 'application/json',
//     },
//     data: payload,
//   });

//   return res.data;
// };

// export const API = { get, post, put, del };
export const API = { get };