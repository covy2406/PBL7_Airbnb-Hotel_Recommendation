import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const bannerImage = [
    {
      id: 1,
      urlImage: 'https://i.pinimg.com/originals/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg'
    },
    {
      id: 2,
      urlImage: 'https://th.bing.com/th/id/R.68783c3f8527293015071042ee0cc8b4?rik=wENtdNCHjfpfJA&pid=ImgRaw&r=0'
    },
    {
      id: 3,
      urlImage: 'https://th.bing.com/th/id/R.2095d3461f2579ad7d6f0c30d295f47f?rik=K7TU45JgAMhLtg&pid=ImgRaw&r=0'
    }
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 100,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '10px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left:'20px' }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {bannerImage.map((item, index) => (
            <div className="relative sm:h-[400px] md:h-[420px] lg:h-[550px] xl:h-[580px] ">
              <img
                key={index}
                src={item.urlImage}            
                alt=""
                layout="fill"
                objectFit="cover"
                className='w-full h-full quality-100'
              />
              {/* bg-gray-100 bg-opacity-10 */}
              <div className='absolute w-full text-3xl text-center top-1/2'>
                <p className='text-3xl text-white '>You don't know where to rent a hotel ?</p>
                <p className='text-2xl text-white'> Here are the options that best suit you</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Banner;
