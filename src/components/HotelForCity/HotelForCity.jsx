import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const HotelForCity = ({ item }) => {
  // console.log('in ra item tai day', item);
  return (
    <>
      <Link component={Link} to={`/hotels/${item.id}`} className="cursor-pointer">
        <div className="relative ">
          <div className="grid absolute w-full h-full rounded-b-[1.3rem]"></div>
          <div className="flex ">
            {/* Background */}
            <img
              src={item.image}
              alt={item.name}
              className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[240px] w-full"
            />
          </div>
        </div>
        {/* Description */}
        <div className="flex items-start justify-between pt-3">
          {/* Left */}
          <div className="">
            <h5 className="max-w-[16rem] text-[16px] -mt-1 text-black-500">{item.name}</h5>
            <h5 className="text-[14px] text-gray-500">{item.address}</h5>
            <h5 className="max-w-[17rem] font-semibold text-[16px] mt-1 text-black-400">
              {parseInt(item.price).toLocaleString('vn-VN')} đ /{' '}
              <span className="text-gray-500">đêm</span>
            </h5>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-1">
            <h5 className="text-[15px]">{item.star}</h5>
            <BsStarFill className="text-sm text-yellow" />
          </div>
        </div>
      </Link>
      {/* <div className="items-center my-4 border-sky-400">
        <div className="flex justify-between p-3 bg-blue-50">

          <div className="relative w-56 h-56">
            <img src={item.image} alt={item.name} layout="fill" className="w-56 h-56 rounded-lg" />
          </div>

          <div className="items-center p-4 w-[40rem]">
            <div className="max-w-[40rem]">
              <h3 className="font-medium text-blue-700">{item.name}</h3>
              <div className='flex items-center'>
                <h5 className="text-[15px] mr-2">{item.star}</h5>
                <BsStarFill className="text-sm text-yellow" />
              </div>
              <h4 className="text-blue-500 underline">{item.address}</h4>
            </div>
          </div>

          <div className="px-2 py-4">
            <div className="py-4">
              <span className="items-center p-4 mt-4 text-sm text-center text-white bg-blue-500 rounded-lg">
                {item.avgScore}
              </span>
            </div>
            <div className="pt-4 mt-24 font-medium test-sm">
              {parseInt(item.price).toLocaleString('vn-VN')} VNĐ / {' Đêm '}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default HotelForCity;
