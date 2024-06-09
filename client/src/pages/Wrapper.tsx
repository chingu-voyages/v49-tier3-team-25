import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function Wrapper() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen gap-5 ">
      {!location.pathname.includes("dashboard") && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!location.pathname.includes("dashboard") && <Footer />}
    </div>
  );
}
