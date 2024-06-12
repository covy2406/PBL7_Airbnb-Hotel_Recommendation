import { createContext, useEffect, useState } from 'react';
import { getCookie } from '../../services/local/cookie';
import { jwtDecode } from 'jwt-decode'; // Import thư viện jwt-decode

export const StorageContext = createContext();

function StorageContextUser({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});

  const states = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser, // Đã đăng nhập hay là chưa
    userData: userData, // dữ liệu người dùng sau khi đăng nhập
    setUserData: setUserData,
  };

  useEffect(() => {
    const authToken = getCookie('authToken'); // Đảm bảo tên đúng là 'authToken'
    //console.log('authToken lấy từ cookie:', authToken); // Log để kiểm tra giá trị

    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        setCurrentUser(true);
        setUserData(decodedToken);
        //console.log('Decoded token:', decodedToken); // Log decoded token để kiểm tra giá trị
      } catch (error) {
        console.error('Token decoding failed:', error);
        setCurrentUser(false);
        setUserData({});
      }
    } else {
      setCurrentUser(false);
      setUserData({});
    } 
  }, []);

  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}

export default StorageContextUser;
