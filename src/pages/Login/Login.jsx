import React, { useContext, useState } from 'react';
import { TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { signIn } from '../../api/apiUsers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../services/local/cookie';
import { StorageContext } from '../../context/Storage/StorageContext';
//import Cookies from 'universal-cookie';

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, setError } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const storage = useContext(StorageContext);

  const onSubmit = async (data) => {
    //console.log('in ra dataa', data);
    try {
      const res = await signIn(data.email, data.password);
      setToken({ token: res.token });
      storage.setCurrentUser(true);
      storage.setUserData(res.token);
      console.log(res.status);
      toast.success('Đăng nhập thành công');
      setTimeout(() => {
        navigate('/');
      }, 1000);
      // if(res.status === 201) {
      //   console.log(res.status);
      //   toast.success('Đăng nhập thành công');
      //   setTimeout(() => {
      //     navigate('/');
      //   }, 1000)
      // }

      // const cookies = new Cookies(null, { path: '/' });

      // //cookies.set('myCat', 'Pacman');
      // console.log(cookies.get('token')); // Pacman
    } catch (err) {
      setError('password', {
        type: 'manual',
        message: 'Sai mật khẩu',
      });
      toast.error(err.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="z-0 flex flex-col w-full max-w-sm pt-16 mx-auto shadow-transparent">
      <form className="flex flex-col p-4 bg-slate-100 shadow-gray-500" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Typography className="text-center" variant="h6">
            Đăng nhập
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Nhập sai tài khoản email',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Email không hợp lệ',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
        </div>
        <div className="mb-4 bg-white">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Mật khẩu không hợp lệ' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Mật khẩu"
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                error={!!error}
                helperText={error ? error.message : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <Button variant="contained" type="submit">
          Đăng nhập
        </Button>
        <div className="flex items-center justify-between mt-4 text-center">
          <p className="text-sm text-center">
            Bạn chưa có tài khoản?
            <Link to={'/signup'} className="pl-2 cursor-pointer text-blue">
              Đăng ký
            </Link>
          </p>
          {/* <span className="text-sm font-semibold">or</span>
          <p className="text-sm text-center cursor-pointer text-blue">Forget password?</p> */}
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
