import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export const AdminNavbarsList = [
  {
    displayName: 'Trang chủ',
    path: '/admin/dashboard',
    icon: <HomeIcon />,
  },
  {
    displayName: 'Thành phố',
    path: '/admin/provinces',
    icon: <EmojiTransportationIcon />,
  },
  {
    displayName: 'Bảng giá',
    path: '/admin/prices',
    icon: <LocalOfferIcon />,
  },
];
