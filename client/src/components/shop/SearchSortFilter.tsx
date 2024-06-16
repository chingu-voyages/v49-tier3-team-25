import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortTitleAZ: () => void;
  sortTitleZA: () => void;
  sortAuthorAZ: () => void;
  sortAuthorZA: () => void;
  checkedGenres: () => void;
}

export default function SearchSortFilter({
  handleOnChange,
  sortTitleAZ,
  sortTitleZA,
  sortAuthorAZ,
  sortAuthorZA,
  checkedGenres,
}: Props) {
  const allBooks = useAppSelector((state: RootState) => state.books.value);
  console.log(allBooks);

  // const getGenres = allBooks.map((book) => book.genres).flat();
  // const allGenres = [...new Set(getGenres)].sort();

  const allGenres = [
    "All",
    "Biography",
    "Classic",
    "Crime",
    "Drama",
    "Fiction",
    "Mystery",
    "Romance",
    "Thriller",
    "adventure",
    "anthropology",
    "biography",
    "business",
    "classics",
    "dystopian",
    "fantasy",
    "fiction",
    "history",
    "mystery",
    "philosophy",
    "physics",
    "productivity",
    "romance",
    "science",
    "science fiction",
    "thriller",
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      {/* <!-- Input --> */}
      <div className="sm:col-span-1">
        <label htmlFor="hs-as-table-product-review-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            id="hs-as-table-product-review-search"
            name="hs-as-table-product-review-search"
            className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search by title or author"
            onChange={handleOnChange}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
            <svg
              className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>
      {/* <!-- End Input --> */}

      <div className="flex gap-2 justify-center items-center">
        {/* filter */}
        <div
          className="hs-dropdown [--placement:bottom-right] relative inline-block "
          data-hs-dropdown-auto-close="inside"
        >
          <button
            id="hs-as-table-table-filter-dropdown"
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
            Filter Genre
            <span className="ps-2 text-xs font-semibold text-blue-600 border-s border-gray-200 dark:border-neutral-700 dark:text-blue-500">
              1
            </span>
          </button>
          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
            aria-labelledby="hs-as-table-table-filter-dropdown"
          >
            <div className="divide-y divide-gray-200 dark:divide-neutral-700">
              {allGenres.map((genre) => (
                <label
                  htmlFor={`hs-as-filters-dropdown-${genre}`}
                  className="flex py-2.5 px-3"
                >
                  <input
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-as-filters-dropdown-published"
                    onChange={checkedGenres}
                    name={genre}
                  />
                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                    {genre}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* sort */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* select */}
          <div
            className="hs-dropdown [--placement:bottom-right] relative inline-block"
            data-hs-dropdown-auto-close="inside"
          >
            <button
              id="hs-as-table-table-filter-dropdown"
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-switch-vertical"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 8l4 -4l4 4" />
                <path d="M7 4l0 9" />
                <path d="M13 16l4 4l4 -4" />
                <path d="M17 10l0 10" />
              </svg>
              Sort
            </button>
            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
              aria-labelledby="hs-as-table-table-filter-dropdown"
            >
              <div className="divide-y divide-gray-200 dark:divide-neutral-700 ">
                <label
                  htmlFor="hs-as-filters-dropdown-all"
                  className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                  onClick={sortTitleAZ}
                >
                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                    Title A-Z
                  </span>
                </label>
                <label
                  htmlFor="hs-as-filters-dropdown-published"
                  className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                  onClick={sortTitleZA}
                >
                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                    Title Z-A
                  </span>
                </label>
                <label
                  htmlFor="hs-as-filters-dropdown-pending"
                  className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                  onClick={sortAuthorAZ}
                >
                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                    Author A-Z
                  </span>
                </label>
                <label
                  htmlFor="hs-as-filters-dropdown-pending"
                  className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                  onClick={sortAuthorZA}
                >
                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                    Author Z-A
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
