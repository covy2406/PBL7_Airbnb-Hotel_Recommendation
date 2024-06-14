import React, { useMemo } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { ProvincesStatisticService } from '../../services/AdminServices';
import { CircularProgress } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { BarChart } from '@mui/x-charts/BarChart';

export const ProvinceStatistic = () => {
  const { provinceTable, loading, provinceChart } = ProvincesStatisticService();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'city',
        header: 'City',
        cell: (info) => info.getValue(),
        filterFn: 'includesString',
      },
      {
        accessorKey: 'numHotels',
        header: 'Number of Hotels',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
      },
    ],
    []
  );

  const table = useReactTable({
    data: provinceTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  if (loading || !provinceTable || !provinceChart)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  return (
    <div className="bg-white p-4 rounded-md max-h-[80vh] overflow-hidden">
      <div className="w-full text-center font-bold text-3xl uppercase mb-6">Province Statistic</div>
      <div className="flex">
        <div className="max-h-[60vh] overflow-y-scroll">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="">
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              onClick: header.column.getToggleSortingHandler(),
                              style: {
                                cursor: header.column.getCanSort() ? 'pointer' : 'default',
                              },
                            }}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <ArrowDropDownIcon />,
                              desc: <ArrowDropUpIcon />,
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <input
                              className="px-2 py-1 rounded-md mt-2 mr-4"
                              value={header.column.getFilterValue() || ''}
                              onChange={(e) => header.column.setFilterValue(e.target.value)}
                              placeholder={`Search...`}
                            />
                          ) : null}
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1 ml-8 mb-8 h-[60vh]">
          <div className="text-center font-bold text-xl mb-4">Number of Hotels Cities</div>
          <div className="h-full">
            <BarChart {...provinceChart} />
          </div>
        </div>
      </div>
    </div>
  );
};
