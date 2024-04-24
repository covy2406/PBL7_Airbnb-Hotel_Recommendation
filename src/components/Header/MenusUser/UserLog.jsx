import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FiMenu } from 'react-icons/fi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserLog = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    document.body.style.paddingRight = '0';
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    document.body.style.paddingRight = '0';
  };
  return (
    <>
      <Box sx={{ flexGrow: 0, borderRadius: 15 }}>
        <Tooltip>
          {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton> */}
          <div
              className="flex items-center gap-4 px-5 py-3 font-bold bg-white border-2 rounded-full cursor-pointer text-gray "
              onClick={handleOpenUserMenu}
            >
              <FiMenu />
              <AccountCircleIcon className="text-[22px]" />
            </div>
        </Tooltip>
        <Menu
          sx={{ mt: '55px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem component={Link} to={'/login'}>
            <ListItemText >Đăng nhập</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={'/signup'}>
            <ListItemText>Đăng ký</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Thông tin tài khoản</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Thoát</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
export default UserLog;
