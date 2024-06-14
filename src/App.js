import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './layouts/DefaultLayout/DefaultLayout';
import HeaderOnlyLayout from './layouts/HeaderOnlyLayout/HeaderOnlyLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HomePage from './pages/Home/Home';
import DetailLayout from './layouts/DetailLayout/DetailLayout';
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';
import PageCity from './pages/City/PageCity';
import AccountInfo from './pages/AccountInfo/AccountInfo';
import Profile from './pages/Profile/Profile';
import HistoryComponent from './pages/History/HistoryComponent';
import { AdminLayout } from './pages/Admin/layouts/AdminLayout';
import { AdminCrawling, AdminDashboard, AdminNavbars } from './pages/Admin';
import { ProvinceStatistic } from './pages/Admin/features/Statistic/ProvinceStatistic';
import { Pricestatistic } from './pages/Admin/features/Prices/PriceStatistic';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<DetailLayout />}>
          <Route path="/hotels/:id/*" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cities/:id/*" element={<PageCity />} />
          <Route path="/accountInfo/*" element={<AccountInfo />} />
          <Route path="/accountInfo/profile" element={<Profile />} />
          <Route path="/accountInfo/history" element={<HistoryComponent />} />
        </Route>
        <Route element={<HeaderOnlyLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route element={<AdminNavbars />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="crawling" element={<AdminCrawling />} />
            <Route path="provinces" element={<ProvinceStatistic />} />
            <Route path="prices" element={<Pricestatistic />} />
          </Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
