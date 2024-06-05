import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  const footerMap = [
    {
      title: 'ABOUT',
      sitemap: [
        'How Airbnb works',
        'Newsroom',
        'Airbnb 2024',
        'Investors',
        'Airbnb Plus',
        'Airbnb Luxe',
        'HotelTonight',
        'Airbnb for Work',
        'Made possible by Hosts',
        'Careers',
        "Founders' Letter",
      ],
    },
    {
      title: 'COMMUNITY',
      sitemap: [
        'Diversity & Belonging',
        'Against Discrimination',
        'Accessibility',
        'Airbnb Associates',
        'Frontline Stays',
        'Guest Referrals',
        'Gift cards',
        'Airbnb.org',
      ],
    },
    {
      title: 'HOST',
      sitemap: [
        'Host your home',
        'Host an Online Experience',
        'Host an Experience',
        'Responsible hosting',
        'Resource Center',
        'Community Center',
      ],
    },
    {
      title: 'SUPPORT',
      sitemap: [
        'More',
        'Help Center',
        'Cancellation options',
        'Neighborhood Support',
        'Trust & Safety',
      ],
    },
  ];
  return (
    <>
      <div className="px-12 bg-gray-100 border-t ">
        <div className="grid grid-cols-1 pb-6 space-y-4 text-xs text-gray-800 lg:grid-cols-4 xl:grid-cols-4">
          {footerMap.map((item, index) => (
            <div 
              className={`${index !== 0 && 'border-t border-gray-200 lg:border-none'} py-6 md:py-8`}
              key={index}
            >
              <h5 className='mb-6 font-bold text-gray-900' key={index}>{item.title}</h5>
              <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-y-3 xl:gap-y-4'>
                {item.sitemap?.map((data, index) => (
                  <li className='text-sm cursor-pointer hover:underline' key={index}>{data}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between py-5 text-sm text-gray-400 border-t border-gray-200 lg:py-6 lg:flex-row">
          <div className="flex flex-col items-center order-last lg:flex-row lg:order-none">
            <span className="mr-0 text-center lg:mr-4">© 2024 Airbnb</span>
            <span className="mb-2 mr-0 lg:mr-8 lg:mb-0">
              | PBL7{' '}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline"
              >
                PBL7{''}
              </a>
              |
            </span>
            <ul className="flex space-x-6 list-disc">
              <li className="hover:underline">
                <Link href="/">
                  <a href='.'>Privacy</a>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/">
                  <a href='.'>Terms</a>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/">
                  <a href='.'>Sitemap</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:mb-0">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/">
                  <a 
                    className="flex items-center"
                    href='.'
                  >
                    <BiWorld className="h-5 mr-1" />
                    <span className="underline">English (US) or VietNamese (VDN)</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a href='.' className="flex items-center">
                    <span className="mr-1">$</span>
                    <span className="underline">USD</span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex space-x-6">
              <li className="flex items-center">
                <Link href="/">
                  <a href='.'>
                    <Facebook
                      
                      height={16}
                      width={16}
                    />
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a href='.'>
                    <Instagram
                      
                      height={16}
                      width={16}
                    />
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a href='.'>
                    <Twitter
                      
                      height={16}
                      width={16}
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
