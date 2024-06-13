import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

// https://www.preline.co/docs/frameworks-react.html
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { ToastContainer } from "react-toastify";
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
  console.log(location.pathname);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BACKEND_URL}/books`);
        const booksToSet = res.data.data.slice(4, res.data.data.length + 1);
        dispatch(setAllBooks(booksToSet));
      } catch (err) {
        console.log(err);
        // setError("Sorry, books cannot be viewed at this time.");
      }
    };

  return (
    <div className="bg-stone-100">
      {!location.pathname.includes("sign") && (
        <>
          <Header />

          <Sidebar />
        </>
      )}

      <div className="w-full lg:ps-64">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
