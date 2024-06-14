import React, { useMemo } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { PriceStatisticService } from '../../services/AdminServices';
import { CircularProgress } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ScatterChart } from '@mui/x-charts';

export const Pricestatistic = () => {
  const { priceTable, loading, priceChart } = PriceStatisticService();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'price',
        header: 'Price',
        cell: (info) => {
          const priceInVND = info.getValue();
          return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceInVND);
        },
        filterFn: (rows, id, filterValue) => {
          return rows.filter((row) => {
            const rowValue = row.values[id];
            const [operator, value] = filterValue.split(' ');
            const filterNum = parseFloat(value);
            switch (operator) {
              case '>':
                return rowValue > filterNum;
              case '=':
                return rowValue === filterNum;
              case '<':
                return rowValue < filterNum;
              default:
                return true;
            }
          });
        },
      },
      {
        accessorKey: 'score',
        header: 'Score (from 0 to 10)',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: 'includesString',
      },
    ],
    []
  );

  const table = useReactTable({
    data: priceTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  console.log({ priceChart, priceTable });
  if (loading || !priceTable || !priceChart)
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
            <ScatterChart
              series={[
                {
                  label: 'Price vs Score',
                  data: priceChart.data,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
