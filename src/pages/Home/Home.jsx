import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
//import ImageSlider from './ImageSlider';
//import ImageHotel from '../../assets/images/ImageHotel.jpg';
import CityOutstanding from '../../components/CityOutstanding/CityOutstanding';
import CityHot from './MediumCard/CityHot';
import CustomIcons from '../../components/Pagination/Pagination';
//import { getCities } from '../../api/apiCities';
import { getHotel } from '../../api/apihotel';
// import HotelComponent from '../../components/Hotels/Hotelcomponent';
import HotelHome from './HotelHome';
import { useParams } from 'react-router-dom';
import { getRecommend, getsearchRecommend } from '../../api/apiRecommend';
import { StorageContext } from '../../context/Storage/StorageContext';
// import HotelHome from './HotelHome';

const Home = () => {
  //const [cities, setCities] = useState([])
  const [page, setPage] = useState(1); // Trang hiện tại
  const [hotels, setHotels] = useState([]); // Du lieu khach san hien tai
  const [totalPage, setTotalPage] = useState(0); // Tong so trang
  const [rcmd, setRcmd] = useState([]);
  const count = 12; // Số lượng khách sạn trên mỗi trang

  const { currentUser } = useContext(StorageContext);

  const storage = useContext(StorageContext);

  const params = useParams();
  const user_id = params.id || storage.userData.id;
  console.log('in ra id', user_id);

  const [title_substring, setTitleSubstring] = useState('');

  // const imageList = [
  //   { id: 1, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 1 },
  //   { id: 2, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 3 },
  //   { id: 3, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 5 },
  //   { id: 4, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 5 },
  //   { id: 5, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 5 },
  //   { id: 6, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 3 },
  //   { id: 7, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 4 },
  //   { id: 8, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 4 },
  //   { id: 9, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 3 },
  //   { id: 10, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 5 },
  //   { id: 11, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 5 },
  //   { id: 12, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 4 },
  //   { id: 13, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 4 },
  //   { id: 14, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 5 },
  //   { id: 15, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 3 },
  //   { id: 16, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 4 },
  //   { id: 17, name: 'JWMariot, Sai Gon', url: ImageHotel, price: '14.353 vnđ', rating: 3 },
  // ];

  const cityListHot = [
    {
      id: 1,
      cityName: 'Hồ Chí Minh',
      url: 'https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '15100 khách sạn',
    },
    {
      id: 2,
      cityName: 'Đà Nẵng',
      url: 'https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '4500 khách sạn',
    },
    {
      id: 3,
      cityName: 'Hội An',
      url: 'https://pix6.agoda.net/geo/city/16552/1_16552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '6500 khách sạn',
    },
    {
      id: 4,
      cityName: 'Nha Trang',
      url: 'https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '5500 khách sạn',
    },
    {
      id: 5,
      cityName: 'Hà Nội',
      url: 'https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=345x345&ar=1x1',
      hotelQuantity: '14500 khách sạn',
    },
    {
      id: 6,
      cityName: 'Huế',
      url: 'https://pix6.agoda.net/geo/city/3738/1_3738_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '3500 khách sạn',
    },
    {
      id: 7,
      cityName: 'Phan Thiết',
      url: 'https://pix6.agoda.net/geo/city/16264/1_16264_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '1100 khách sạn',
    },
    {
      id: 8,
      cityName: 'Hạ Long',
      url: 'https://pix6.agoda.net/geo/city/17182/1_17182_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '2981 khách sạn',
    },
    {
      id: 9,
      cityName: 'Đà Lạt',
      url: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
      hotelQuantity: '1496 khách sạn',
    },
  ];

  // call api
  useEffect(() => {
    // getCities()
    //   .then((res) => {
    //     setCities(res);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // getHotel()
    //   .then((res) => {
    //   //   const totalPage = res.length;
    //   //   const hotelsPerPage = 100;
    //   //   setTotalPage(Math.ceil(totalPage / hotelsPerPage));
    //   //   const startIndex = (page - 1) * hotelsPerPage;
    //   //   const endIndex = startIndex + hotelsPerPage;
    //   //   setHotels(res.slice(startIndex, endIndex));
    //     setHotels(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

    getHotel(page, count)
      .then((res) => {
        setHotels(res.data);
        setTotalPage(Math.ceil(res.totalPages / count));
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

  useEffect(() => {
    if (title_substring) {
      getsearchRecommend(title_substring)
        .then((res) => {
          setTitleSubstring(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [title_substring]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className=" sm:py-5">
      <div className="mb-6">
        <h2 className="pb-5 text-4xl font-semibold text-center">
          Các điểm đến thu hút nhất Việt Nam
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {cityListHot.map((itemCity) => (
            <CityOutstanding
              key={itemCity.id}
              url={itemCity.url}
              CityName={itemCity.CityName}
              hotelQuantity={itemCity.hotelQuantity}
            />
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="mb-8 text-4xl font-semibold text-center">
          Các điểm đến thu hút tại Việt Nam
        </h2>
        <div className="flex flex-row gap-10 p-4 my-12 overflow-x-scroll scrollbar-hide">
          {cityListHot?.map((item, index) => (
            <CityHot
              key={index}
              url={item.url}
              cityName={item.cityName}
              hotelQuantity={item.hotelQuantity}
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        {currentUser ? (
          <>
            <h2 className="my-16 text-4xl font-semibold text-center">
              Những khách sạn nổi bật đề xuất cho khách hàng
            </h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {rcmd.length > 0 ? (
                rcmd.map((hotelItem) => <HotelHome key={hotelItem.id} hotelItem={hotelItem} />)
              ) : (
                <p className='text-center'>Không có gợi ý khách sạn nào.</p>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="my-16 text-4xl font-semibold text-center">
              Những khách sạn trên Airbnb
            </h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {hotels.map((hotelItem) => (
                <HotelHome key={hotelItem.id} hotelItem={hotelItem} />
              ))}
            </div>
            <div className="flex justify-center mt-8 text-center">
              <CustomIcons page={page} handlePageChange={handlePageChange} count={totalPage} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
