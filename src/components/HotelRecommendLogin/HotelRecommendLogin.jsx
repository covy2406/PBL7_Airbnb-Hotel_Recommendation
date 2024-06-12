//import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
//import { getRecommend } from '../../api/apiRecommend';

const HotelHome = ({ rcmdItem }) => {
  return (
    <>
      <Link component={Link} to={`/hotels/${rcmdItem.id}`} className="cursor-pointer">
        <div className="relative ">
          <div className="grid absolute w-full h-full rounded-b-[1.3rem]"></div>
          <div className="flex ">
            {/* Background */}
            <img
              src={rcmdItem.image}
              alt={rcmdItem.name}
              className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[240px] w-full"
            />
          </div>
        </div>
        {/* Description */}
        <div className="flex items-start justify-between pt-3">
          {/* Left */}
          <div className="">
            <h5 className="max-w-[16rem] text-[16px] -mt-1 text-black-500">{rcmdItem.name}</h5>
            <h5 className="text-[14px] text-gray-500">{rcmdItem.address}</h5>
            <h5 className="max-w-[17rem] font-semibold text-[16px] mt-1 text-black-400">
              {parseInt(rcmdItem.price).toLocaleString('vn-VN')} đ /{' '}
              <span className="text-gray-500">đêm</span>
            </h5>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-1">
            <h5 className="text-[15px]">{rcmdItem.star}</h5>
            <BsStarFill className="text-sm text-yellow" />
          </div>
        </div>
      </Link>
    </>
  );
};
export default HotelHome;
