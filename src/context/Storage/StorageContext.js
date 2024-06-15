import { createContext, useEffect, useState } from 'react';
import { getCookie } from '../../services/local/cookie';
import { jwtDecode } from 'jwt-decode'; // Import thư viện jwt-decode

export const StorageContext = createContext();

function StorageContextUser({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});

  const states = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    userData: userData, // dữ liệu người dùng sau khi đăng nhập
    setUserData: setUserData,
  };
  const authToken = getCookie('authToken');
  useEffect(() => {
    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        setCurrentUser(true);
        setUserData(decodedToken);
        //console.log('Decoded token:', decodedToken); // Log decoded token để kiểm tra giá trị
      } catch (error) {
        // console.error('Token decoding failed:', error);
        setCurrentUser(true);
        setUserData({});
      }
    } else {
      setCurrentUser(true);
      setUserData({});
    }
  }, [authToken]);

  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}

export default StorageContextUser;
