import React, { useMemo, useState, useEffect } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { PriceStatisticService } from '../../services/AdminServices';
import { CircularProgress } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Pricestatistic = () => {
  const { priceTable, loading, priceChart } = PriceStatisticService();
  const [chartData, setChartData] = useState(priceChart);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'price',
        header: 'Price',
        cell: (info) => {
          const priceInVND = info.getValue();
          return (
            <div className="text-center">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceInVND)}
            </div>
          );
        },
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
      {
        accessorKey: 'score',
        header: 'Score (from 0 to 10)',
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
    data: priceTable,
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
        price: row.original.price,
        score: row.original.score,
      };
    });

    setChartData(newChartData);
  }, [tableRows, table]);

  if (loading || !priceTable || !priceChart)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  return (
    <div className="bg-white p-4 rounded-md max-h-[80vh] overflow-hidden">
      <div className="w-full text-center font-bold text-3xl uppercase mb-6">Thống kê giá</div>
      <div className="flex">
        <div className="max-h-[60vh] overflow-y-scroll">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="bg-slate-500  text-white p-0">
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className="py-2 border-x-white border-x-2"
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
                              className="pl-1 py-1 m-0 text-black"
                              value={header.column.getFilterValue() || ''}
                              onChange={(e) => header.column.setFilterValue(e.target.value)}
                              placeholder={`Input >, <, = number`}
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
          <div className="text-center font-bold text-xl mb-4">Biểu đồ phân bố giá tiền theo điểm số</div>
          <div className="h-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}>
                <CartesianGrid />
                <XAxis
                  type="number"
                  dataKey="price"
                  name="Giá"
                  unit="VNĐ"
                  tickFormatter={(value) => `${value.toLocaleString('vi-VN')} `}
                />
                <YAxis type="number" dataKey="score" name="Số điểm" domain={[0, 10]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={chartData} fill="#1976d2" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
