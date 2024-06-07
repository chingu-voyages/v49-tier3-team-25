import booksContactImg from "/books-contact.jpg";

export default function Contact() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="md:grid md:grid-cols-3 md:items-center md:gap-5">
        {/* <!-- Image --> */}
        <div>
          <img
            className="rounded-xl object-cover h-1/4 md:h-screen"
            src={booksContactImg}
            alt="Image Description"
          />
        </div>

        {/* <!-- Form --> */}
        <div className="mt-5 sm:mt-10 lg:mt-0 col-span-2">
          <div className="space-y-6 sm:space-y-8">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="max-w-xl mx-auto">
                <div className="">
                  <form>
                    <div className="grid gap-4 ">
                      {/* name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="py-3 px-4 block w-full bg-gray-100 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>
                      {/* email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-700 font-medium "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="py-3 px-4 block w-full bg-gray-100 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>
                      {/* phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm text-gray-700 font-medium "
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          className="py-3 px-4 block w-full bg-gray-100 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>
                      {/* message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm text-gray-700 font-medium "
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={2}
                          className="py-3 px-4 block w-full bg-gray-100 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                        ></textarea>
                      </div>
                    </div>
                    {/* button */}
                    <div className="mt-6 grid">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Send inquiry
                      </button>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        We'll get back to you in 1-2 business days.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
