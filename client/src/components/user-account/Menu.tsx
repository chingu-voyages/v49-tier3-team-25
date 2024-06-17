import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useState } from "react";

const menuLinks = [
  {
    text: "Profile",
    link: "profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    ),
  },
  {
    text: "Orders",
    link: "orders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-history"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8l0 4l2 2" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
      </svg>
    ),
  },
  {
    text: "Wishlist",
    link: "wishlist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    ),
  },
];

export default function Menu() {
  const dispatch = useAppDispatch();
  const [, setIsUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const activeLink =
    "inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg text-white bg-accent";

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    setIsUserDropdownOpen(false);
    navigate("/signin");
  };

  return (
    <div className="max-w-xs flex flex-col">
      {menuLinks.map((link) => (
        <NavLink
          key={link.link}
          to={`/account/${link.link}`}
          className={({ isActive }) =>
            isActive
              ? activeLink
              : "inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-500 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:text-white hover:bg-accent"
          }
        >
          {link.icon}
          {link.text}
        </NavLink>
      ))}
      <div className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-500 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:text-white hover:bg-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
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
        <button onClick={handleLogout} className="text-left">
          Logout
        </button>
      </div>
    </div>
  );
}
