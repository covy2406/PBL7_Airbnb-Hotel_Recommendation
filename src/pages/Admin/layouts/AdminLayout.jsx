import React from 'react';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
