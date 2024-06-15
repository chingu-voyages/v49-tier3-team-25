import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import axios from "axios";
import { addBookToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { removeBookFromWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { addProductToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Book } from "../../lib/types";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector((state) => state.auth.value);
  const wishlist = useAppSelector((state) => state.wishlist.value);
  const cart = useAppSelector((state) => state.cart.value);
  const location = useLocation();
  // const warningToast = (text: string) => toast.warn(text);
  const errorToast = (text: string) => toast.error(text);
  const successToast = (text: string) => toast.success(text);

  const addToCart = async () => {
    const alreadyInCart = cart.find((item) => item.book._id == book._id);
    if (alreadyInCart) {
      errorToast("Book already in cart. Go to cart to change quantity");
      return;
    }
    if (isUserLoggedIn) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/carts/${book._id}/1`,
          {},
          {
            headers: {
              Authorization: `Bearer ${isUserLoggedIn?.token}`,
            },
          }
        );

        const bookToAdd = {
          book,
          quantity: res.data.data.quantity,
        };

        dispatch(addProductToCart(bookToAdd));
        successToast("Book has been added to cart!");
        if (location.pathname == "/account/wishlist") {
          removeFromWishlist();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          console.error(error.response);
          if (
            error.response &&
            error?.response.data.message ===
              "Quantity remains unchanged. No update needed."
          ) {
            errorToast("This book of this quantity already in cart");
          } else {
            errorToast("Please login to add to cart");
          }
        } else {
          console.error(error);
        }
      }
    }
  };

  const addToWishlist = async () => {
    if (isUserLoggedIn) {
      try {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/wishlists/${book._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${isUserLoggedIn?.token}`,
            },
          }
        );

        dispatch(addBookToWishlist(book));
        successToast("Book added to wishlist");
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          // @ts-expect-error - axios not recognise data
          if (error.response.data.code === 400) {
            errorToast("Book already in Wishlist");
            // @ts-expect-error - axios not recognise data
          } else if (error.response.data.code === 500) {
            errorToast("Please login to add to Wishlist");
          }
        } else {
          console.error(error);
        }
      }
    }
  };

  const removeFromWishlist = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/wishlists/${book._id}`,
        {
          headers: {
            Authorization: `Bearer ${isUserLoggedIn?.token}`,
          },
        }
      );

      const updatedWishlist = wishlist.filter((item) => item._id !== book._id);
      dispatch(removeBookFromWishlist(updatedWishlist));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl relative w-56">
      <Link to={`/shop/${book.title}`} className="cursor-pointer">
        <div className="flex justify-center items-center ">
          <img
            className=" mt-3 h-52 object-cover w-36"
            src={book.imageUrls[0]}
            alt="Image Description"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1 p-4 md:p-5">
        <Link
          to={`/shop/${book.title}`}
          className="cursor-pointer font-bold text-gray-800 line-clamp-1"
        >
          {book.title}
        </Link>
        <p className="text-sm text-gray-500 line-clamp-1">{book.author}</p>
        <p className=" text-xs font-medium uppercase text-gray-500 ">
          ${book.salePrice}
        </p>

        <button
          className="text-xs mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 md:text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
          onClick={addToCart}
        >
          Add to Cart
        </button>

        <button
          className="text-xs mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 md:text-sm font-semibold rounded-lg border disabled:opacity-50 disabled:pointer-events-none  border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100  "
          onClick={
            location.pathname === "/account/wishlist"
              ? removeFromWishlist
              : addToWishlist
          }
        >
          {location.pathname === "/account/wishlist"
            ? "Remove from Wishlist"
            : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}
