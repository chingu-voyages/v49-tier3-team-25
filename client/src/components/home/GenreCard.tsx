import { Link } from "react-router-dom";

export default function GenreCard({ genre }) {
  return (
    <Link to={"/shop"}>
      <div className="bg-accent w-24 h-24 flex flex-col justify-center items-center text-white hover:bg-accentDarker">
        {genre.icon}
        <span>{genre.genre}</span>
      </div>
    </Link>
  );
}
