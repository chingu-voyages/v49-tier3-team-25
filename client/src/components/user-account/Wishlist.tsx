import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination";

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
    title: "this is a title",
    author: "author 2",
    image: "placeholder-book-cover.jpg",
    price: 15,
    rating: 1,
  },
  {
    title: "lorem",
    author: "author 3",
    image: "placeholder-book-cover.jpg",
    price: 40,
    rating: 4,
  },
];

export default function Wishlist() {
  const { currentItems, pageCount, handlePageClick } = usePagination(
    placeholderBooks,
    3
  );

  const handleClick = () => {
    // logic add to cart
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent pb-2 ">
            Wishlist ({placeholderBooks.length})
          </span>
          <button
            onClick={handleClick}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            Add All To Cart
          </button>
        </div>

        {/* book cards */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          {currentItems.map((book) => (
            <div className="flex flex-col bg-white border shadow-sm rounded-xl ">
              <div className="flex justify-center items-center">
                <img
                  className="w-1/2 h-auto mt-3 "
                  src={`/${book.image}`}
                  alt="Image Description"
                />
              </div>
              <div className="flex flex-col gap-1 p-4 md:p-5">
                <h3 className="font-bold text-gray-800 ">{book.title}</h3>
                <p className="text-sm text-gray-500 ">{book.author}</p>
                <p className=" text-xs font-medium uppercase text-gray-500 ">
                  ${book.price}
                </p>

                {/* <!-- Rating --> */}
                <div className="flex items-center">
                  {Array(book.rating)
                    .fill(0)
                    .map((star) => (
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
                    .map((star) => (
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

                <a
                  className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Pagination */}
        <div className="px-6 py-4  gap-3 flex justify-center items-center border-t border-gray-200 ">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </>
  );
}
