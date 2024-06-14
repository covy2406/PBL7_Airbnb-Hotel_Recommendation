import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress, Select, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import StarIcon from '@mui/icons-material/Star';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { HotelsStatisticService } from '../../services/AdminServices';

export const PageSizeOption = [10, 25, 50, 75, 100];
const COLUMN_WIDTH = ['2%', '25%', '7%', '7%', '10%', '7%', '7%', '7%', '7%', '7%'];

export const HotelsStatistic = () => {
  const [pageSize, setPageSize] = useState(PageSizeOption[1]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { hotelsTable, totalPage, loading } = HotelsStatisticService(page, pageSize);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[0],
        },
      },
      {
        accessorKey: 'name',
        header: 'Tên khách sạn',
        cell: (info) => info.getValue(),
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[1],
        },
      },
      {
        accessorKey: 'price',
        header: 'Giá',
        cell: (info) => (
          <div className="text-center">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(info.getValue())}
          </div>
        ),
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[2],
        },
      },
      {
        accessorKey: 'reviewCount',
        header: 'Lượt đánh giá',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[3],
        },
      },
      {
        accessorKey: 'star',
        header: 'Sao',
        cell: (info) => Array.from({ length: info.getValue() }, (_, index) => <StarIcon key={index} color="warning" />),
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[4],
        },
      },
      {
        accessorKey: 'avgScore',
        header: 'Điểm trung bình',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[5],
        },
      },
      {
        accessorKey: 'serve_score',
        header: 'Điểm phục vụ',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[6],
        },
      },
      {
        accessorKey: 'cleaness_score',
        header: 'Điểm vệ sinh',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[7],
        },
      },
      {
        accessorKey: 'avgScore',
        header: 'Điểm trung bình',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[8],
        },
      },
      {
        accessorKey: 'comfort_score',
        header: 'Điểm trung bình',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[9],
        },
      },
      {
        accessorKey: 'location_score',
        header: 'Điểm vị trí',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[10],
        },
      },
      {
        accessorKey: 'facilities_score',
        header: 'Điểm tiện nghi',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[11],
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: hotelsTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    pageCount: totalPage,
  });

  if (loading || !hotelsTable)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  const handleNavigateToHotel = (hotelId) => {
    navigate(`/hotels/${hotelId}`);
  };

  return (
    <div className="bg-white p-4 rounded-md max-h-[80vh] overflow-hidden">
      <div className="w-full text-center font-bold text-3xl uppercase mb-6">Thống kê khách sạn</div>
      <div className="max-h-[60vh] overflow-scroll w-fit">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 bg-slate-500 border-x-2 border-x-white">
                    {header.isPlaceholder ? null : (
                      <div
                        className=" text-white py-2 h-max"
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                          style: {
                            cursor: header.column.getCanSort() ? 'pointer' : 'default',
                          },
                        }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <ArrowDropUpIcon />,
                          desc: <ArrowDropDownIcon />,
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className="hover:cursor-pointer hover:brightness-90"
                style={{ backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#e9e9e9' }}
                onDoubleClick={() => handleNavigateToHotel(row.id)}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ width: cell.column.columnDef.meta.width }} className="px-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-4 gap-4">
        <Select value={pageSize} onChange={(e) => setPageSize(e.target.value)} displayEmpty size="small">
          {PageSizeOption.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          variant="outlined">
          Trang trước
        </Button>
        <div className="w-fit text-center">
          Trang {page} trên {totalPage}
        </div>
        <Button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
          variant="outlined">
          Trang kế
        </Button>
      </div>
    </div>
  );
};
