import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';
// import PersonIcon from '@mui/icons-material/Person';

export const AdminNavbarsList = [
  {
    displayName: 'Dashboard',
    path: '/admin/dashboard',
    icon: <HomeIcon />
  },
  {
    displayName: 'Crawling',
    path: '/admin/crawling',
    icon: <RocketLaunchIcon />
  },
  // {
  //   displayName: 'Users',
  //   path: '/admin/users',
  //   icon: <PersonIcon />
  // },
  {
    displayName: 'Setting',
    path: '/admin/setting',
    icon: <SettingsIcon />
  }
];
