import React from 'react';
import logo2 from '../../assets/images/logo2.jpg';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineUser} from 'react-icons/ai';
import { FiMenu, FiSearch } from 'react-icons/fi';


const Header = () => {
  return (
    <>
      <div className='flex border-b sm:mx-6 md:mx-10 lg:mx-12 items-center justify-between px-10'>
        {/* left */}
        {/* bg-red-300 */}
        <div className=' h-20 flex'>
          <img 
            src={logo2}
            alt="logo"
            className='object-cover w-20 cursor-pointer'
          />
        </div>
        {/* middle */}
        <div className='hidden md:flex relative justify-center items-center 
          shadow-sm shadow-gray-400 border rounded-full'>
          <input
            type="search"
            placeholder=''
            className='py-2.5 w-[25rem] rounded-full ountline-0'
          />
          <div className='flex justify-between w-full absolute p-4 
            items-center justify-items-center pr-12 font-semibold text-gray-500'>
            <button className='h-full'>Chổ ở</button>
            <button className='h-full border-l border-x px-6'>Trải nghiệm</button>
            <button className='h-full'>Trải nghiệm trực tuyến</button>
          </div>
          <div className='flex bg-[#ff5a60] p-2 rounded-full mx-2'>
            <FiSearch className='text-white'/>
          </div>
        </div>
        {/* right */}
        <div className='flex justify-items-center items-center
          font-semibold text-gray-600'>
          <p className='text-[1rem]'>Cho thuê chổ ở qua Aibnb</p>
          <BiWorld className='mx-4 text-[1.8rem]'/>
          <div className='flex rounded-full border gap-4 px-4 py-3
            items-center hover:shadow-md duration-100 ease-out'>
            <FiMenu className='text-[1.8rem]'/>
            <AiOutlineUser className='text-[1.8rem] w-full'/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
