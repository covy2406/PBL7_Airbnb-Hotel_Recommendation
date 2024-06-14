import React, { useMemo, useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { ProvincesStatisticService } from '../../services/AdminServices';
import { CircularProgress } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ProvinceStatistic = () => {
  const { provinceTable, loading, provinceChart } = ProvincesStatisticService();
  const [chartData, setChartData] = useState(provinceChart);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'city',
        header: 'Thành phố',
        cell: (info) => info.getValue(),
        filterFn: 'includesString',
      },
      {
        accessorKey: 'numHotels',
        header: 'Số lượng',
        cell: (info) => <div className="text-center">{info.getValue()}</div>,
        filterFn: (rows, id, filterValue) => {
          const rowValue = rows.getValue(id);
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
        },
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

  const tableRows = table.getFilteredRowModel().rows;
  useEffect(() => {
    const filteredRows = table.getFilteredRowModel().rows;
    const newChartData = filteredRows.map((row) => {
      return {
        name: row.original.city,
        value: row.original.numHotels,
      };
    });
    setChartData(newChartData);
  }, [tableRows, table]);

  if (loading || !provinceTable || !provinceChart)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  return (
    <div className="bg-white p-4 rounded-md max-h-[80vh] overflow-hidden">
      <div className="w-full text-center font-bold text-3xl uppercase mb-6">Thống kê thành phố</div>
      <div className="flex">
        <div className="max-h-[60vh] overflow-y-scroll">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className="bg-black-light text-white py-1"
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
                          {header.column.getCanFilter() ? (
                            <input
                              className="pl-1 py-1 border-2 border-grey"
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
          <div className="text-center font-bold text-xl mb-4">Số lượng khách sạn của các thành phố</div>
          <div className="h-full">
            <ResponsiveContainer width="100%" height={chartData.length > 20 ? '100%' : '90%'}>
              <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={90} dy={10} textAnchor="start" tick={chartData.length > 20 ? false : true} />
                <YAxis label={{ value: 'Số lượng khách sạn', angle: -90, dx: -25 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
