import aboutBookImg from "/about-book-img.jpg";

export default function About() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img className="rounded-xl" src={aboutBookImg} alt="Book shelf" />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* <!-- Title --> */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                About Us
              </h2>
              {/* <!-- Text --> */}
              <p className="text-gray-500 dark:text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                atque quasi, sit expedita adipisci facilis repudiandae
                perferendis doloremque aspernatur ratione, officiis nemo animi
                tempore voluptatum cupiditate pariatur asperiores voluptate. A.
              </p>
              <p className="text-gray-500 dark:text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                atque quasi, sit expedita adipisci facilis repudiandae
                perferendis doloremque aspernatur ratione, officiis nemo animi
                tempore voluptatum cupiditate pariatur asperiores voluptate. A.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
