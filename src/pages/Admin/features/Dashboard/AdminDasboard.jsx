import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { CrawlingBlock } from './CrawlingBlock';
import { Outlet } from 'react-router-dom';

export const AdminDashboard = () => {
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
        <div className="bg-orange rounded-xl flex items-center justify-center gap-4">
          <div className="h-16 w-16">
            <ApartmentIcon style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="flex flex-col items-center py-4">
            <div className="font-bold uppercase">Total hotels</div>
            <div className="text-3xl font-bold">1210</div>
          </div>
        </div>
        <div className="bg-lightBlue rounded-xl flex items-center justify-center gap-4 col-span-4">
          <div className="text-2xl font-bold">Welcome to Dashboard, Linh</div>
        </div>
      </div>
      <div className="bg-lightBlue rounded-xl p-4">
        <div>
          <Outlet/> 
          <CrawlingBlock />
        </div>
      </div>
    </div>
  );
};
