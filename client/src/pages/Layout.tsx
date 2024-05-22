import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
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
