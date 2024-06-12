import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import { getHotel } from '../../api/apihotel';

export default function CustomIcons({ page, handlePageChange, count }) {

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        color="primary"
        onChange={handlePageChange}
        sx={{justifyContent: 'center'}}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}