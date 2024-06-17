import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  genre: {
    icon: ReactNode;
    genre: string;
  };
}

export default function GenreCard({ genre }: Props) {
  return (
    <Link
      to={"/shop"}
      state={{
        genre: genre.genre,
      }}
    >
      <div className="bg-accent w-24 h-24 flex flex-col justify-center items-center text-white hover:bg-accentDarker">
        {genre.icon}
        <span>{genre.genre}</span>
      </div>
    </Link>
  );
}
