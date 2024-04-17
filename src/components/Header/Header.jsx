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
      <div className="border-b  border-slate-300">
        <div className="flex items-center justify-between h-28 sm:mx-6 md:mx-10 lg:mx-12 ">

          {/* left */}
          <div className="flex h-20 ">
            <img
              component={Link}
              to={'/'}
              src={logo2}
              alt="logo"
              className="object-cover w-20 cursor-pointer"
            />
          </div>

          {/* middle */}
          <div className="relative items-center justify-center hidden h-20 border rounded-full shadow-sm md:flex shadow-gray-400">
            {/* thẻ div ngay dưới là nội dung của search, nhận phòng, trả phòng, khách */}
            <div className=" w-[48rem] rounded-full items-center ountline-0 h-20">
              <div className="absolute flex items-center justify-between w-full h-20 pl-12 pr-12 font-semibold text-gray-500 justify-items-center">
                {/* <input
                type="search"
                placeholder="Địa điểm"
                className="w-[11rem] h-[3rem] px-6 font-semibold text-gray-500 border-none hover:bg-gray !important"
                /> */}
                <div className="w-[16rem]  pr-4 font-semibold text-gray-500 border-none">
                  <TextField
                    label="Địa điểm"
                    type='search'
                    fullWidth
                    variant="outlined"
                    className='border-none '
                  />
                </div>
                
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
                <div className="w-[11rem] px-6 cursor-pointer">Khách</div>
              </div>
            </div>
            {/* bg-[#ff5a60] */}
            <div className="flex bg-[#1976D2]  p-3 rounded-full mx-2">
              <FiSearch className="text-white" />
            </div>
          </div>

          {/* right */}
          <div className="flex items-center font-semibold text-gray-600 justify-items-center">
            <Stack spacing={2} direction="row">
              {/* <Button variant="text" component={Link} to={'/login'}>Đăng nhập</Button> */}
              <Button variant="contained" component={Link} to={'/login'}>
                Đăng nhập
              </Button>
              <Button variant="outlined" component={Link} to={'/signup'}>
                Đăng ký
              </Button>
            </Stack>
            {/* <div className="flex items-center gap-4 px-4 py-3 duration-100 ease-out border rounded-full hover:shadow-md">
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
