import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AdminNavbarsList } from '../../constants';
import { Button } from '@mui/material';

export const AdminNavbars = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <div className="flex">
      <div className="flex flex-col h-[85vh]">
        {AdminNavbarsList.map((navbar) => (
          <Button
            key={navbar.displayName}
            className={location === navbar.path ? 'brightness-[1]' : 'brightness-[1.1]'}
            onClick={() => navigate(navbar.path)}
            startIcon={navbar.icon}
            variant="contained"
            size="large"
            sx={{ borderRadius: '0px', justifyContent: 'start', textTransform: 'none', border: 'none', boxShadow: 'none' }}>
            {navbar.displayName}
          </Button>
        ))}
      </div>
      <div className="p-8 flex-1 bg-grey">
        <Outlet />
      </div>
    </div>
  );
};
