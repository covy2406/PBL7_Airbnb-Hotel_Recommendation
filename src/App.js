import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import HeaderOnlyLayout from './layouts/HeaderOnlyLayout/HeaderOnlyLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
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
