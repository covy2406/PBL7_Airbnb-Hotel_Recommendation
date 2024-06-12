import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { useForm, Controller } from 'react-hook-form';
import { signUp } from '../../api/apiUsers';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  // const { setCurrentUser, setUserData } = useContext(StorageContext);
  const { handleSubmit, control, setError } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const onSubmit = async (data) => {
    const { name, email, password, dateOfBirth, phoneNumber, phoneCode, address, province, role } = data;

    // const nameRegex = /^[a-zA-Z\s]{1,30}$/;
    // if (!nameRegex.test(name)) {
    //   toast.warning('Vui lòng nhập tên hợp lệ');
    //   setError('name', { type: 'manual', message: 'Tên không hợp lệ' });
    //   return;
    // }

    // const phoneRegex = /^\+[0-9]{10}$/;
    // if (!phoneRegex.test(`${phoneCode}${phoneNumber}`)) {
    //   toast.warning('Vui lòng nhập số điện thoại hợp lệ');
    //   setError('phoneNumber', { type: 'manual', message: 'Số điện thoại không hợp lệ' });
    //   return;
    // }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning('Vui lòng nhập địa chỉ email hợp lệ');
      setError('email', { type: 'manual', message: 'Email không hợp lệ' });
      return;
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    if (!passRegex.test(password)) {
      toast.warning('Vui lòng nhập mật khẩu phải có ít nhất một chữ thường, một chữ in hoa, một chữ số và một ký tự đặc biệt, độ dài 8-30');
      setError('password', { type: 'manual', message: 'Mật khẩu không hợp lệ' });
      return;
    }

    const fullPhoneNumber = `${phoneCode}${phoneNumber}`;
    const formattedDateOfBirth = dateOfBirth ? dayjs(dateOfBirth).format('YYYY-MM-DD') : null;
    try {
      setSubmitted(true);
      await signUp({
        name,
        email,
        password,
        address,
        province,
        dateOfBirth: formattedDateOfBirth,
        phoneNumber: fullPhoneNumber,
        roles: { name: role }
      });
      toast.success('Bạn đã đăng ký tài khoản thành công!');
      setTimeout(() => {
        navigate('/login');
      }, 1000)
    } catch (error) {
      if (error.response && error.response.data) {
        toast.warning(error.response.data.message);
      } else {
        toast.warning(error.message);
      }
      setSubmitted(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleDateChange = (newValue) => {
  //   setValue('dateOfBirth', newValue ? dayjs(newValue).format('YYYY-MM-DD') : null);
  // };

  const handleDateChange = (newValue) => {
    setDateOfBirth(newValue ? dayjs(newValue).format('YYYY-MM-DD') : null);
  };

  return (
    <div className="z-0 flex flex-col w-full max-w-sm pt-12 mx-auto shadow-transparent">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-slate-100 shadow-gray-500">
        <div className="mb-4">
          <Typography className="text-center" variant="h6">Đăng ký</Typography>
        </div>
        <div className="mb-4 bg-white">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Vui lòng nhập tên người dùng' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Tên người dùng"
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
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: 'Vui lòng nhập email' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                error={!!error}
                helperText={error ? error.message : ''}
              />
            )}
          />
        </div>
        <div className="mb-4 bg-white">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue={null}
              rules={{ required: 'Vui lòng chọn ngày sinh' }}
              render={({ field }) => (
                <DateField
                  {...field}
                  label="Ngày sinh (YYYY/MM/DD)"
                  variant="outlined"
                  fullWidth
                  format="YYYY/MM/DD"
                  value={dateOfBirth ? dayjs(dateOfBirth, 'YYYY-MM-DD') : null}
                  onChange={(date) => {
                    handleDateChange(date);
                    field.onChange(date);
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="mb-4 bg-white">
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{ required: 'Vui lòng nhập số điện thoại' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Số điện thoại"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Controller
                        name="phoneCode"
                        control={control}
                        defaultValue="+84"
                        render={({ field }) => (
                          <FormControl variant="standard">
                            <Select
                              {...field}
                              disableUnderline
                            >
                              <MenuItem value="+84">+84</MenuItem>
                              <MenuItem value="+1">+1</MenuItem>
                              <MenuItem value="+44">+44</MenuItem>
                              <MenuItem value="+61">+61</MenuItem>
                              {/* Thêm các đầu số khác nếu cần */}
                            </Select>
                          </FormControl>
                        )}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="mb-4 bg-white">
          <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{ required: 'Vui lòng nhập địa chỉ' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Địa chỉ"
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
            name="province"
            control={control}
            defaultValue=""
            rules={{ required: 'Vui lòng nhập tỉnh/thành phố' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Tỉnh/thành phố"
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
            name="role"
            control={control}
            defaultValue="USER"
            rules={{ required: 'Vui lòng chọn vai trò' }}
            render={({ field }) => (
              <FormControl fullWidth variant="outlined">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  {...field}
                  labelId="role-label"
                  label="Role"
                >
                  <MenuItem value="USER">USER</MenuItem>
                  <MenuItem value="ADMIN">ADMIN</MenuItem>
                  {/* Thêm các role khác nếu cần */}
                </Select>
              </FormControl>
            )}
          />
        </div>
        <div className="mb-4 bg-white">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Vui lòng nhập mật khẩu' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Nhập mật khẩu của bạn"
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
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={submitted}
        >
          Đăng ký
        </Button>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Khi nhấn đăng ký, tôi đồng ý với các
            <span className="px-1 text-blue-500">Điều khoản sử dụng</span> và
            <span className="px-1 text-blue-500">Chính sách bảo mật của Airbnb.</span>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;