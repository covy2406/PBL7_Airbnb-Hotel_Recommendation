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
    const authToken = getCookie('token');
    console.log('in ', authToken);
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      setCurrentUser(true);
      setUserData(decodedToken);
    } else {
      setCurrentUser(false);
      setUserData({});
    } 
  }, []);


  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}
export default StorageContextUser;
