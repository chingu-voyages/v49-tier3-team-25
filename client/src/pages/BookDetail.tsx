import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export default function BookDetail() {
  const { title } = useParams();
  const allBooks = useAppSelector((state: RootState) => state.books.value);

  const thisBook = allBooks.find((book) => book.title == title);
  const [isFav, setIsFav] = useState(false);

  console.log(thisBook);
  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="md:grid md:grid-cols-2 md:items-center gap-6">
        <div className="flex items-center justify-center">
          <img
            className="rounded-xl"
            src={thisBook.imageUrls[2]}
            alt="Image Description"
          />
        </div>
        {/* <!-- End Col --> */}

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* <!-- Title --> */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                {thisBook.title}
              </h2>
              <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                {thisBook.author}
              </span>

              <p className="text-gray-500 dark:text-neutral-500">
                {thisBook.description}
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- List --> */}
            <ul className="flex flex-row gap-5 ">
              <li className="flex space-x-3">
                {/* <!-- Input Number --> */}
                <div
                  className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
                  data-hs-input-number=""
                >
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      data-hs-input-number-decrement=""
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
                      value="0"
                      data-hs-input-number-input=""
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      data-hs-input-number-increment=""
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
              </li>

              <li className="flex space-x-3">
                <button className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none">
                  Add to Cart
                </button>
              </li>

              <li className="flex space-x-3">
                <button onClick={() => setIsFav((prev) => !prev)} className="">
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
              </li>
            </ul>
            {/* <!-- End List --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
