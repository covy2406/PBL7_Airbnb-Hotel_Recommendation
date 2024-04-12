import React from 'react';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DateCalendar } from '@mui/x-date-pickers';

// npm install @mui/lab
// npm install dayjs
// npm install @mui/x-date-pickers
// npm install --save-dev @babel/plugin-proposal-private-property-in-object

const Filter = () => {
  return (
    <>
      <Box clasName="top-7 bg-aliceblue">
        <LocalizationProvider clasName="top-7 bg-aliceblue" dateAdapter={AdapterDayjs}>
          <DatePicker label="select date" />
        </LocalizationProvider>
      </Box>
    </>
  );
};
export default Filter;
