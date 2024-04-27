import React from 'react';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <div className="flex w-screen h-[15vh] bg-blue">
      <Outlet />
    </div>
  );
};
