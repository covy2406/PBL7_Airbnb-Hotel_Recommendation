import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
  baseURL: '',
  headers: {
    'ngrok-skip-browser-warning': 'true',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'multipart/form-data',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = Cookies.get('authToken') || '';
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete axiosClient.defaults.headers.common['Authorization'];
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export const setHeaderConfigAxios = (token) => {
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : '';
  } else {
    delete axiosClient.defaults.headers.common['Authorization'];
  }
};
export default axiosClient;
