import React, { useEffect } from "react";
import Carousel from "../components/home/Carousel";
import BookList from "../components/home/BookList";
import GenreList from "../components/home/GenreList";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllBooks } from "../redux/features/books/booksSlice";
import { RootState } from "../redux/store";
import { setCredentials } from "../redux/features/auth/authSlice";

export default function Home() {
  const allBooks = useAppSelector((state: RootState) => state.books.value);
  const dispatch = useAppDispatch();
  console.log(allBooks);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(setCredentials(user));
    }

    const getAllBooks = async () => {
      try {
        const books = await axios(
          "https://chingu-bookstore.up.railway.app/books"
        );
        console.log(books.data.data);
        dispatch(setAllBooks(books.data.data));
      } catch (err) {
        console.log(err);
      }
    };

    getAllBooks();
  }, []);

  return (
    <div className="px-4 md:px-8 mx-auto flex flex-col gap-12">
      <Carousel />
      <GenreList />
      <BookList title={"Best Selling Books"} bookData={allBooks} />
      <BookList title={"Explore Our Books"} bookData={allBooks} />
    </div>
  );
}
