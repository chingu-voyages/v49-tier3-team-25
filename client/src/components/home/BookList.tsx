import React from "react";
import BookCard from "../BookCard";

export default function BookList({ title, bookData }) {
  const mobileSlicedBookData = bookData.slice(1, 4);
  const tabletSlicedBookData = bookData.slice(1, 5);
  const desktopSlicedBookData = bookData.slice(1, 6);

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent pb-2 ">{title}</span>
          <button
            //   onClick={addAllToCart}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            View All{" "}
          </button>
        </div>

        {/* book cards */}
        <div className="flex justify-center items-center md:hidden lg:hidden xl:hidden gap-2 mt-2">
          {mobileSlicedBookData.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
        <div className="hidden justify-center items-center md:flex lg:hidden xl:hidden gap-2 mt-2">
          {tabletSlicedBookData.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
        <div className=" hidden justify-center items-center lg:flex gap-2 mt-2">
          {desktopSlicedBookData.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
