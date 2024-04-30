import React from "react";


const CityOutstanding = ({url, cityName, hotelQuantity}) => {

  return (
    <>
      <div className="my-3 max-w-7xl">
        <div className="mt-6">
          <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer rounded-xl hover:scale-105">
            {/* left */}
            <div className="relative w-24 h-24">
              <img
                src={url}
                alt={cityName}
                layout="fill"
                className="rounded-lg"
              />
            </div>
            
            {/* right */}
            <div className="flex">
              <div>
                <h2>{cityName}</h2>
                <h2 className="text-gray-500">{hotelQuantity}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CityOutstanding;