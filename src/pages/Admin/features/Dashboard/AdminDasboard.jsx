import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import { ProvincesStatisticService, UsersStatisticService } from '../../services/AdminServices';
import { CircularProgress } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import tw from 'tailwind-styled-components';

const DashBoardCard = tw.div`bg-white rounded-2xl flex items-center justify-center gap-16 hover:cursor-pointer hover:bg-grey`;
const DashBoardCardTitle = tw.div`text-3xl font-bold uppercase`;
const DashBoardCardBody = tw.div`flex flex-col items-center gap-4 py-4`;
const DashBoardIcon = tw.div`h-28 w-28`;

export const AdminDashboard = () => {
  const { provinceTable, loading: provincesLoading } = ProvincesStatisticService();
  const { count: userCount, loading: usersLoading } = UsersStatisticService(1, 10);
  const navigate = useNavigate();

  if (provincesLoading || usersLoading || !provinceTable || !userCount)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  return (
    <div className="bg-white rounded-md p-8 pb-16 h-[50vh] flex flex-col gap-8">
      <div className="text-3xl font-bold text-center w-full">Chào mừng bạn đến với trang quản lý</div>
      <div className="bg-lightBlue rounded-xl p-10 grid grid-cols-3 flex-1 gap-x-16 gap-y-16">
        <DashBoardCard onClick={() => navigate('/admin/hotels')}>
          <DashBoardIcon>
            <BusinessIcon style={{ height: '100%', width: '100%' }} />
          </DashBoardIcon>
          <DashBoardCardBody>
            <DashBoardCardTitle>Khách sạn</DashBoardCardTitle>
            <DashBoardCardTitle>{provinceTable.reduce((acc, cur) => acc + cur.numHotels, 0)}</DashBoardCardTitle>
          </DashBoardCardBody>
        </DashBoardCard>
        <DashBoardCard onClick={() => navigate('/admin/users')}>
          <DashBoardIcon>
            <PersonIcon style={{ height: '100%', width: '100%' }} />
          </DashBoardIcon>
          <DashBoardCardBody>
            <DashBoardCardTitle>Người dùng</DashBoardCardTitle>
            <DashBoardCardTitle>{userCount}</DashBoardCardTitle>
          </DashBoardCardBody>
        </DashBoardCard>
        <DashBoardCard onClick={() => navigate('/admin/cities')}>
          <DashBoardIcon>
            <PersonIcon style={{ height: '100%', width: '100%' }} />
          </DashBoardIcon>
          <DashBoardCardBody>
            <DashBoardCardTitle>Thành phố</DashBoardCardTitle>
            <DashBoardCardTitle>{provinceTable.length}</DashBoardCardTitle>
          </DashBoardCardBody>
        </DashBoardCard>
      </div>
    </div>
  );
};
