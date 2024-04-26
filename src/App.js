import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layouts/DefaultLayout/DefaultLayout';
import HeaderOnlyLayout from './layouts/HeaderOnlyLayout/HeaderOnlyLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HomePage from './pages/Home/Home';
import DetailLayout from './layouts/DetailLayout/DetailLayout';
import Detail from './pages/Detail/Detail';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
        <Route path='/detail' element={<DetailLayout/>}>
          <Route path='/detail' element={<Detail/>}/>
        </Route>
        <Route path="/login" element={<HeaderOnlyLayout />}>
          <Route index element={<Login></Login>} />
        </Route>
        <Route path="/signup" element={<HeaderOnlyLayout />}>
          <Route index element={<Signup></Signup>} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
