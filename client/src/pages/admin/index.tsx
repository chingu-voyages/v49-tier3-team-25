import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

// https://www.preline.co/docs/frameworks-react.html
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { ToastContainer } from "react-toastify";
import { setAdminCredentials } from "../../redux/features/adminAuth/adminAuthSlice";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setAllBooks } from "../../redux/features/books/booksSlice";
import axios from "axios";

const Admin = () => {
  const user = useAppSelector((state: RootState) => state.adminAuth.value);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // check if user token in local storage
    const user = JSON.parse(localStorage.getItem("adminUser") || '""');
    // console.log(user);
    if (user) {
      dispatch(setAdminCredentials(user));
    } else if (!user) {
      navigate("/admin/signin");
    }
  }, []);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BACKEND_URL}/books`);
        // const booksToSet = res.data.data.slice(4, res.data.data.length + 1);
        dispatch(setAllBooks(res.data.data));
      } catch (err) {
        console.log(err);
        // setError("Sorry, books cannot be viewed at this time.");
      }
    };

    getAllBooks();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Admin;
