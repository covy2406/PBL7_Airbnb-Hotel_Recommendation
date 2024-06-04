export const setToken = ({ token }) => {
  // Thay thế "your_auth_token" bằng mã thông báo của bạn
  const authToken = token;
  // // Lưu mã thông báo trong localStorage
  // localStorage.setItem('authToken', authToken);
  if (authToken) {
    localStorage.setItem('token', authToken);
  } else {
    console.error('Token is undefined');
  }
};
