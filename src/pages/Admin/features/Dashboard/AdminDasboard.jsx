import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { CrawlingBlock } from './CrawlingBlock';
import { Outlet } from 'react-router-dom';
import { ProvincesStatisticService } from '../../services/AdminServices';
import { CircularProgress } from '@mui/material';

export const AdminDashboard = () => {
  const { provinceTable, loading } = ProvincesStatisticService();

  if (loading || !provinceTable)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-6 gap-x-4">
        <div className="bg-orange rounded-xl flex items-center justify-center gap-4">
          <div className="h-16 w-16">
            <PersonIcon style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="flex flex-col items-center py-4">
            <div className="font-bold uppercase">Total users</div>
            <div className="text-3xl font-bold">1210</div>
          </div>
        </div>
        <div className="bg-orange rounded-xl flex items-center justify-center gap-8">
          <div className="h-12 w-12">
            <ApartmentIcon style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="flex flex-col items-center py-4">
            <div className="font-bold uppercase">Khách sạn</div>
            <div className="text-3xl font-bold">{provinceTable.reduce((acc, cur) => acc + cur.numHotels, 0)}</div>
          </div>
        </div>
        <div className="bg-lightBlue rounded-xl flex items-center justify-center gap-4 col-span-4">
          <div className="text-2xl font-bold">Welcome to Dashboard, Linh</div>
        </div>
      </div>
      <div className="bg-lightBlue rounded-xl p-4">
        <div>
          <Outlet />
          <CrawlingBlock />
        </div>
      </div>
    </div>
  );
};
