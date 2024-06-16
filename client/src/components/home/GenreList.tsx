import GenreCard from "./GenreCard";
import { Link } from "react-router-dom";

const genres = [
  {
    genre: "crime",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-book"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6l0 13" />
        <path d="M12 6l0 13" />
        <path d="M21 6l0 13" />
      </svg>
    ),
  },
  {
    genre: "mystery",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-search"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    ),
  },
  {
    genre: "history",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-history"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8l0 4l2 2" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
      </svg>
    ),
  },
  {
    genre: "adventure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-air-balloon"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 19m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        <path d="M12 16c3.314 0 6 -4.686 6 -8a6 6 0 1 0 -12 0c0 3.314 2.686 8 6 8z" />
        <path d="M12 9m-2 0a2 7 0 1 0 4 0a2 7 0 1 0 -4 0" />
      </svg>
    ),
  },
  {
    genre: "biography",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-old"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 21l-1 -4l-2 -3v-6" />
        <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
        <path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M7 17l-2 4" />
        <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
      </svg>
    ),
  },
  {
    genre: "fantasy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        <path d="M19 11h2m-1 -1v2" />
      </svg>
    ),
  },
  {
    genre: "fiction",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-book"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6l0 13" />
        <path d="M12 6l0 13" />
        <path d="M21 6l0 13" />
      </svg>
    ),
  },
  {
    genre: "classics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
        <path d="M9 8h6" />
      </svg>
    ),
  },
];

export default function GenreList() {
  const mobileSlicedGenreData = genres.slice(1, 4);
  const tabletSlicedGenreData = genres.slice(1, 8);
  const desktopSlicedGenreData = genres.slice(1, 12);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent pb-2 ">Genres</span>
          <Link
            to={"/shop"}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            View All
          </Link>
        </div>

        {/* book cards */}
        <div className="flex justify-center items-center md:hidden lg:hidden xl:hidden gap-2 mt-2">
          {mobileSlicedGenreData.map((genre, index) => (
            <div key={index}>
              <GenreCard genre={genre} key={genre.genre} />
            </div>
          ))}
        </div>
        <div className="hidden justify-center items-center md:flex lg:hidden xl:hidden gap-2 mt-2">
          {tabletSlicedGenreData.map((genre) => (
            <GenreCard genre={genre} key={genre.genre} />
          ))}
        </div>
        <div className=" hidden justify-center items-center lg:flex gap-2 md:gap-5 mt-2">
          {desktopSlicedGenreData.map((genre) => (
            <GenreCard genre={genre} key={genre.genre} />
          ))}
        </div>
      </div>
    </>
  );
}
