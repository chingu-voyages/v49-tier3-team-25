import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Breadcrumb from "../Breadcrumb";

export default function UserAccountLayout() {
  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumb
          homeElement={"Home"}
          separator={
            <svg
              className="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          }
          activeClasses="text-sm font-semibold text-gray-800"
          containerClasses="flex py-5"
          listClasses="text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          capitalizeLinks
        />
        <div>
          <span>
            Welcome <span className="text-accent">User</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-1 ">
          <Menu />
        </div>
        <div className="col-span-2 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
