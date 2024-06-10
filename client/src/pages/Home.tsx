import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [error, setError] = useState("");
  const allBooks = useAppSelector((state: RootState) => state.books.value);
  const wishlistBooks = useAppSelector(
    (state: RootState) => state.wishlist.value
  );
  const user = useAppSelector((state) => state.auth.value);
  const cart = useAppSelector((state) => state.cart.value);

  const dispatch = useAppDispatch();
  console.log(allBooks);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    // if (user) {
    //   dispatch(setCredentials(user));
    // }
  }, [dispatch]);

  useEffect(() => {
    console.log("fetched");
    const getAllBooks = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BACKEND_URL}/books`);
        // const allBooks = res.data.data.map((book) => ({
        //   ...book,
        //   isFav: false,
        // }));
        const allBooks = [...wishlistBooks, ...res.data.data];
        console.log(allBooks);
        dispatch(setAllBooks(allBooks));
        setFetched(true);
      } catch (err) {
        console.log(err);
        setError("Sorry, books cannot be viewed at this time.");
      }
    };

    if (allBooks.length === 0) {
      getAllBooks();
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(setCredentials(user));
    }

    const getCart = async () => {
      try {
        const res = await axios(`${import.meta.env.VITE_BACKEND_URL}/carts`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        console.log(res);
        dispatch(setCart(res.data.data.items));
      } catch (err) {
        console.log(err);
      }
    };

    if (cart.length === 0) {
      getCart();
    }

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

        console.log(res);
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
        <div>
          {" "}
          <BookList title={"Best Selling Books"} bookData={allBooks} />
          <BookList title={"Explore Our Books"} bookData={allBooks} />
        </div>
      )}
    </div>
  );
}
