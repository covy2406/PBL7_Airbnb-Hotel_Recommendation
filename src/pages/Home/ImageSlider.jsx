import React from 'react';


const ImageSlider = ({ title, image, price }) => {
  console.log(title);
  console.log(price);
  return (
    <>
      <div className=''>
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
            <h5 className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500">
              15/4 - 17/4
            </h5>
            <h5 className="max-w-[17rem] font-semibold text-[16px] -mt-1 text-gray-500">{price}</h5>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-1">
            {/* <BsStarFill /> */}
            <h5 className="text-[15px]">5.0</h5>
          </div>
        </div>
      </div>
    </>
  )
};
export default ImageSlider;




// import React from "react";
// //import ImageHotel from '../../assets/images/ImageHotel.jpg';
// //import ImageHotel from '../../../public/image/ImageHotel.jpg';
// //import ImageHotel from './ImageHotel.jpg'
// import Home from "./Home";

// const ImageSlider = () => {
//   //console.log(ImageHotel);
//   const imageList = [
//     // Thêm URL ảnh như thích
//     { id: 1, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 2, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 3, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 4, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 5, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 6, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 7, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 8, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 9, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 10, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 11, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 12, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 13, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 14, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//     { id: 15, title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: 1541 },
//   ];
//   console.log('in ra ket qua tai day',imageList[0].title)
//   return (
//     <div className=" sm:py-5">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//         {imageList.map((imgItem, index) => (
//           <Home
//             key={imgItem.id}
//             title={imgItem.title}
//             image={imgItem.image} 
//             price={imgItem.price} 
//           />
//         ))}
//       </div>
//     </div>
//   )
// };

// export default ImageSlider;
