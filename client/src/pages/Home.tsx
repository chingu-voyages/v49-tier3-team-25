import { BookList } from "../components/BookList";
import Footer from "../components/Footer";
import { GenreList } from "../components/GenreList";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import { carouselData } from "../types/components/Carousel";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex-col w-screen">
        <HeroCarousel slides={carouselData} />
        <GenreList
          genre={[
            "Mystery",
            "Comedy",
            "Romance",
            "Sci-fi",
            "Fantasy",
            "Horror",
            "Comics"
          ]}
        />
        <BookList books={carouselData} title="Trending Books" />
        <BookList books={carouselData} title="Explore Our Books" />
      </div>
      <Footer />
    </>
  );
};
