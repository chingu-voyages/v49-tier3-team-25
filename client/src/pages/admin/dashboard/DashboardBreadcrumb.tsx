// https://medium.com/@kcabading/creating-a-breadcrumb-component-in-a-next-js-app-router-a0ea24cdb91a

// Put the below where you want the breadcrumb

{
  /* <Breadcrumb
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
          /> */
}

import React, { ReactNode } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export default function Breadcrumb({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) {
  const paths = useLocation();
  let pathNames = paths.pathname.split("/").filter((path: string) => path);

  return (
    <div className="">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link to={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses =
            paths.pathname === href
              ? `${listClasses} ${activeClasses}`
              : listClasses;
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link to={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
