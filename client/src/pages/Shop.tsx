import React, { useState } from "react";
import SearchSortFilter from "../components/shop/SearchSortFilter";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

const placeholderBooks = [
  {
    title: "title 1",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 25,
    rating: 3,
  },
  {
    title: "title 2",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title 3",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 50,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 14,
    rating: 3,
  },
  {
    title: "abc title",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title of book",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 60,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 75,
    rating: 3,
  },
  {
    title: "title 1",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 25,
    rating: 3,
  },
  {
    title: "title 2",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title 3",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 50,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 14,
    rating: 3,
  },
  {
    title: "abc title",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title of book",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 60,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 75,
    rating: 3,
  },
  {
    title: "title 1",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 25,
    rating: 3,
  },
  {
    title: "title 2",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title 3",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 50,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 14,
    rating: 3,
  },
  {
    title: "abc title",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title of book",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 60,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 75,
    rating: 3,
  },
  {
    title: "title 1",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 25,
    rating: 3,
  },
  {
    title: "title 2",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title 3",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 50,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 14,
    rating: 3,
  },
  {
    title: "abc title",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title of book",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 60,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 75,
    rating: 3,
  },
  {
    title: "title 1",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 25,
    rating: 3,
  },
  {
    title: "title 2",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title 3",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 50,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 14,
    rating: 3,
  },
  {
    title: "abc title",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 10,
    rating: 1,
  },
  {
    title: "title of book",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 60,
    rating: 4,
  },
  {
    title: "book title",
    author: "author 1",
    image: "placeholder-book-cover.jpg",
    price: 75,
    rating: 3,
  },
];

export default function Shop() {
  const [filteredData, setFilteredData] = useState(placeholderBooks);
  console.log(filteredData);
  const { currentItems, pageCount, handlePageClick } = usePagination(
    filteredData,
    10
  );
  const handleOnChange = (e) => {
    setFilteredData(
      placeholderBooks.filter((book) =>
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
