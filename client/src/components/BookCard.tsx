import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "axios";
import { addBookToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { removeBookFromWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookCard({ book }) {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector((state) => state.auth.value);
  const wishlist = useAppSelector((state) => state.wishlist.value);
  const cart = useAppSelector((state) => state.cart.value);
  const location = useLocation();
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

        const bookToAdd = {
          book,
          quantity: res.data.data.quantity,
        };

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

        dispatch(addBookToWishlist(book));
        successToast("book added to wishlist");
      } catch (err) {
        console.log(err);
        errorToast("Book already in Wishlist");
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

      const updatedWishlist = wishlist.filter((item) => item._id !== book._id);
      dispatch(removeBookFromWishlist(updatedWishlist));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl relative w-44">
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
            className=" mt-3 h-52 object-cover w-36"
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
