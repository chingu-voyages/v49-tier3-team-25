import { CarouselData } from "../types/components/Carousel";
import { BookCard } from "./BookCard";

export const BookList = ({
  title,
  books,
}: {
  title: string;
  books: CarouselData[];
}) => {
  const maxBooks = books.slice(0, 5);

  return (
    <div className="flex-col max-w-7xl justify-between h-[350px] my-10 gap-2 mx-auto sm:w-[400px] md:w-[600px] lg:w-[800px]  xl:w-[1024px]">
      <div className="w-full flex justify-between items-center my-5">
        <h1 className="text-xl font-bold my-5">{title}</h1>
        <button className="bg-accent hover:bg-accentDarker text-white h-auto px-5 py-2 rounded-md">View All</button>
      </div>
      <div className="flex justify-between">
        {maxBooks.map((book, index) => (
          <BookCard key={index} title={book.title} price={book.price} />
        ))}
      </div>
    </div>
  );
};
