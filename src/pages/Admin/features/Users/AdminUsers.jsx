import React, { useMemo, useState } from 'react';
import { Button, CircularProgress, Select, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import moment from 'moment/moment';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { UsersStatisticService } from '../../services/AdminServices';
import { PageSizeOption } from '../Hotels/HotelsStatistic';

const COLUMN_WIDTH = ['2%', '20%', '30%', '10%', '20%', '10%', '20%'];

export const AdminUsers = () => {
  const [pageSize, setPageSize] = useState(PageSizeOption[1]);
  const [page, setPage] = useState(1);
  const { hotelsTable, totalPage, loading } = UsersStatisticService(page, pageSize);

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
        header: 'Tên',
        cell: (info) => info.getValue(),
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[1],
        },
      },
      {
        accessorKey: 'address',
        header: 'Địa chỉ',
        cell: (info) => info.getValue(),
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[2],
        },
      },
      {
        accessorKey: 'dateOfBirth',
        header: 'Ngày sinh',
        cell: (info) => <div className="text-center">{moment(info.getValue()).format('DD-MM-YYYY')}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[3],
        },
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: (info) => info.getValue(),
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[4],
        },
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Số điện thoại',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[5],
        },
      },
      {
        accessorKey: 'roles',
        header: 'Phân quyền',
        cell: (info) => <div className="text-center">{info.getValue()[0]?.name || 'ADMIN'}</div>,
        filterFn: 'includesString',
        meta: {
          width: COLUMN_WIDTH[10],
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

  return (
    <div className="bg-white p-4 rounded-md max-h-[80vh] overflow-hidden">
      <div className="w-full text-center font-bold text-3xl uppercase mb-6">Thống kê người dùng</div>
      <div className="max-h-[60vh] overflow-scroll">
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
                className="hover:brightness-90"
                style={{ backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#e9e9e9' }}>
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
        <Select value={pageSize} onChange={(e) => setPageSize(e.target.value)} displayEmpty size="small" variant="outlined">
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
