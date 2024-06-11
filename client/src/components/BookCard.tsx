import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "axios";
import { addBookToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { setAllBooks } from "../redux/features/books/booksSlice";
import { removeBookFromWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import Success from "./modals/Success";
import { addProductToCart } from "../redux/features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookCard({ book }) {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector((state) => state.auth.value);
  const allBooks = useAppSelector((state) => state.books.value);
  const wishlist = useAppSelector((state) => state.wishlist.value);
  const cart = useAppSelector((state) => state.cart.value);
  // console.log(isUserLoggedIn);
  const [showSuccessToast, setSuccessToast] = useState(false);
  const [showWarningToast, setWarningToast] = useState("");
  const [showErrorToast, setErrorToast] = useState("");

  const [error, setText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const warningToast = (text) => toast.warn(text);
  const errorToast = (text) => toast.error(text);
  const successToast = (text) => toast.success(text);

  const addToCart = async () => {
    const alreadyInCart = cart.find((item) => item.book._id == book._id);
    if (alreadyInCart) {
      warningToast("Book already in cart. Go to cart to change quantity");
      return;
    }
    if (isUserLoggedIn) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/carts/${book._id}/1`,
          {},

          {
            headers: {
              Authorization: `Bearer ${isUserLoggedIn?.token}`,
            },
          }
        );
        console.log(book);
        const bookToAdd = {
          book,
          quantity: res.data.data.quantity,
        };

        console.log(res);
        dispatch(addProductToCart(bookToAdd));
        successToast("Book has been added to cart!");
      } catch (err) {
        console.log(err);
        console.log(err.response.data.message);
        if (
          err.response.data.message ===
          "Quantity remains unchanged. No update needed."
        ) {
          errorToast("Book already in cart. Go to cart to change quantity");
        }
      }
    } else {
      warningToast("Please login to add to cart");
    }
  };

  const addToWishlist = async () => {
    console.log("clicked");
    if (isUserLoggedIn) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/wishlists/${book._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${isUserLoggedIn?.token}`,
            },
          }
        );

        console.log(res);
        dispatch(addBookToWishlist(book));

        successToast("book added to wishlist");
      } catch (err) {
        console.log(err);

        errorToast("Book already in Wishlist");
        // setTimeout(() => {
        //   setErrorToast("");
        // }, 2000);
      }
    } else {
      warningToast("Login to add to Wishlist");
    }
  };

  const removeFromWishlist = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/wishlists/${book._id}`,

        {
          headers: {
            Authorization: `Bearer ${isUserLoggedIn?.token}`,
          },
        }
      );

      console.log(res);
      const updatedWishlist = wishlist.filter((item) => item._id !== book._id);
      console.log(updatedWishlist);
      dispatch(removeBookFromWishlist(updatedWishlist));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl relative w-56">
      {/* <!-- Error Toast --> */}
      {showErrorToast && (
        <div
          className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 size-4 text-red-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-neutral-400">
                {showErrorToast}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <!-- End Toast --> */}

      {/* <!-- Warning Toast --> */}
      {showWarningToast && (
        <div
          className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 size-4 text-yellow-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-neutral-400">
                Please Login to add to {showWarningToast}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <!-- End Toast --> */}

      {/* <!-- Success Toast --> */}
      {showSuccessToast && (
        <div
          className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 size-4 text-teal-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-neutral-400">
                Successfully added!
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <!-- End Toast --> */}

      {location.pathname === "/account/wishlist" && (
        <button
          className="absolute top-3 right-0 sm:right-2 md:right-3 p-[2px] rounded-full bg-accent flex items-center justify-center"
          onClick={removeFromWishlist}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* {(location.pathname === "/" || location.pathname === "/shop") && (
        <button
          onClick={addToWishlist}
          className="absolute top-3 right-0 sm:right-2 md:right-3 p-[2px]  flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFav ? "#DB4444" : "none"}
            stroke="#DB4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      )} */}

      <Link to={`/shop/${book.title}`} className="cursor-pointer">
        <div className="flex justify-center items-center ">
          <img
            className="w-1/2 h-auto mt-3 "
            src={book.imageUrls[2]}
            // src={"https://covers.openlibrary.org/b/olid/OL30698173M-M.jpg"}
            alt="Image Description"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1 p-4 md:p-5">
        <Link
          to={`/shop/${book.title}`}
          className="cursor-pointer font-bold text-gray-800 line-clamp-1"
        >
          {book.title}
        </Link>
        <p className="text-sm text-gray-500 line-clamp-1">{book.author}</p>
        <p className=" text-xs font-medium uppercase text-gray-500 ">
          {/* ${book.price} */}
          $25.00
        </p>

        <button
          className="text-xs mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 md:text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
          onClick={addToCart}
        >
          Add to Cart
        </button>

        <button
          className="text-xs mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 md:text-sm font-semibold rounded-lg border disabled:opacity-50 disabled:pointer-events-none  border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100  "
          onClick={addToWishlist}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
