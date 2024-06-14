import React from 'react';
import { Outlet } from 'react-router-dom';

export const AdminHeaders = () => {
  return (
    <>
      <div>Headers</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
