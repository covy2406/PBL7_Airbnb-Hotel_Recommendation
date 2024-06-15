import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import CityOutstanding from '../../components/CityOutstanding/CityOutstanding';
import CityHot from './MediumCard/CityHot';
import CustomIcons from '../../components/Pagination/Pagination';
import { getHotel } from '../../api/apihotel';
import HotelHomeNoLogin from '../../components/HotelHomeNoLogin/HotelHomeNoLogin';
import { useParams } from 'react-router-dom';
import { getRecommend } from '../../api/apiRecommend';
import { StorageContext } from '../../context/Storage/StorageContext';
import { getCities } from '../../api/apiCities';
import HotelRecommendLogin from '../../components/HotelRecommendLogin/HotelRecommendLogin';

const Home = () => {
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(1); // Trang hiện tại
  const [hotels, setHotels] = useState([]); // Du lieu khach san hien tai
  const [totalPage, setTotalPage] = useState(0); // Tong so trang
  const [rcmd, setRcmd] = useState([]);
  const count = 12; // Số lượng khách sạn trên mỗi trang

  const { currentUser } = useContext(StorageContext);

  const storage = useContext(StorageContext);

  const params = useParams();
  const user_id = params.id || storage.userData.id;
  //console.log('in ra id', user_id);

  const cityListHot = [
    {
      id: 1,
      cityName: 'Hồ Chí Minh',
      url: 'https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 2,
      cityName: 'Đà Nẵng',
      url: 'https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 3,
      cityName: 'Hội An',
      url: 'https://pix6.agoda.net/geo/city/16552/1_16552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 4,
      cityName: 'Nha Trang',
      url: 'https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 5,
      cityName: 'Hà Nội',
      url: 'https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=345x345&ar=1x1',
    },
    {
      id: 6,
      cityName: 'Huế',
      url: 'https://pix6.agoda.net/geo/city/3738/1_3738_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 7,
      cityName: 'Phan Thiết',
      url: 'https://pix6.agoda.net/geo/city/16264/1_16264_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 8,
      cityName: 'Hạ Long',
      url: 'https://pix6.agoda.net/geo/city/17182/1_17182_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
    {
      id: 9,
      cityName: 'Đà Lạt',
      url: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
    },
  ];

  // call api
  useEffect(() => {
    getCities()
      .then((res) => {
        setCities(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getHotel(page, count)
      .then((res) => {
        setHotels(res.data);
        setTotalPage(Math.ceil(res.count / count));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page, count]);

  useEffect(() => {
    if (user_id) {
      getRecommend(user_id)
        .then((res) => {
          setRcmd(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user_id]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className=" sm:py-5">
      {/* CÁC THÀNH PHỐ NỔI BẬT, THU HÚT NHẤT */}
      <div className="mt-6 mb-8">
        <h2 className="mb-8 text-4xl font-semibold text-center">Các điểm đến thu hút tại Việt Nam</h2>
        <div className="flex flex-row gap-10 p-4 my-12 overflow-x-scroll scrollbar-hide">
          {cityListHot?.map((item, index) => (
            <CityHot key={index} url={item.url} cityName={item.cityName} hotelQuantity={item.hotelQuantity} />
          ))}
        </div>
      </div>
      {/* DANH SÁCH CÁC KHÁCH SẠN || CÁC KHÁCH SẠN NỔI BẬT ĐỀ XUẤT CHO KHÁCH HÀNG */}
      <div className="mt-20">
        {currentUser ? (
          <>
            {rcmd.length > 0 ? (
              <>
                <h2 className="my-16 text-4xl font-semibold text-center">Những khách sạn nổi bật đề xuất cho khách hàng</h2>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  {rcmd.map((rcmdItem) => (
                    <HotelRecommendLogin key={rcmdItem.id} rcmdItem={rcmdItem} />
                  ))}
                </div>
              </>
            ) : (
              // <p className='justify-center text-lg font-medium text-center uppercase'>Chưa có khách sạn nào được gợi ý với bạn. Hãy xem những khách sạn của chúng tôi để có gợi ý tốt nhất</p>
              <>
                <h2 className="my-16 text-4xl font-semibold text-center">Những khách sạn trên Airbnb</h2>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  {hotels.map((hotelItem) => (
                    <HotelHomeNoLogin key={hotelItem.id} hotelItem={hotelItem} />
                  ))}
                </div>
                <div className="flex justify-center mt-8 text-center">
                  <CustomIcons page={page} handlePageChange={handlePageChange} count={totalPage} />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <h2 className="my-16 text-4xl font-semibold text-center">Những khách sạn trên Airbnb</h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {hotels.map((hotelItem) => (
                <HotelHomeNoLogin key={hotelItem.id} hotelItem={hotelItem} />
              ))}
            </div>
            <div className="flex justify-center mt-8 text-center">
              <CustomIcons page={page} handlePageChange={handlePageChange} count={totalPage} />
            </div>
          </>
        )}
      </div>
      {/* CITIES: CÁC THÀNH PHỐ */}
      <div className="mt-20 mb-8 text-center">
        <h2 className="pb-5 text-4xl font-semibold text-center">Các thành phố du lịch tại Việt Nam</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {cities.map((itemCity, index) => (
            <CityOutstanding key={index} itemCity={itemCity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
