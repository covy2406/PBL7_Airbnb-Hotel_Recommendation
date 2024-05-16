import Cookies from 'js-cookie';

export const setToken = ({ token }) => {
  // Thay thế "your_auth_token" bằng mã thông báo của bạn
  const authToken = token;
  Cookies.set('authToken', authToken, { expires: 7, path: '/' });
};

export const removeToken = () => {
  Cookies.remove('authToken');
};

export const getCookie = (name) => {
  return Cookies.get(name);
};
