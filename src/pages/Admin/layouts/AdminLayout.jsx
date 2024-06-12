import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import { LogoutIcon } from '../../../components';
import { getProvincesStatistic } from '../../../api/apiAdmin';

export const AdminLayout = () => {
  getProvincesStatistic().then((res) => {
    console.log(res);
  });
  return (
    <div>
      <div className="flex w-screen h-[15vh] bg-lightBlue justify-between px-8 py-4 items-center">
        <div className="flex gap-4 items-center">
          <img src="/Airbnb.png" alt="logo" className="h-16" />
        </div>
        <div className="flex gap-4 items-center">
          <Avatar src="" alt="avatar" />
          <div>Admin</div>
          <Button variant="contained">
            <LogoutIcon />
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
