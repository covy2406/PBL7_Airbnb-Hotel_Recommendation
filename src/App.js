import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './layouts/DefaultLayout/DefaultLayout';
import HeaderOnlyLayout from './layouts/HeaderOnlyLayout/HeaderOnlyLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HomePage from './pages/Home/Home';
import DetailLayout from './layouts/DetailLayout/DetailLayout';
import Detail from './pages/Detail/Detail';
import { AdminLayout, AdminCrawling, AdminSetting, AdminDashboard, AdminNavbars } from './pages/Admin';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<DetailLayout />}>
          <Route path="/detail" element={<Detail />} />
        </Route>
        <Route element={<HeaderOnlyLayout />}>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route element={<AdminNavbars />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="crawling" element={<AdminCrawling />} />
            <Route path="setting" element={<AdminSetting />} />
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
