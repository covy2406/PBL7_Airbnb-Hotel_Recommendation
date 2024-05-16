import React from 'react';


const CityHot = ({ url, cityName, hotelQuantity }) => {
  return (
    <>
      <div className="cursor-pointer hover:scale-105">
        <div className="relative flex-col w-64 h-64">
          <img src={url} alt={cityName} layout="fill" className="rounded-xl" />
        </div>
        <div className="text-center">
          <h4 className="mt-3 text-2sm">{cityName}</h4>
          <h5 className="text-sm">{hotelQuantity}</h5>
        </div>
      </div>
    </>
  );
};
export default CityHot;
