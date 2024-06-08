import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BookCard({ book }) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl relative ">
      {location.pathname === "/account/wishlist" && (
        <button
          //   onClick={removeFromWishlist}
          className="absolute top-3 right-0 sm:right-2 md:right-3 p-[2px] rounded-full bg-accent flex items-center justify-center"
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

      {(location.pathname === "/" || location.pathname === "/shop") && (
        <button
          onClick={() => setIsFav((prev) => !prev)}
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
      )}

      <Link to={`/shop/${book.title}`} className="cursor-pointer">
        <div className="flex justify-center items-center ">
          <img
            className="w-1/2 h-auto mt-3 "
            src={`/${book.image}`}
            alt="Image Description"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1 p-4 md:p-5">
        <Link
          to={`/shop/${book.title}`}
          className="cursor-pointer font-bold text-gray-800"
        >
          {book.title}
        </Link>
        <p className="text-sm text-gray-500 ">{book.author}</p>
        <p className=" text-xs font-medium uppercase text-gray-500 ">
          ${book.price}
        </p>

        {/* <!-- Rating --> */}
        <div className="flex items-center">
          {Array(book.rating)
            .fill(0)
            .map(() => (
              <svg
                className="flex-shrink-0 size-3 text-yellow-400 dark:text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            ))}

          {Array(5 - book.rating)
            .fill(0)
            .map(() => (
              <svg
                className="flex-shrink-0 size-3 text-gray-300 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            ))}
        </div>
        {/* <!-- End Rating --> */}

        <button className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
