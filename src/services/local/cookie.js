import Cookies from 'js-cookie';
//import { jwtDecode } from 'jwt-decode'; // Import thư viện jwt-decode

// Hàm lưu token vào cookie
export const setToken = ({ token }) => {
  if (token) {
    Cookies.set('authToken', token, { expires: 7, path: '/' });
    //console.log('Token được lưu trong cookie:', token);
    // try {
    //   const decodedToken = jwtDecode(token);
    //   console.log('Decoded token:', decodedToken);
    // } catch (error) {
    //   console.error('Token decoding failed:', error);
    // }
  } else {
    console.error('Token is undefined');
  }
};

// Hàm xóa token khỏi cookie
export const removeToken = () => {
  Cookies.remove('authToken');
};

// Hàm lấy token từ cookie
export const getCookie = (tokenName) => {
  const token = Cookies.get(tokenName);
  //console.log('Token lấy từ cookie:', token); // Log token để kiểm tra giá trị
  return token;
};
