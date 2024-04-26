import { createContext,  useState } from 'react';

//import { getCookie } from 'services/local/cookie'

export const StorageContext = createContext();

function StorageContextUser({children}) {
  
  const [userData, setUserData] = useState({});

  const states = {
    userData, // dữ liệu người dùng sau khi đăng nhập
    setUserData,
  };

  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}
export default StorageContextUser;