//import { Link } from '@mui/material';
import { Link} from 'react-router-dom';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';



const HotelRecommendLogin = ({ rcmdItem }) => {
  return (
    <>
      <Link component={Link} to={`/hotels/${rcmdItem.id}`} className='cursor-pointer'>
        <div className="relative ">
          <div className="grid absolute w-full h-full rounded-b-[1.3rem]"></div>
          <div className="flex ">
            {/* Background */}
            <img
              src={rcmdItem.image}
              alt={rcmdItem.name}
              className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[240px] w-full"
            />
            {/* Title */}
            {/* <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
              {title}
              <span>&#x2022;</span>
              <p className="text-[18px] text-slate-200"> {price}</p>
            </div> */}
          </div>
        </div>
        {/* Description */}
        <div className="flex items-start justify-between pt-3">
          {/* Left */}
          <div className="">
            {/* <p className="max-w-[17rem] font-semibold text-[17px]">
              This is a rare find
            </p> */}
            <h5 className="max-w-[17rem] text-[17px] -mt-1 text-black-500">
              {rcmdItem.name}
            </h5>
            <h5 className="max-w-[17rem] font-semibold text-[16px] -mt-1 text-black-400">
              {parseInt(rcmdItem.price).toLocaleString("vn-VN")} đ / <span className='text-gray-500'>đêm</span>
            </h5>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-1">
            <h5 className="text-[15px]">{rcmdItem.star}</h5>
            <BsStarFill className='text-sm text-yellow'/>
          </div>
        </div>
      </Link>
    </>
  )
};
export default HotelRecommendLogin;
