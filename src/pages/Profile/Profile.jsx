import React, { useContext } from 'react';
import { StorageContext } from '../../context/Storage/StorageContext';

const Profile = () => {
  const { currentUser, userData } = useContext(StorageContext);
  console.log('in ra', userData);

  return (
    <>
      <div className="flex justify-center items-center py-12 px-[100px]">
        {currentUser ? (
          <>
            <div className="w-[600px] px-6">
              <p className="my-8 text-3xl font-medium">Thông tin cá nhân</p>
              <div className="my-4 border-b">
                <span className='my-2 text-lg font-normal'>Tên người dùng</span>
                <p className='my-2 text-sm text-gray-500'>{userData.name}</p>
              </div>
              <div className="my-4 border-b">
                <span className='my-2 text-lg font-normal'>Email</span>
                <p className='my-2 text-sm text-gray-500'>{userData.email}</p>
              </div>
              <div className="my-4 border-b">
                <span className='my-2 text-lg font-normal'>Số điện thoại</span>
                <p className='my-2 text-sm text-gray-500'>Để giúp bạn bảo vệ danh tính và thông tin cá nhân chúng tôi sẽ không hiên thị ở đây</p>
              </div>
              <div className="my-4 border-b">
                <span className='my-2 text-lg font-normal'>Địa chỉ</span>
                <p className='my-2 text-sm text-gray-500'>Để giúp bạn bảo vệ danh tính và thông tin cá nhân chúng tôi sẽ không hiên thị ở đây</p>
              </div>
            </div>
            <div className="w-[400px] px-6">
              <div className='items-center p-4 border-2 rounded-3xl '>
                <p className='mb-4 text-xl font'>Tại sao thông tin của tôi không được hiển thị ở đây ?</p>
                <p className='text-sm text-gray-500'>Chúng tôi đã ẩn đi một số thông tin của bạn nhằm mục đích bảo vệ danh tính cho bạn</p>
              </div>
            </div>
          </>
        ) : (
          <p className='justify-center text-lg text-center uppercase'>Bạn chưa đăng ký tài khoản, không có bất kỳ thông tin cá nhân nào của bạn được Airbnb hiển thị</p>
        )}
      </div>
    </>
  );
};
export default Profile;
