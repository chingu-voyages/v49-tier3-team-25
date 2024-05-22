import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-neutral-950">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="pb-5">
          {/* <!-- Logo --> */}
          <Link
            className="flex  text-xl font-semibold"
            to="/"
            aria-label="Brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-books"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M5 8h4" />
              <path d="M9 16h4" />
              <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
              <path d="M14 9l4 -1" />
              <path d="M16 16l3.923 -.98" />
            </svg>
            <div className="flex flex-col  -ml-[2px] font-bold text-white">
              <span className="-mb-[5px] tracking-widest  text-sm">BOOK</span>
              <span className="tracking-tighter text-xs -mt-[2px]">CORNER</span>
            </div>
          </Link>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Grid --> */}
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Address */}
          <div className="col-span-1">
            <div className="">
              <h4 className="font-semibold text-gray-100">Contact Us</h4>
              <div className="mt-3 grid space-y-3">
                <p className="text-gray-400">
                  12 Reading Lane, <br />
                  Word 1234.
                </p>
                <p className="text-gray-400">read@bookmail.com</p>
                <p className="text-gray-400">+12345-67890-12345</p>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Account</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/signup"
                >
                  Sign Up / Log in
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/"
                >
                  My Account
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/"
                >
                  Wishlist
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/"
                >
                  Order History
                </Link>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Quick Links</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/"
                >
                  Shop
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  to="/"
                >
                  Contact
                </Link>{" "}
              </p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>
            <form>
              <div className="mt-4 flex items-center gap-2 flex-row sm:gap-3 bg-white rounded-lg p-2">
                <div className="w-full">
                  <label htmlFor="subscribe-input" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="text"
                    id="subscribe-input"
                    name="subscribe-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-neutral-950 rounded-full text-white  disabled:opacity-50 disabled:pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right text-white"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                New books or big discounts. Never spam.
              </p>
            </form>
          </div>
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-5 sm:mt-12 flex sm:justify-end ">
          {/* <!-- Social Brands --> */}
          <div>
            <Link
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              to="#"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
            <Link
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              to="#"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </Link>
            <Link
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              to="#"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </Link>
            <Link
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              to="#"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
            <Link
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              to="#"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
              </svg>
            </Link>
          </div>
          {/* <!-- End Social Brands --> */}
        </div>

        <div className="pt-5 mt-5 border-t border-gray-200">
          <div className="flex justify-centre items-center flex-col gap-2">
            <p className="text-sm text-gray-400">
              <Link to="https://github.com/chingu-voyages/v49-tier3-team-25">
                V49-Tier3-Team25 Github
              </Link>
            </p>
            <p className="text-xs text-gray-400">
              Figma Community Files Acknowledgements:
              <Link
                to="https://www.figma.com/community/file/1219312065205187851"
                className="underline"
              >
                {" "}
                MD Rimel
              </Link>
              ,
              <Link
                to="https://www.figma.com/community/file/1271751279140741643/clicon-ecommerce-marketplace-website-figma-template-community?searchSessionId=lw5puqu4-tt7lc69ffa"
                className="underline"
              >
                Templatecookie
              </Link>
              ,
              <Link
                to="https://www.figma.com/community/file/1307034280604606485/admin-dashboard-e-commerce-design"
                className="underline"
              >
                {" "}
                Shristi Singh
              </Link>
              ,
              <Link
                to="https://www.figma.com/community/file/1232451162003418746/evaly-e-commerce-dashboard"
                className="underline"
              >
                {" "}
                Pomaline Moses Olanrewaju
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
