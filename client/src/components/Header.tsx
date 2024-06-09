import { NavLink, Link, useNavigate } from "react-router-dom";

import { logout } from "../redux/features/auth/authSlice";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const userLinks = [
  {
    text: "My Profile",
    link: "profile",
    icon: "profileIcon",
  },
  {
    text: "Order History",
    link: "orders",
    icon: "historyIcon",
  },
  {
    text: "Wishlist",
    link: "wishlist",
    icon: "wishlistIcon",
  },
];

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector((state) => state.auth.value);
  console.log(isUserLoggedIn);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const genericHamburgerLine = `h-1 w-5 ${
    isMenuOpen ? "my-1" : "my-[2px]"
  }  rounded-full bg-black transition ease transform duration-300 `;

  const activeLink =
    "relative  before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-accent ";

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    setIsUserDropdownOpen(false);
    navigate("/signin");
  };

  const handleUserIconClick = () => {
    // if no user redirect to sign in,
    if (!isUserLoggedIn) {
      navigate("/signin");
    }
    // if user logged in, show dropdown
    if (isUserLoggedIn) {
      setIsUserDropdownOpen((prev) => !prev);
    }
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto">
        <div className="md:col-span-3">
          {/* <!-- Logo --> */}
          <Link
            className="flex  items-center text-xl font-semibold"
            to="/"
            aria-label="Brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#fca5a5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            <div className="flex flex-col  -ml-[2px] font-bold">
              <span className="-mb-[5px] tracking-widest  text-sm">BOOK</span>
              <span className="tracking-tighter text-xs -mt-[2px]">CORNER</span>
            </div>
          </Link>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Icon Links Group --> */}
        <div className="flex items-center gap-x-3 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3 ">
          {/* heart icon */}
          {isUserLoggedIn && (
            <Link
              to="/account/wishlist" // link to wishlist page
              className="py-2 px-2 inline-flex items-center gap-x-2 text-black relative"
            >
              {/* count only visible when logged in and counter higher than 0 */}
              <div className="w-4 h-4 bg-accent text-white rounded-full flex justify-center items-center text-xs absolute top-[1px] right-[1px]">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </Link>
          )}
          {/* cart icon */}
          {isUserLoggedIn && (
            <Link
              to="/cart" // link to cart page
              className="py-2 px-2 inline-flex items-center gap-x-2  text-black relative"
            >
              {/* count only visible when logged in and counter higher than 0 */}
              <div className="w-4 h-4 bg-accent text-white rounded-full flex justify-center items-center text-xs absolute top-[1px] right-[1px]">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </Link>
          )}
          {/* user icon */}
          <div className="relative">
            <button
              onClick={handleUserIconClick}
              type="button"
              className={`py-1 px-1 inline-flex items-center gap-x-2  text-black  ${
                isUserLoggedIn && "bg-accent rounded-full text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </button>
            {/* <!-- User Links --> */}
            <div
              className={` ${
                isUserDropdownOpen ? "block" : "hidden"
              }  overflow-hidden transition-all duration-300 basis-full grow bg-accent absolute top-10 right-0 p-3 rounded-xl `}
            >
              <div className="flex flex-col gap-y-4 gap-x-0 w-max">
                {userLinks.map((link) => (
                  <div key={link.link}>
                    <Link
                      to={`account/${link.link}`}
                      onClick={() => setIsUserDropdownOpen(false)}
                      aria-current="page"
                      className="text-white flex gap-1 hover:scale-105"
                    >
                      <img src={`/${link.icon}.svg`} alt="" />
                      <span>{link.text}</span>
                    </Link>
                  </div>
                ))}
                <div className="text-white flex gap-1 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                    <path d="M15 12h-12l3 -3" />
                    <path d="M6 15l-3 -3" />
                  </svg>
                  <button className="text-left" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- End User Links --> */}
          </div>

          {/* hamburger on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
              className="flex flex-col h-10 w-10 group size-[38px]  justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>
        {/* <!-- End Icon Links Group --> */}

        {/* <!-- Links --> */}
        <div
          className={` ${
            isMenuOpen ? "block" : "hidden"
          }  overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {links.map((link) => (
              <div key={link.link}>
                <NavLink
                  to={link.link}
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive
                      ? activeLink
                      : "group transition-all duration-300 ease-in-out inline-block text-black hover:text-gray-600"
                  }
                >
                  <span className="bg-left-bottom bg-gradient-to-l from-accent to-accent bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                    {link.text}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- End Links --> */}
      </nav>
    </header>
  );
}

// credit: underline on hover - https://csstailwind.com/underline-on-hover-left-to-right-right-to-left-with-animation/

// credit: animated hamburger - https://konradstaniszewski.com/blog/tailwind-hamburger

// credit: https://www.preline.co/examples/navigations-navbars.html#header-center-aligned-in-lime
