import { useEffect, useState } from "react";
import Carousel from "../components/home/Carousel";
import BookList from "../components/home/BookList";
import GenreList from "../components/home/GenreList";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllBooks } from "../redux/features/books/booksSlice";
import { RootState } from "../redux/store";
import { setCredentials } from "../redux/features/auth/authSlice";
import { setCart } from "../redux/features/cart/cartSlice";
import { setWishlist } from "../redux/features/wishlist/wishlistSlice";

export default function Home() {
  const [error, setError] = useState("");
  const allBooks = useAppSelector((state: RootState) => state.books.value);
  const cart = useAppSelector((state: RootState) => state.cart.value);
  const wishlistBooks = useAppSelector(
    (state: RootState) => state.wishlist.value
  );
  const dispatch = useAppDispatch();

  // NEED TO FIX - added if statement to call functions as the useeffect seems to run every time homepage is viewed?
  useEffect(() => {
    // check if user token in local storage
    const user = JSON.parse(localStorage.getItem("user") || '""');
    // console.log(user);
    if (user) {
      dispatch(setCredentials(user));
    }

    // books
    const getAllBooks = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BACKEND_URL}/books`);
        // const booksToSet = res.data.data.slice(3, res.data.data.length + 1);
        dispatch(setAllBooks(res.data.data));
      } catch (err) {
        console.log(err);
        setError("Sorry, books cannot be viewed at this time.");
      }
    };

    if (allBooks.length === 0) {
      getAllBooks();
    }

    // cart
    const getCart = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BACKEND_URL}/carts`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        dispatch(setCart(res.data.data.items));
      } catch (err) {
        console.log(err);
      }
    };

    if (cart.length === 0) {
      getCart();
    }

    // wishlist
    const getWishlist = async () => {
      try {
        const res = await axios(
          `${import.meta.env.VITE_BACKEND_URL}/wishlists`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        dispatch(setWishlist(res.data.data));
      } catch (err) {
        console.log(err);
      }
    };
    if (wishlistBooks.length === 0) {
      getWishlist();
    }
  }, []);

  return (
    <div className="px-4 md:px-8 mx-auto flex flex-col gap-12">
      <Carousel />
      <GenreList />
      {error ? (
        <p className="text-accent text-center">{error}</p>
      ) : (
        <div className=" flex flex-col gap-6">
          {" "}
          <BookList title={"Best Selling Books"} bookData={allBooks} />
          <BookList
            title={"Explore Our Books"}
            bookData={[...allBooks].reverse()}
          />
        </div>
      )}
    </div>
  );
}
