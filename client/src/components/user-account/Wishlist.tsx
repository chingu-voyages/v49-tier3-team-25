// import usePagination from "../../hooks/usePagination";
import BookCard from "../shared/BookCard";
// import Pagination from "../shared/Pagination";
import { useAppSelector } from "../../redux/hooks";
import { Book } from "../../lib/types";

export default function Wishlist() {
  const wishlist = useAppSelector((state) => state.wishlist.value);
  // console.log(wishlist);
  // const { currentItems, pageCount, handlePageClick } = usePagination(
  //   wishlist,
  //   3
  // );

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent pb-2 ">
            Wishlist ({wishlist.length})
          </span>
        </div>

        {/* book cards */}
        <div className="flex gap-2 flex-wrap">
          {wishlist?.map((book: Book) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
        {/* <!-- Pagination */}
        {/* <div className="px-6 py-4  gap-3 flex justify-center items-center border-t border-gray-200 ">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div> */}
      </div>
    </>
  );
}
