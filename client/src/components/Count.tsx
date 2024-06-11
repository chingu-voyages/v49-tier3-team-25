import React, { useRef, useState } from "react";
import {
  decrementProductInCart,
  updateProductQuantityInCart,
} from "../redux/features/cart/cartSlice";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Count({ item }) {
  const [count, setCount] = useState(item.quantity ? item.quantity : 0);
  console.log(item);
  const dispatch = useAppDispatch();
  const location = useLocation();
  console.log(location);

  const cart = useAppSelector((state: RootState) => state.cart.value);
  const successToast = (text) => toast.success(text);
  const isUserLoggedIn = useAppSelector((state) => state.auth.value);
  const inputRef = useRef(null);
  function increment() {
    setCount((prev) => prev + 1);
    console.log(count);

    if (location.pathname.includes("cart")) {
      updateCart("inc");
    }
  }

  function decrement() {
    setCount((prev) => prev - 1);
    console.log();

    if (location.pathname.includes("cart")) {
      updateCart("dec");
    }
  }

  const updateCart = async (type) => {
    if (isUserLoggedIn) {
      try {
        const number = type === "dec" ? count - 1 : count + 1;
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/carts/${
            item.book._id
          }/${number}`,
          {},

          {
            headers: {
              Authorization: `Bearer ${isUserLoggedIn?.token}`,
            },
          }
        );

        console.log(res);
        console.log(cart);
        successToast("Cart updated");
        const updateCart = cart.map((book) => {
          //   console.log(book.book._id);
          //   console.log(book.book._id);
          //   console.log(book.book._id == item.book._id);
          //   console.log(number);
          return book.book._id == item.book._id
            ? { ...book, quantity: number }
            : book;
        });
        console.log(updateCart);
        dispatch(updateProductQuantityInCart(updateCart));
        // setSuccessToast(true);
        // setTimeout(() => {
        //   setSuccessToast(false);
        // }, 1000);
      } catch (err) {
        console.log(err);
        // console.log(err.response.data.message);
        // if (
        //   err.response.data.message ===
        //   "Quantity remains unchanged. No update needed."
        // ) {
        //   setErrorToast("Book already in cart. Go to cart to change quantity");
        //   setTimeout(() => {
        //     setErrorToast("");
        //   }, 2000);
        // }
      }
    } else {
      // setWarningToast("Cart");
      // setTimeout(() => {
      //   setWarningToast("");
      // }, 2000);
    }
  };

  return (
    <div>
      {" "}
      {/* <!-- Input Number --> */}
      <div
        className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
        data-hs-input-number=""
      >
        <div className="flex items-center gap-x-1.5">
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            onClick={decrement}
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <input
            className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
            type="text"
            value={count}
            ref={inputRef}
            disabled
          />
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            onClick={increment}
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- End Input Number --> */}
    </div>
  );
}
