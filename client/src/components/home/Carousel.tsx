import React from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    // <!-- Slider -->
    <div
      data-hs-carousel='{
    "loadingclassNamees": "opacity-0",
    "isAutoPlay": true
  }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide">
            <div className="flex flex-col justify-start h-full bg-gray-100 py-6 px-14 ">
              <span className="text-4xl text-gray-800 transition duration-700 ">
                New Arrivals
              </span>
              <Link to={"/shop"} className="text-accent mb-4">
                See More
              </Link>
              <div className="flex gap-3 justify-center items-center">
                <img src="placeholder-book-cover.jpg" alt="" className="" />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden sm:block md:block lg:block"
                />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden md:block lg:block"
                />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex flex-col justify-start h-full bg-gray-100 py-6 px-14 ">
              <span className="text-4xl text-gray-800 transition duration-700 ">
                Popular Collections
              </span>
              <Link to={"/shop"} className="text-accent mb-4">
                See More
              </Link>
              <div className="flex gap-3 justify-center items-center">
                <img src="placeholder-book-cover.jpg" alt="" className="" />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden sm:block md:block lg:block"
                />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden md:block lg:block"
                />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex flex-col justify-start h-full bg-gray-100 py-6 px-14 ">
              <span className="text-4xl text-gray-800 transition duration-700 ">
                Trending Books
              </span>
              <Link to={"/shop"} className="text-accent mb-4">
                See More
              </Link>
              <div className="flex gap-3 justify-center items-center">
                <img src="placeholder-book-cover.jpg" alt="" className="" />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden sm:block md:block lg:block"
                />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden md:block lg:block"
                />
                <img
                  src="placeholder-book-cover.jpg"
                  alt=""
                  className="hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg "
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg "
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        <span className="hs-carousel-active:bg-accent hs-carousel-active:border-accent size-3 border border-gray-400 rounded-full cursor-pointer "></span>
        <span className="hs-carousel-active:bg-accent hs-carousel-active:border-accent size-3 border border-gray-400 rounded-full cursor-pointer "></span>
        <span className="hs-carousel-active:bg-accent hs-carousel-active:border-accent size-3 border border-gray-400 rounded-full cursor-pointer "></span>
      </div>
    </div>
    // <!-- End Slider -->
  );
}
