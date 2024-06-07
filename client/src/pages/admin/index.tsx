import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

// https://www.preline.co/docs/frameworks-react.html
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const Admin = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-stone-100">
      <Header />

      <Sidebar />

      <div className="w-full lg:ps-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
