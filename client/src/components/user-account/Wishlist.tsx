import usePagination from "../../hooks/usePagination";
import BookCard from "../BookCard";
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

  const addAllToCart = () => {
    // logic add to cart
  };

  const removeFromWishlist = () => {
    // logic to remove from cart
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent pb-2 ">
            Wishlist ({placeholderBooks.length})
          </span>
          <button
            onClick={addAllToCart}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            Add All To Cart
          </button>
        </div>

        {/* book cards */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          {currentItems.map((book) => (
            <BookCard book={book} />
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
