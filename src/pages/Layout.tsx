import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="p-5 bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
