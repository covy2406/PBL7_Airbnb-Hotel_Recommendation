import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { ProvincesStatisticService } from '../../services/AdminServices';
import { getCities } from '../../../../api/apiCities';

export const ProvinceStatistic = () => {
  const { provinceTable, loading, provinceChart } = ProvincesStatisticService();
  const [chartData, setChartData] = useState(provinceChart);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    getCities()
      .then((res) => {
        setCities(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading || !provinceTable || !provinceChart || !cities)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );

  const handleNavigateCities = (city) => {
    const cityId = cities.find((item) => item.name === city.name).id;
    navigate(`/cities/${cityId}`);
  };

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
                              className="pl-1 py-1 m-0"
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
              {table.getRowModel().rows.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  className="hover:cursor-pointer hover:brightness-90"
                  style={{ backgroundColor: rowIndex % 2 !== 0 ? '#ffffff' : '#e9e9e9' }}
                  onDoubleClick={() => handleNavigateCities({ name: row.getVisibleCells()[0].getValue() })}>
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
                <Bar
                  dataKey="value"
                  fill="#1976d2"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                  onDoubleClick={handleNavigateCities}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
