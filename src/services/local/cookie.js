import Cookies from 'js-cookie';

export const setToken = ({ token }) => {
  // Thay thế "your_auth_token" bằng mã thông báo của bạn
  const authToken = token;
  //Cookies.set('authToken', token, { expires: 7, path: '/' }); // Lưu token với thời gian hết hạn là 7 ngày

  if (authToken) {
    Cookies.set('authToken', token, { expires: 7, path: '/' });
    console.log('in ra token từ cookie ', token)
  } else {
    console.error('Token is undefined');
  }

};

export const removeToken = () => {
  Cookies.remove('authToken');
};

export const getCookie = (token) => {
  return Cookies.get(token);
};
