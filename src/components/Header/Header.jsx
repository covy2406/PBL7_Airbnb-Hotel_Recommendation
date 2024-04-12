//import Filter from '../Filters/Filter';
import React from 'react';
import { useState } from 'react';
import logo2 from '../../assets/images/logo2.jpg';
//import { AiOutlineUser } from 'react-icons/ai';
// FiMenu
import { FiSearch } from 'react-icons/fi';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// eslint-disable-next-line
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const Header = () => {
  const [value, setValue] = useState(dayjs());
  // Set license key ở đây
  //const [isShowDatePicker, setIsShowDatePicker ] = useState(false);
  // hàm xử lý khi click vào checkIn
  // const handleCheckIn = () => {
  //   setIsShowDatePicker(!isShowDatePicker);
  // }
  // const [dateRange, setDateRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: 'selection',
  //   },
  // ]);

  //npm install @mui/x-date-pickers-pro
  // npm install @mui/x-date-pickers-pro/AdapterDayjs
  // npm install dayjs

  return (
    <>
    <div className='border-b'>
      <div className="z-10 flex items-center justify-between h-28 sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* left */}
        
        <div component={Link} to='/' className="flex h-20 ">
          <img src={logo2} alt="logo" className="object-cover w-20 cursor-pointer" />
        </div>

        {/* middle */}
        <div className="relative items-center justify-center hidden h-20 border rounded-full md:flex shadow-gray-400">
          <div className=" w-[48rem] rounded-full items-center ountline-0 h-full" />
          <div className="absolute flex items-center justify-between w-full h-full p-4 pr-12 font-semibold text-gray-500 justify-items-center">
            {/* <input
              type="search"
              placeholder="Địa điểm"
              className="w-[11rem] h-[3rem] px-6 font-semibold text-gray-500 border-none hover:bg-gray !important"
            /> */}
            <TextField
              label="Địa điểm"
              type='search'
              variant="outlined"
              fullWidth
              className='border-none'
            />

            {/* <div onClick={() => handleCheckIn()} className='flex-col items-center w-full h-full px-6 border-l border-r cursor-pointer justify-items-center'></div>
            {
              isShowDatePicker && (<Filter style={{position: 'absolute', top: 'calc(100% + 1rem)'}}/>)
            }
            <div className='w-full h-full px-6 border-r cursor-pointer'>Trả phòng</div> */}
            <div className="items-center w-full px-6 border-l border-r cursor-pointer justify-items-center">
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker label="Nhận phòng" defaultValue={dayjs()} />
                    <DatePicker
                      label="Trả phòng"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </div>

            <div className="w-[15rem] px-6 cursor-pointer">Khách</div>
          </div>
          <div className="flex bg-[#ff5a60] p-3 rounded-full mx-2">
            <FiSearch className="text-white" />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center font-semibold text-gray-600 justify-items-center">
          <div className="flex items-center gap-4 px-4 py-3 duration-100 ease-out border rounded-full hover:shadow-md">
            <Stack spacing={2} direction="row">
              <Button variant="text" component={Link} to={'/login'}>Đăng nhập</Button>
              {/* <Button variant="contained" to={'/login'}>Đăng ký</Button> */}
              <Button variant="outlined" component={Link} to={'/signup'}>Đăng ký</Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Header;
