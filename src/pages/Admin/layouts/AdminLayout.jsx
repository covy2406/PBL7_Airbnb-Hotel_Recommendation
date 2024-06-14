import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import { LogoutIcon } from '../../../components';

export const AdminLayout = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex w-screen h-[15vh] bg-blue justify-between px-8 py-4 items-center shadow-yellow-light shadow-md">
        <div className="flex gap-4 items-center">
          <img src="/Airbnb.png" alt="logo" className="h-16" />
        </div>
        <div className="flex gap-4 items-center">
          <Avatar src="" alt="avatar" />
          <div className="font-bold text-white">Admin</div>
          <Button variant="contained" color="inherit">
            <LogoutIcon />
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
