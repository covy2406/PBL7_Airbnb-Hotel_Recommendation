import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const DetailLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-500">
        <Header />
      </div>
      {/* /<Banner /> */}
      <div className="py-4 mx-12 my-24 sm:mx-6 md:mx-10 lg:mx-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default DetailLayout;
