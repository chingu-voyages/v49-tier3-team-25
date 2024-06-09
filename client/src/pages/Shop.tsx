import React, { useState } from "react";
import SearchSortFilter from "../components/shop/SearchSortFilter";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllBooks } from "../redux/features/books/booksSlice";

export default function Shop() {
  const allBooks = useAppSelector((state: RootState) => state.books.value);

  const [filteredData, setFilteredData] = useState(allBooks);

  const { currentItems, pageCount, handlePageClick } = usePagination(
    filteredData,
    10
  );
  const handleOnChange = (e) => {
    setFilteredData(
      allBooks.filter((book) =>
        book.title.toLowerCase().includes(e.target.value)
      )
    );
  };

  const sortTitleAZ = () => {
    setFilteredData((prev) =>
      [...prev].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  const sortTitleZA = () => {
    setFilteredData((prev) =>
      [...prev].sort((a, b) => b.title.localeCompare(a.title))
    );
  };

  const sortAuthorAZ = () => {
    setFilteredData((prev) =>
      [...prev].sort((a, b) => a.author.localeCompare(b.author))
    );
  };

  const sortAuthorZA = () => {
    setFilteredData((prev) =>
      [...prev].sort((a, b) => b.author.localeCompare(a.author))
    );
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <span className="text-xl font-bold text-accent mb-5 ">Explore Books</span>
      <div className="mt-5">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 p-5 flex flex-col ">
          <SearchSortFilter
            handleOnChange={(e) => handleOnChange(e)}
            sortTitleAZ={sortTitleAZ}
            sortTitleZA={sortTitleZA}
            sortAuthorAZ={sortAuthorAZ}
            sortAuthorZA={sortAuthorZA}
          />
          {/* book cards */}
          <div className="flex flex-wrap justify-center items-center  gap-2 mt-2">
            {currentItems.map((book) => (
              <BookCard book={book} />
            ))}{" "}
          </div>
          {/* <!-- Pagination */}
          <div className="px-6 py-4  gap-3 flex justify-center items-center border-t border-gray-200 ">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
