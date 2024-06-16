import { useState } from "react";
import SearchSortFilter from "../components/shop/SearchSortFilter";
import BookCard from "../components/shared/BookCard";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Book } from "../lib/types";

export default function Shop() {
  const allBooks: Book[] = useAppSelector(
    (state: RootState) => state.books.value
  );

  const [filteredData, setFilteredData] = useState(allBooks);
  const [genreForm, setGenreForm] = useState({
    Biography: false,
    Classic: false,
    Drama: false,
    Fiction: false,
    Mystery: false,
    Romance: false,
    Thriller: false,
    adventure: false,
    anthropology: false,
    biography: false,
    business: false,
    classics: false,
    dystopian: false,
    fantasy: false,
    fiction: false,
    history: false,
    mystery: false,
    philosophy: false,
    physics: false,
    productivity: false,
    romance: false,
    science: false,
    scienceFiction: false,
    thriller: false,
  });
  // const { currentItems } = usePagination(filteredData: false, 8);
  const [x, setx] = useState();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredData(
      allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(e.target.value) ||
          book.author.toLowerCase().includes(e.target.value)
      )
    );
  };

  const sortTitleAZ = () => {
    setFilteredData((prev) =>
      [...prev].sort((a: false, b) => a.title.localeCompare(b.title))
    );
  };

  const sortTitleZA = () => {
    setFilteredData((prev) =>
      [...prev].sort((a: false, b) => b.title.localeCompare(a.title))
    );
  };

  const sortAuthorAZ = () => {
    setFilteredData((prev) =>
      [...prev].sort((a, b) => a.author.localeCompare(b.author))
    );
  };

  const sortAuthorZA = () => {
    setFilteredData((prev) =>
      [...prev].sort((a, b) => b.author.localeCompare(a.author))
    );
  };

  const FilterGenre = (key) => {
    const checkedBooks = allBooks.filter((book) => book.genres.includes(key));
    console.log(checkedBooks);
    setx((prev) => [...prev, ...checkedBooks]);
    console.log(x.flat(4));
    setFilteredData(x.flat(4));
  };

  const checkedGenres = (e) => {
    const name = e.target.name;
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // setGenreForm({
    //   ...genreForm,
    //   [name]: value,
    // });
    // console.log(genreForm);

    // const keys = Object.keys(genreForm).filter((k) => genreForm[k]);
    // console.log(keys);
    // console.log(keys);
    const keys = ["Crime", "Drama"];

    keys.forEach((key) => FilterGenre(key));
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <span className="text-xl font-bold text-accent mb-5">Explore Books</span>
      <div className="mt-5">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 p-5 flex flex-col">
          <SearchSortFilter
            handleOnChange={handleOnChange}
            sortTitleAZ={sortTitleAZ}
            sortTitleZA={sortTitleZA}
            sortAuthorAZ={sortAuthorAZ}
            sortAuthorZA={sortAuthorZA}
            checkedGenres={checkedGenres}
          />
          {/* book cards */}
          <div className="flex flex-wrap justify-center items-center  gap-2 mt-2">
            {filteredData.map((book: Book, index: number) => (
              <div key={index}>
                <BookCard book={book} />
              </div>
            ))}
            {}
          </div>
          {/* <!-- Pagination */}
          {/* <div className=px-6 py-4  gap-3 flex justify-center items-center border-t border-gray-200 >
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
