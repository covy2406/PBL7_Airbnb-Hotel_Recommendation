//import * as React from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'js-cookie';
//import { Button } from '@mui/material';
import { StorageContext } from '../../../context/Storage/StorageContext';
import { signOut } from '../../../api/apiUsers';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser, userData, setUserData, setCurrentUser } = React.useContext(StorageContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    Cookies.remove('authToken');
    try {
      await signOut();
      toast.success('Đăng xuất thành công');
      setCurrentUser(false);
      setUserData({});
      navigate('/login');
    } catch (error) {
      toast.error('Lỗi không thể đăng xuất');
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Tài khoản">
          <div
            className="flex items-center gap-4 px-5 py-3 font-bold bg-white border-2 rounded-full cursor-pointer text-gray "
            onClick={handleClick}>
            {/* <FiMenu />
            <AccountCircleIcon className="text-[22px]" /> */}
            {currentUser ? (
              <>
                <FiMenu />
                <AccountCircleIcon className="text-[22px]" alt={userData.name} />
                <div className="text-[17px] text-black text-sm">{userData.name}</div>{' '}
                {/* Hiển thị tên tài khoản, ở đây là userData ko phải là currentUser */}
              </>
            ) : (
              <>
                <FiMenu />
                <AccountCircleIcon className="text-[22px]" />
              </>
            )}
          </div>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        {!currentUser && (
          <>
            <MenuItem onClick={handleClose} component={Link} to={'/login'}>
              <Avatar /> Đăng nhập
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to={'/signup'}>
              <Avatar /> Đăng ký
            </MenuItem>
            <Divider />
          </>
        )}
        <MenuItem onClick={handleClose} component={Link} to={'/accountInfo'}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Thông tin tài khoản
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <div onClick={handleLogOut}>Đăng xuất</div>
        </MenuItem>
      </Menu>
      <ToastContainer />
    </React.Fragment>
  );
}
