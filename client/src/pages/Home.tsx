import React from "react";
import Carousel from "../components/home/Carousel";
import BookList from "../components/home/BookList";
import GenreList from "../components/home/GenreList";

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
];

export default function Home() {
  return (
    <div className="px-4 md:px-8 mx-auto flex flex-col gap-12">
      <Carousel />
      <GenreList />
      <BookList title={"Best Selling Books"} bookData={placeholderBooks} />
      <BookList title={"Explore Our Books"} bookData={placeholderBooks} />
    </div>
  );
}
