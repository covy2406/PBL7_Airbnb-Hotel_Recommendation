import React from "react";
//import Home from "../Home";
import HomePage from "./Home";
//import ImageHotel from '../../../assets/images/ImageHotel.jpg'
//import ImageHotel from '../../assets'

const Slider = () => {
  const imageList = [
    // Thêm thêm URL ảnh như thích
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
    { title: "JWMariot, Sai Gon", image: '../../assets/images/ImageHotel.jpg', price: "1,541" },
  ];

  console.log('in ra giá trị của ảnh', imageList.img[1])
  return (
    <div className="my-28 sm:py-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {imageList.map((imgList, index) => (
          <HomePage
            key={index}
            title={imgList.title}
            image={imgList.image} 
            price={imgList.price} 
          />
        ))}
      </div>
    </div>
  )
};

export default Slider;
