// note this component used at the moment - no customers api

import { useState } from "react";
import Pagination from "../../../components/shared/Pagination";
import usePagination from "../../../hooks/usePagination";
import { Link } from "react-router-dom";

const mockData = [
  {
    name: "Jane Smith",
    email: "jane@email.com",
    phone: "+123 456 678",
    created: "July 6, 2024",
  },
  {
    name: "Amy Lee",
    email: "amy@email.com",
    phone: "+123 456 678",
    created: "July 6, 2024",
  },
  {
    name: "Kate Johns",
    email: "kate@email.com",
    phone: "+123 456 678",
    created: "July 6, 2024",
  },
  {
    name: "Sam Lake",
    email: "sam@email.com",
    phone: "+123 456 678",
    created: "July 6, 2024",
  },
  {
    name: "Sarah abc",
    email: "sarah@email.com",
    phone: "+123 456 678",
    created: "July 6, 2024",
  },
  {
    name: "Mary Lorem",
    email: "mary@email.com",
    phone: "+123 456 678",
    created: "Apr 6, 2024",
  },
  {
    name: "Tim Lksmf",
    email: "tim@email.com",
    phone: "+123 456 678",
    created: "Mar 6, 2024",
  },
  {
    name: "Susan Jtusvf",
    email: "susan@email.com",
    phone: "+123 456 678",
    created: "Feb 6, 2024",
  },
  {
    name: "Micahel Sfges",
    email: "micahel@email.com",
    phone: "+123 456 678",
    created: "June 6, 2024",
  },
  {
    name: "Peter Qwert",
    email: "peter@email.com",
    phone: "+123 456 678",
    created: "April 6, 2024",
  },
];

export default function Table() {
  const [filteredData, setFilteredData] = useState(mockData);
  const { currentItems, pageCount, handlePageClick } = usePagination(
    filteredData,
    5
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredData(
      mockData.filter((customer) =>
        customer.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  const sortTitleAZ = () => {
    setFilteredData((prev) =>
      // @ts-expect-error - not sure how to fix
      [...prev].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  const sortTitleZA = () => {
    setFilteredData((prev) =>
      // @ts-expect-error - not sure how to fix
      [...prev].sort((a, b) => b.title.localeCompare(a.title))
    );
  };

  const sortAuthorAZ = () => {
    setFilteredData((prev) =>
      // @ts-expect-error - not sure how to fix
      [...prev].sort((a, b) => a.author.localeCompare(b.author))
    );
  };

  const sortAuthorZA = () => {
    setFilteredData((prev) =>
      // @ts-expect-error - not sure how to fix
      [...prev].sort((a, b) => b.author.localeCompare(a.author))
    );
  };

  const deleteCustomer = () => {
    // delete logic
  };

  return (
    // <!-- Table Section -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                {/* <!-- Input --> */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="hs-as-table-product-review-search"
                    className="sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-as-table-product-review-search"
                      name="hs-as-table-product-review-search"
                      className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Search"
                      onChange={handleOnChange}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                      <svg
                        className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* <!-- End Input --> */}

                {/* select and filter */}
                <div className="flex flex-col md:flex-row gap-3">
                  {/* select */}
                  <div
                    className="hs-dropdown [--placement:bottom-right] relative inline-block"
                    data-hs-dropdown-auto-close="inside"
                  >
                    <button
                      id="hs-as-table-table-filter-dropdown"
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    >
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-switch-vertical"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 8l4 -4l4 4" />
                        <path d="M7 4l0 9" />
                        <path d="M13 16l4 4l4 -4" />
                        <path d="M17 10l0 10" />
                      </svg>
                      Sort
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                      aria-labelledby="hs-as-table-table-filter-dropdown"
                    >
                      <div className="divide-y divide-gray-200 dark:divide-neutral-700 ">
                        <label
                          htmlFor="hs-as-filters-dropdown-all"
                          className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                          onClick={sortTitleAZ}
                        >
                          <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                            Title A-Z
                          </span>
                        </label>
                        <label
                          htmlFor="hs-as-filters-dropdown-published"
                          className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                          onClick={sortTitleZA}
                        >
                          <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                            Title Z-A
                          </span>
                        </label>
                        <label
                          htmlFor="hs-as-filters-dropdown-pending"
                          className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                          onClick={sortAuthorAZ}
                        >
                          <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                            Author A-Z
                          </span>
                        </label>
                        <label
                          htmlFor="hs-as-filters-dropdown-pending"
                          className="flex py-2.5 px-3 hover:bg-gray-200 cursor-pointer"
                          onClick={sortAuthorZA}
                        >
                          <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                            Author Z-A
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Customer
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Phone
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Created
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Action
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {/* @ts-expect-error - not shows in app at the moment */}
                  {currentItems.map((customer) => (
                    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      {/* customer name and email */}
                      <td className="size-px whitespace-nowrap align-top">
                        <div className="flex items-center gap-x-3  p-6">
                          <div className="grow">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                              {customer.name}
                            </span>
                            <span className="block text-sm text-gray-500 dark:text-neutral-500">
                              {customer.email}{" "}
                            </span>
                          </div>
                        </div>
                      </td>
                      {/* phone */}
                      <td className="size-px whitespace-nowrap align-top">
                        <span className="text-sm text-gray-600 dark:text-neutral-400 block p-6">
                          {customer.phone}{" "}
                        </span>
                      </td>
                      {/* created on */}
                      <td className="size-px whitespace-nowrap align-top">
                        <span className="text-sm text-gray-600 dark:text-neutral-400 block p-6">
                          {customer.created}{" "}
                        </span>
                      </td>
                      {/* actions */}
                      <td className="size-px whitespace-nowrap align-top">
                        <div className="block p-6">
                          <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                            <button
                              id="hs-table-dropdown-2"
                              type="button"
                              className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            >
                              <svg
                                className="size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                              </svg>
                            </button>
                            <div
                              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                              aria-labelledby="hs-table-dropdown-2"
                            >
                              <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">
                                  Actions
                                </span>
                                <Link
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                  to={`/admin/customers/${customer.name}`}
                                >
                                  Customer Details
                                </Link>
                              </div>
                              <div className="py-2 first:pt-0 last:pb-0">
                                <button
                                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                  onClick={deleteCustomer}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <!-- End Table --> */}

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div className="max-w-sm space-y-3"></div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <Pagination
                      handlePageClick={handlePageClick}
                      pageCount={pageCount}
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
}
