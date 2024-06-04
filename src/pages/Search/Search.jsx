import { Link, useSearchParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { getsearchRecommend } from '../../api/apiRecommend';

const Search = () => {
  const [data, setData] = useState([]);
  const [title_substring, setTitleSubstring] = useState('');
  let [searchParams] = useSearchParams();

  useEffect(() => {
    setTitleSubstring(searchParams.get('title_substring') || '');
  }, [searchParams]);

  useEffect(() => {
    if (title_substring) {
      getsearchRecommend(title_substring)
        .then((res) => {
          setData(res.neighbours);
          console.log(res.neighbours);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [title_substring]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link component={Link} to={`/hotels/${item.id}`} className='cursor-pointer'>
            <div className="relative ">
              <div className="grid absolute w-full h-full rounded-b-[1.3rem]"></div>
              <div className="flex ">
                {/* Background */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[240px] w-full"
                />
              </div>
            </div>
            {/* Description */}
            <div className="flex items-start justify-between pt-3">
              {/* Left */}
              <div className="">
                <h5 className="max-w-[17rem] text-[17px] -mt-1 text-black-500">
                  {item.name}
                </h5>
                <h5 className="max-w-[17rem] font-semibold text-[16px] -mt-1 text-black-400">
                  {parseInt(item.price).toLocaleString("vn-VN")} đ / <span className='text-gray-500'>đêm</span>
                </h5>
              </div>
              {/* Right */}
              <div className="flex items-center space-x-1">
                <h5 className="text-[15px]">{item.stars}</h5>
                <BsStarFill className='text-sm text-yellow'/>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
};
export default Search;
