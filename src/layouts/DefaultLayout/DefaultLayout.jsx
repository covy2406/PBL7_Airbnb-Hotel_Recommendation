import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner";
//import Filter from "../../components/Filters/Filter";


function Layout() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header/>
      </div>
      <Banner />
      <div className="py-4 mx-12 my-24 sm:mx-6 md:mx-10 lg:mx-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
