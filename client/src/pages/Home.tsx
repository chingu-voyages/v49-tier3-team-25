import React, { useEffect, useState } from "react";
import Carousel from "../components/home/Carousel";
import BookList from "../components/home/BookList";
import GenreList from "../components/home/GenreList";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllBooks } from "../redux/features/books/booksSlice";
import { RootState } from "../redux/store";
import { setCredentials } from "../redux/features/auth/authSlice";

export default function Home() {
  const [error, setError] = useState("");
  const allBooks = useAppSelector((state: RootState) => state.books.value);
  const wishlistBooks = useAppSelector(
    (state: RootState) => state.wishlist.value
  );

  const dispatch = useAppDispatch();
  console.log(allBooks);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(setCredentials(user));
    }
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
      } catch (err) {
        console.log(err);
        setError("Sorry, books cannot be viewed at this time.");
      }
    };

    if (allBooks.length === 0) {
      getAllBooks();
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
