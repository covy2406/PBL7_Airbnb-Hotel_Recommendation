import axios from 'axios';
const request = axios.create({
  //baseURL: 'https://fb56-116-103-249-57.ngrok-free.app',
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, options = {}) => {
  const response = await request.post(path, options);
  return response.data;
};

export default request;
