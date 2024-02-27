import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//import Filter from "../../components/Filters/Filter";


function Layout() {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0">
        <Header/>
        {/* <Filter/> */}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
