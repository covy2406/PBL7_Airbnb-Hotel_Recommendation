import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export const AdminNavbarsList = [
  {
    displayName: 'Dashboard',
    path: '/admin/dashboard',
    icon: <HomeIcon />,
  },
  {
    displayName: 'Crawling',
    path: '/admin/crawling',
    icon: <RocketLaunchIcon />,
  },
  {
    displayName: 'Provinces',
    path: '/admin/provinces',
    icon: <EmojiTransportationIcon />,
  },
  {
    displayName: 'Prices',
    path: '/admin/prices',
    icon: <LocalOfferIcon />,
  },
];
