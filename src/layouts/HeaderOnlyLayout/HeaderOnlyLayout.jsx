import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import Filter from "../../components/Filters/Filter";

function HeaderOnlyLayout() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-500">
        <Header />
      </div>
      <div className="mx-12 my-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default HeaderOnlyLayout;
