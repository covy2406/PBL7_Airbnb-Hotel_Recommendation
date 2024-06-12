import React, { useContext, useEffect} from 'react';
import { FcReading, FcViewDetails } from "react-icons/fc";
import { StorageContext } from '../../context/Storage/StorageContext';
import { Link, useNavigate } from 'react-router-dom';

const AccountInfo = () => {
  const { currentUser, userData } = useContext(StorageContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);
  
  return (
    <>
      <div className='py-12'>
        <div className='items-center mb-8'>
          <p className='text-xl font-medium'>Tài khoản</p>
          <p className='flex items-center text-lg text-gray-600'>{userData.name} {', Email: '} {userData.email}</p>
          {/* {currentUser ? (
            <>
              <p className='flex items-center text-lg text-gray-600'>{userData.name} {', Email: '} {userData.email}</p>
            </>
          ): (
            <p className='justify-center text-lg text-center uppercase'>Bạn chưa có tài khoản</p>
          )} */}
        </div>
        <div className="grid items-center grid-cols-2 gap-4 pb-6 sm:grid-cols-1 md:grid-cols-2 text-2sm">
          <Link to={'/accountInfo/profile'} className='p-3 cursor-pointer border-1 rounded-3xl bg-slate-200'>
            <FcViewDetails style={{fontSize: 28}}/>
            <div className='items-center justify-center'>
              <p className='text-lg font-medium'>Thông tin tài khoản</p>
              <p className='text-sm text-gray-500'>Hiển thị thông tin tài khoản của bạn</p>
            </div>
          </Link>
          <Link to={'/accountInfo/history'} className='p-3 cursor-pointer border-1 rounded-3xl bg-slate-200'>
            <FcReading style={{fontSize: 28}}/>
            <div className='items-center justify-center'>
              <p className='text-lg font-medium'>Lịch sử</p>
              <p className='text-sm text-gray-500'>Hiển thị những khách sạn bạn đã xem</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AccountInfo;
