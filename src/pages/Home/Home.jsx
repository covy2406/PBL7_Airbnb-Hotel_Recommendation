import React from 'react';
import ImageSlider from './ImageSlider';
import ImageHotel from '../../assets/images/ImageHotel.jpg';
import CityOutstanding from '../../components/CityOutstanding/CityOutstanding';
import CityHot from './MediumCard/CityHot';
import CustomIcons from '../../components/Pagination/Pagination';

const Home = () => {
  const imageList = [
    { id: 1, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 1 },
    { id: 2, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 3 },
    { id: 3, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 5 },
    { id: 4, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 5 },
    { id: 5, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 5 },
    { id: 6, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 3 },
    { id: 7, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 4 },
    { id: 8, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 4 },
    { id: 9, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 3 },
    { id: 10, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 5 },
    { id: 11, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 5 },
    { id: 12, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 4 },
    { id: 13, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 4 },
    { id: 14, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 5 },
    { id: 15, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 3 },
    { id: 16, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 4 },
    { id: 17, title: 'JWMariot, Sai Gon', image: ImageHotel, price: '14.353 vnđ', rating: 3 },
  ];

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

  return (
    <div className=" sm:py-5">
      <div className="mb-6">
        <h2 className="pb-5 text-4xl font-semibold text-center">Các điểm đến thu hút nhất Việt Nam</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
          {cityListHot?.map((itemCity, index) => (
            <CityOutstanding
              key={index}
              url={itemCity.url}
              cityName={itemCity.cityName}
              hotelQuantity={itemCity.hotelQuantity}
            />
          ))}
        </div>
      </div>
      <div className='my-8'>
        <h2 className="mb-8 text-4xl font-semibold text-center">Các điểm đến thu hút tại Việt Nam</h2>
        <div className='flex flex-row gap-10 p-4 my-12 overflow-x-scroll scrollbar-hide'>
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
      <div className='mt-20'>
        <h2 className="my-16 text-4xl font-semibold text-center">Những khách sạn nổi bật đề xuất cho khách hàng</h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {imageList.map((imgItem) => (
            <ImageSlider
              key={imgItem.id}
              title={imgItem.title}
              image={imgItem.image}
              price={imgItem.price}
              rating={imgItem.rating}
            />
          ))}
        </div>
        <div className='flex justify-center mt-8 text-center'>
          <CustomIcons/>
        </div>
      </div>
    </div>
  );
};

export default Home;
