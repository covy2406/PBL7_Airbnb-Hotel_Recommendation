import React, { useState } from 'react';
import { TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

// npm install @mui/icons-material

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  //const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');

  const [dateOfBirthError, setDateOfBirthError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [provinceError, setProvinceError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  //const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    // Kiểm tra lỗi cho từng trường dữ liệu
    // ...

    // Cập nhật trạng thái lỗi
    setUsernameError(usernameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    confirmPasswordError(setconfirmPasswordError);

    setDateOfBirthError(dateOfBirthError);
    setPhoneNumberError(phoneNumberError);
    setAddressError(addressError);
    setProvinceError(provinceError);
    // Trả về `true` nếu không có lỗi
    // ...
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Gửi dữ liệu đăng ký đến API
    // ...
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleShowConfirmPassword = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  return (
    <div className="z-0 flex flex-col w-full max-w-sm pt-12 mx-auto shadow-transparent ">
      <form onSubmit={handleSubmit} className="p-4 bg-slate-100 shadow-gray-500">
        <div className="mb-4">
          <Typography className="text-center" variant="h6">
            Đăng ký
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="username"
            name="username"
            label="Tên người dùng"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            error={usernameError}
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {usernameError}
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={emailError}
            fullWidth
            required
            type="email"
          />
          <Typography variant="caption" color="error">
            {emailError}
          </Typography>
        </div>
        {/* <div className="mb-4 bg-white">
          <TextField
            id="dateOfBirth"
            name="dateOfBirth"
            label="Ngày sinh (YYYY/MM/DD)"
            variant="outlined"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            error={dateOfBirthError}
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {dateOfBirthError}
          </Typography>
          
        </div> */}
        <div className="mb-4 bg-white">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField']}>
              <DateField
                name="dateOfBirth"
                label="Ngày sinh (YYYY/MM/DD)"
                variant="outlined"
                fullWidth
                required
                // value={dateOfBirth}
                // onChange={(event) => setDateOfBirth(event.target.value)}
                // error={dateOfBirthError}
              />
            </DemoContainer>
          </LocalizationProvider>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          </LocalizationProvider> */}
          <Typography variant="caption" color="error">
            {dateOfBirthError}
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Số điện thoại"
            variant="outlined"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            error={phoneNumberError}
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {phoneNumberError}
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="address"
            name="address"
            label="Địa chỉ"
            variant="outlined"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            error={addressError}
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {addressError}
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="province"
            name="province"
            label="Tỉnh/thành phố"
            variant="outlined"
            value={province}
            onChange={(event) => setProvince(event.target.value)}
            error={provinceError}
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {provinceError}
          </Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="confirm-password"
            name="confirm-password"
            label="Nhập mật khẩu của bạn"
            variant="outlined"
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
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {passwordError}
          </Typography>
        </div>
        {/* Xác nhận lại mật khẩu */}
        {/* <div className="mb-4 bg-white">
          <TextField
            id="confirm-password"
            name="confirm-password"
            label="Xác nhận Mật khẩu"
            variant="outlined"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            error={confirmPasswordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            required
          />
          <Typography variant="caption" color="error">
            {confirmPasswordError}
          </Typography>
        </div> */}
        <Button type="submit" variant="contained" fullWidth>
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
    </div>
  );
};

export default Signup;
