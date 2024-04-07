import NavBar from "../components/nav-bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
