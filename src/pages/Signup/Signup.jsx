import React, { useState } from "react";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// npm install @mui/icons-material


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setconfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    // Kiểm tra lỗi cho từng trường dữ liệu
    // ...

    // Cập nhật trạng thái lỗi
    setUsernameError(usernameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    confirmPasswordError(setconfirmPasswordError);

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

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div  className="z-0 flex flex-col w-full max-w-sm pt-12 mx-auto shadow-transparent ">
      <form onSubmit={handleSubmit} className="p-4 bg-slate-100 shadow-gray-500">
        <div className="mb-4">
          <Typography className="text-center" variant="h6">Đăng ký</Typography>
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
          <Typography variant="caption" color="error">{usernameError}</Typography>
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
          <Typography variant="caption" color="error">{emailError}</Typography>
        </div>
        <div className="mb-4 bg-white">
          <TextField
            id="confirm-password"
            name="confirm-password"
            label="Nhập mật khẩu của bạn"
            variant="outlined"
            type={showPassword ? "text" : "password"}
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
          <Typography variant="caption" color="error">{passwordError}</Typography>
        </div>
        
        <div className="mb-4 bg-white">
          <TextField
            id="confirm-password"
            name="confirm-password"
            label="Xác nhận Mật khẩu"
            variant="outlined"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            error={confirmPasswordError}
            InputProps={{
              endAdornment: (
                <InputAdornment
                position="end">
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
          <Typography variant="caption" color="error">{confirmPasswordError}</Typography>
        </div>
        <Button type="submit" variant="contained" fullWidth>
          Đăng ký
        </Button>

      </form>
    </div>
    // <form className="flex flex-col" onSubmit={handleSubmit} style={{ padding: 20 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12}>
    //       <Typography variant="h6">Đăng ký</Typography>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         label="Tên người dùng"
    //         variant="outlined"
    //         value={username}
    //         onChange={(event) => setUsername(event.target.value)}
    //         error={usernameError}
    //       />
    //       <Typography variant="caption" color="error">{usernameError}</Typography>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         label="Email"
    //         variant="outlined"
    //         type="email"
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         error={emailError}
    //       />
    //       <Typography variant="caption" color="error">{emailError}</Typography>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         label="Mật khẩu"
    //         variant="outlined"
    //         type={showPassword ? "text" : "password"}
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //         error={passwordError}
    //         InputProps={{
    //           endAdornment: (
    //             <InputAdornment position="end">
    //               <IconButton
    //                 aria-label="toggle password visibility"
    //                 onClick={handleShowPassword}
    //                 edge="end"
    //               >
    //                 {showPassword ? <VisibilityOff /> : <Visibility />}
    //               </IconButton>
    //             </InputAdornment>
    //           ),
    //         }}
    //       />
    //       <Typography variant="caption" color="error">{passwordError}</Typography>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         label="Xác nhận mật khẩu"
    //         variant="outlined"
    //         type={showConfirmPassword ? "text" : "password"}
    //         value={confirmPassword}
    //         onChange={(event) => setConfirmPassword(event.target.value)}
    //         error={confirmPasswordError}
    //         InputProps={{
    //           endAdornment: (
    //             <InputAdornment
    //             position="end">
    //             <IconButton
    //               aria-label="toggle password visibility"
    //               onClick={handleShowConfirmPassword}
    //               edge="end"
    //             >
    //               {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
    //             </IconButton>
    //           </InputAdornment>
    //         ),
    //       }}
    //     />
    //     <Typography variant="caption" color="error">{confirmPasswordError}</Typography>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Button variant="contained" type="submit">
    //       Đăng ký
    //     </Button>
    //   </Grid>
    // </Grid>
    // </form>
);
};

export default Signup;
