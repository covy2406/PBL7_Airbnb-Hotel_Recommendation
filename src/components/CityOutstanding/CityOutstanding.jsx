import React from "react";
import { Link } from "react-router-dom";


const CityOutstanding = ({itemCity}) => {
  //console.log('in ra itemcity',itemCity); itemCity trả về thông tin mỗi thành phố
  return (
    <>
      <Link to={`/cities/${itemCity.id}`} className="my-3 max-w-7xl">
        <div className="mt-6">
          <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer rounded-xl hover:scale-105">
            {/* left */}
            {/* <div className="relative w-24 h-24">
              <img
                src={itemCity.image}
                alt={itemCity.name}
                layout="fill"
                className="rounded-lg"
              />
            </div> */}
            
            {/* right */}
            <div className="flex justify-center text-center">
              <div>
                <h2 className="text-blue">{itemCity.name}</h2>
                {/* <h2 className="text-gray-500">{itemCity}</h2> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
export default CityOutstanding;