import axios from 'axios';
const requestRecommend = axios.create({
  //baseURL: 'https://fb56-116-103-249-57.ngrok-free.app',
  baseURL: 'https://pbl7-be-flask.onrender.com'
});

export const get = async (path, options = {}) => {
  const response = await requestRecommend.get(path, options);
  return response.data;
};

export const post = async (path, options = {}) => {
  const response = await requestRecommend.post(path, options);
  return response.data;
};

export default requestRecommend;
