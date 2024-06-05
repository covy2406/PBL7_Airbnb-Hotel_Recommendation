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
      }, 1000)
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
      <form
        className="flex flex-col p-4 bg-slate-100 shadow-gray-500"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                label="Password"
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                error={!!error}
                helperText={error ? error.message : ''}
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
            )}
          />
        </div>
        <Button variant="contained" type="submit">
          Đăng nhập
        </Button>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-center">
            Don't have an account?
            <Link to={'/signup'} className="pl-2 text-blue-500 cursor-pointer">
              Signup
            </Link>
          </p>
          <span className="text-sm font-semibold">or</span>
          <p className="text-sm text-center text-blue-500 cursor-pointer">Forget password?</p>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;

// import React, { useContext, useState } from 'react';
// import {
//   TextField,
//   Button,
//   Typography,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Link } from 'react-router-dom';
// import { signIn } from '../../api/apiUsers'; // Đảm bảo import đúng đường dẫn của signIn
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import { setToken } from '../../services/local/cookie';
// import { StorageContext } from '../../context/Storage/StorageContext';
// // import { jwtDecode } from 'jwt-decode';
// // import Cookies from 'js-cookie';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   //const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const storage = useContext(StorageContext);

//   const validateForm = () => {
//     let isValid = true;
//     if (!email) {
//       setEmailError('Nhập sai tài khoản email');
//       toast.error('Nhập sai tài khoản email');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }
//     if (!password) {
//       setPasswordError('Mật khẩu không hợp lệ');
//       toast.error('Mật khẩu không hợp lệ');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }
//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) {
//       return;
//     }
//     try {
//       const res = await signIn(email, password);
//       setToken({ token: res.token });
//       //setToken(res.token); // Lưu token vào cookie
//       //console.log(res.token);
//       storage.setCurrentUser(true);
//       storage.setUserData(res.user);

//       // const authToken = res.token;
//       // localStorage.setItem('authToken', authToken);
//       // Cookies.set('authToken', authToken);

//       // const decodedToken = jwtDecode(authToken);
//       // setCurrentUser(true);
//       // setUserData(decodedToken);

//       toast.success('Đăng nhập thành công', res);
//       navigate('/');
//     } catch (err) {
//       setEmailError(''); // Reset email error message
//       setPasswordError('Sai mật khẩu'); // Set password error message
//       setEmail('');
//       setPassword('');
//       toast.error(err.message);
//     }
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="z-0 flex flex-col w-full max-w-sm pt-16 mx-auto shadow-transparent">
//       <form className="flex flex-col p-4 bg-slate-100 shadow-gray-500" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <Typography className="text-center" variant="h6">
//             Đăng nhập
//           </Typography>
//         </div>
//         <div className="mb-4 bg-white">
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             value={email}
//             error={!!emailError}
//             helperText={emailError}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div className="mb-4 bg-white">
//           <TextField
//             label="Password"
//             variant="outlined"
//             fullWidth
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             error={!!passwordError}
//             helperText={passwordError}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleShowPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </div>
//         <Button variant="contained" type="submit" onClick={handleSubmit}>
//           Đăng nhập
//         </Button>
//         <div className='flex justify-between mt-4'>
//           <p className='text-sm text-center'>Don't have an account?
//             <Link to={'/signup'} className='pl-2 text-blue-500 cursor-pointer'>Signup</Link>
//           </p>
//           <span className='text-sm font-semibold'>or</span>
//           <p className='text-sm text-center text-blue-500 cursor-pointer'>Forget password?</p>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
