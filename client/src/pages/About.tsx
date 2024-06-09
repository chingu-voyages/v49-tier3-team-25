import aboutBookImg from "/about-book-img.jpg";

export default function About() {
  return (
    //
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 md:pr-0 lg:pl-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        {/* <!-- Title & Text--> */}
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className=" text-3xl lg:text-4xl font-bold text-accent   ">
                About Us
              </h2>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                atque quasi, sit expedita adipisci facilis repudiandae
                perferendis doloremque aspernatur ratione, officiis nemo animi
                tempore voluptatum cupiditate pariatur asperiores voluptate. A.
              </p>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                atque quasi, sit expedita adipisci facilis repudiandae
                perferendis doloremque aspernatur ratione, officiis nemo animi
                tempore voluptatum cupiditate pariatur asperiores voluptate. A.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div className="mt-5 md:mt-0">
          <img
            className="rounded-xl md:rounded-r-none object-cover md:h-[100%-1rem]"
            src={aboutBookImg}
            alt="Book shelf"
          />
        </div>
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
