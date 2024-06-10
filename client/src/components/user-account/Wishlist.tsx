import { useEffect } from "react";
import usePagination from "../../hooks/usePagination";
import BookCard from "../BookCard";
import Pagination from "../Pagination";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setWishlist } from "../../redux/features/wishlist/wishlistSlice";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.value);
  const wishlist = useAppSelector((state) => state.wishlist.value);
  console.log(wishlist);
  const { currentItems, pageCount, handlePageClick } = usePagination(
    wishlist,
    3
  );

  useEffect(() => {
    // const getWishlist = async () => {
    //   try {
    //     const res = await axios(
    //       `${import.meta.env.VITE_BACKEND_URL}/wishlists`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${user?.token}`,
    //         },
    //       }
    //     );
    //     console.log(res);
    //     dispatch(setWishlist(res.data.data));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getWishlist();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent pb-2 ">
            Wishlist ({wishlist.length})
          </span>
          {/* <button
            onClick={addAllToCart}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            Add All To Cart
          </button> */}
        </div>

        {/* book cards */}
        <div className="flex gap-2 flex-wrap">
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
