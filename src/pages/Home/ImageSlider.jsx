//import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const ImageSlider = ({ title, image, price, rating }) => {
  return (
    <>
      <Link component={Link} to={'/detail'} className="cursor-pointer">
        <div className="relative ">
          <div className="grid absolute w-full h-full rounded-b-[1.3rem]"></div>
          <div className="flex ">
            {/* Background */}
            <img
              src={image}
              alt={title}
              className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[13rem] w-full"
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
            <h5 className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500">{title}</h5>
            <h5 className="max-w-[17rem] font-semibold text-[16px] -mt-1 text-gray-500">{price}</h5>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-1">
            <h5 className="text-[15px]">{rating}</h5>
            <BsStarFill className="text-sm text-yellow" />
          </div>
        </div>
      </Link>
    </>
  );
};
export default ImageSlider;
