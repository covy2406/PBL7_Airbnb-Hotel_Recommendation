import React from "react";
import ImageSlider from "./ImageSlider";
import ImageHotel from '../../assets/images/ImageHotel.jpg'

const Home = () => {
  const imageList = [
    { id: 1, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 2, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 3, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 4, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 5, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 6, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 7, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 8, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 9, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 10, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 11, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 12, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 13, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 14, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
    { id: 15, title: "JWMariot, Sai Gon", image: ImageHotel, price: 1541 },
  ];
  console.log('in ra ket qua tai day',imageList[0].title)
  return (
    <div className=" sm:py-5">
      <div className="z-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {imageList.map((imgItem) => (
          <ImageSlider
            key={imgItem.id}
            title={imgItem.title}
            image={imgItem.image} 
            price={imgItem.price} 
          />
        ))}
      </div>
    </div>
  )
};

export default Home;




