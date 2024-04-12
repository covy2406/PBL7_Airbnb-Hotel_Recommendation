import React from 'react';
import { TextField, Button } from '@mui/material';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi dữ liệu đăng nhập đến API
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Đăng nhập
        </Button>
      </form>
    </>
  );
};

export default Login;
