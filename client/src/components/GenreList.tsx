export const GenreList = ({ genre }: { genre: string[] }) => {
  const maxGenres = genre.slice(0, 6);
  return (
    <div className="flex-col max-w-7xl justify-between my-10 gap-2 mx-auto sm:w-[400px] md:w-[600px] lg:w-[800px]  xl:w-[1024px]">
      <div className="w-full flex justify-between items-center my-5">
        <h1 className="text-xl font-bold my-5">Browse By Genre</h1>
        <button className="bg-accent hover:bg-accentDarker text-white h-auto px-5 py-2 rounded-md">
          View All
        </button>
      </div>
      <div className="flex justify-between">
        {maxGenres.map((genre, index)=>(
        <div className="lg:w-32 xl:w-36 aspect-square flex justify-center items-center border border-black" key={index}>
            <p className="mx-auto">{genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
