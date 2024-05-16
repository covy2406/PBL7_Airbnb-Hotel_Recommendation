import React from 'react';
import { useState } from 'react';
import {
  TextField,
  Button,
  //   FormControlLabel,
  //   Checkbox,
  //   Select,
  //   MenuItem,
  //Grid,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from 'react-router-dom';
//import { useNavigate} from 'react-router-dom';

const Login = () => {
  //const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const validateForm = () => {
    // Kiểm tra lỗi cho từng trường dữ liệu

    // ...
    // Cập nhật trạng thái lỗi

    setPasswordError(passwordError);

    // Trả về `true` nếu không có lỗi
    // ...
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // ...
    if (!validateForm()) {
      return;
    }

    // Gửi dữ liệu đăng ký đến API

    // Gửi dữ liệu đăng nhập đến API
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="z-0 flex flex-col w-full max-w-sm pt-16 mx-auto shadow-transparent ">
        <form className="flex flex-col p-4 bg-slate-100 shadow-gray-500" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Typography className="text-center" variant="h6">
              Đăng nhập
            </Typography>
          </div>
          <div className="mb-4 bg-white">
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {/* <Typography variant="caption" color="error">{usernameError}</Typography> */}
          </div>
          <div className="mb-4 bg-white">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button variant="contained" type="submit">
            Đăng nhập
          </Button>
          <div className='flex justify-between mt-4'>
            <p className='text-sm text-center'>Don't have account?
              <Link to={'/signup'} className='pl-2 text-blue-500 cursor-pointer'>Signup</Link>
            </p>
            <span className='text-sm font-semibold'>or</span>
            <p className='text-sm text-center text-blue-500 cursor-pointer'>Forget password ?</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
