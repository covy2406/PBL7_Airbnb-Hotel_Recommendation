import React, { useContext, useEffect, useState } from 'react';
import { getHistory } from '../../api/apiHistory';
// import History from './History';
import CustomIcons from '../../components/Pagination/Pagination';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { StorageContext } from '../../context/Storage/StorageContext';
import { CircularProgress } from '@mui/material';

const HistoryComponent = () => {
  const { userData } = useContext(StorageContext);
  const [hotelWatched, setHotelWatched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const count = 12;

  useEffect(() => {
    getHistory(page, count)
      .then((res) => {
        setHotelWatched(res.data);
        setTotalPage(Math.ceil(res.count / count));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, count]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );
  }

  return (
    <>
      <div className="py-12">
        {hotelWatched.length > 0 ? (
          <div>
            <p className="items-center py-2 text-lg text-center uppercase text-grey-500">
              {'Những khách sạn người dùng'} {userData.name} {'đã xem'}
            </p>
            <div className="grid grid-cols-1 gap-12 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {hotelWatched.map((hotelItem, index) => (
                <Link key={index} component={Link} to={`/hotels/${hotelItem.Hotels?.id}`} className="cursor-pointer">
                  <div className="relative ">
                    <div className="grid absolute w-full h-full rounded-b-[1.3rem]"></div>
                    <div className="flex ">
                      {/* Background */}
                      <img
                        src={hotelItem.Hotels?.image}
                        alt={hotelItem.Hotels?.name}
                        className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[240px] w-full"
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="flex items-start justify-between pt-3">
                    {/* Left */}
                    <div className="">
                      <h5 className="max-w-[16rem] text-[16px] -mt-1 text-black-500">{hotelItem.Hotels?.name}</h5>
                      <h5 className="text-[14px] text-gray-500">{hotelItem.Hotels?.address}</h5>
                      <h5 className="max-w-[17rem] font-semibold text-[16px] mt-1 text-black-400">
                        {parseInt(hotelItem.Hotels?.price).toLocaleString('vn-VN')} vnđ /{' '}
                        <span className="text-gray-500">đêm</span>
                      </h5>
                    </div>
                    {/* Right */}
                    <div className="flex items-center space-x-1">
                      <h5 className="text-[15px]">{hotelItem.Hotels?.star}</h5>
                      <BsStarFill className="text-sm text-yellow" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8 text-center">
              <CustomIcons page={page} handlePageChange={handlePageChange} count={totalPage} />
            </div>
          </div>
        ) : (
          <p className="justify-center text-lg text-center uppercase">
            Không có lịch sử khách sạn nào để hiển thị cho bạn. Vì bạn chưa xem một khách sạn nào từ Airbnb của chúng tôi
          </p>
        )}
      </div>
    </>
  );
};
export default HistoryComponent;
