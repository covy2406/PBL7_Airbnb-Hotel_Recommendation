import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelsById } from '../../api/apiCities';
import HotelForCity from '../../components/HotelForCity/HotelForCity';
import CustomIcons from '../../components/Pagination/Pagination';

const PageCity = () => {
  const [city, setCity] = useState([]); // thông tin mỗi thành phố
  const [isCity, setIsCity] = useState([]); // các khách sạn thuộc thành phố
  const [page, setPage] = useState(1); // Trang hiện tại
  const [totalPage, setTotalPage] = useState(0);
  const count = 12; // Số lượng khách sạn trên mỗi trang
  const id = useParams().id; // lấy id của mỗi thành phố

  //const numberCity = isCity.Hotels.length;

  useEffect(() => {
    getHotelsById(id, page, count)
      .then((res) => {
        setCity(res);
        setIsCity(res.data);
        setTotalPage(Math.ceil(res.count / count));
        // console.log('in ra thông tin các khách sạn của thành phố', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, page, count]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="py-12">
        <div className="flex items-center">
          <h2 className="my-4 text-2xl font-medium text-black ">{isCity.name}</h2>
          <h2 className='ml-2 text-2xl font-medium'>: {'Tìm thấy'} {city.count} {'khách sạn'}</h2>
        </div>
        {/* item la mang chua danh sach cac hotel */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {isCity.Hotels?.map((item, index) => (
            <HotelForCity item={item} key={index} />
          ))}
        </div>
        <div className="flex justify-center mt-8 text-center">
          <CustomIcons page={page} handlePageChange={handlePageChange} count={totalPage} />
        </div>
      </div>
    </>
  );
};
export default PageCity;
