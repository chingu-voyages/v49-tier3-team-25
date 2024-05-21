import { useState, useEffect } from "react";
import { CarouselData } from "../types/components/Carousel";

export default function HeroCarousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: CarouselData[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex w-full justify-center h-[350px] my-20">
      <div className="overflow-hidden relative sm:w-[400px] md:w-[600px] lg:w-[800px]  xl:w-[1024px] h-full">
        <div
          className="flex transition-transform ease-out duration-500 h-full"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="flex bg-neutral-900">
            {slides.map((data, index) => (
              <div
                key={index}
                className="flex border border-black p-6 overflow-hidden sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1024px]"
              >
                <div className="flex-col w-[45%] p-6 text-white">
                  <h1 className="lg:text-4xl mb-6">{data.title}</h1>
                  <p className="hidden lg:block text-sm mb-6">
                    {data.description}
                  </p>

                  <div className="flex items-center justify-between text-white z-20">
                    <button className="underline">Read More</button>
                  </div>
                </div>
                <div className="w-[60%] h-[90%] flex p-6 justify-between">
                  {data.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      className="object-cover sm:w-[10px] md:w-[70px] lg:w-[110px] xl:w-[150px] h-full"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-5 top-1/2" id="testing">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          ></button>
        </div>
        <div className="absolute right-5 top-1/2" id="testing">
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          ></button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
