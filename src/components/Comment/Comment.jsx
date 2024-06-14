import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import moment from 'moment';

// npm install @tailwindcss/line-clamp
const Comment = ({ cmt }) => {
  // xử lý thời gian cmt được upload
  const calculateTimeFromNow = (createdAt) => {
    const createAtTime = moment(createdAt);
    const currentTime = moment();
    const diffInSeconds = currentTime.diff(createAtTime, 'seconds');

    const timeUnits = [
      { unit: 'năm', value: diffInSeconds / (365 * 24 * 3600) },
      { unit: 'tháng', value: diffInSeconds / (30 * 24 * 3600) },
      { unit: 'tuần', value: diffInSeconds / (7 * 24 * 3600) },
      { unit: 'ngày', value: diffInSeconds / (24 * 3600) },
      { unit: 'giờ', value: diffInSeconds / 3600 },
      { unit: 'phút', value: diffInSeconds / 60 },
      { unit: 'giây', value: diffInSeconds },
    ];
    for (const { unit, value } of timeUnits) {
      if (Math.floor(value) >= 1) {
        return `${Math.floor(value)} ${unit}${Math.floor(value) > 1 ? '' : ''} trước`;
      }
    }
    return 'just now';
  };

  return (
    <>
      <div className="items-center p-3 border-2 rounded-3xl bg-slate-100">
        <div className="flex items-center py-3">
        <AccountCircleIcon className="text-[18px]" style={{ fontSize: 48, color: '#89bf04' }} />
          <div className='ml-2'>
            <span className='text-sm'>{cmt.user_name}</span>
            <div className='text-sm text-gray-500'>
              {calculateTimeFromNow(cmt.createAt)}
            </div> 
          </div>
        </div>
        <div className="mb-3 text-2sm">
          {'Điểm đánh giá: '} <span className='text-blue-500'>{cmt.score}</span>
        </div>
        <div className="items-center py-3">
          <div className="mt-3 text-2sm border-1 rounded-2xl">{cmt.text}</div>
        </div>
      </div>
    </>
  );
};
export default Comment;
