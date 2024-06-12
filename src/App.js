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
import Search from './pages/Search/Search';
import PageCity from './pages/City/PageCity';
import AccountInfo from './pages/AccountInfo/AccountInfo';
import Profile from './pages/Profile/Profile';
// import History from './pages/History/History';
import HistoryComponent from './pages/History/HistoryComponent';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
        <Route element={<DetailLayout/>}>
          <Route path='/hotels/:id/*' element={<Detail/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/cities/:id/*' element={<PageCity/>}/>
          <Route path='/accountInfo/*' element={<AccountInfo/>}/>
          <Route path='/accountInfo/profile' element={<Profile/>}/> 
          <Route path='/accountInfo/history' element={<HistoryComponent/>}/>           
        </Route>
        <Route path='/signup'  element={<HeaderOnlyLayout />}>
          <Route index element={<Signup></Signup>} />
        </Route>
        <Route path='/login' element={<HeaderOnlyLayout/>}>
          <Route index element={<Login/>}/>
        </Route>
      </>
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
