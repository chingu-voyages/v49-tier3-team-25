import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import usePagination from "../../../hooks/usePagination";

const transactionData = [
  {
    order: 1234,
    date: "August 12,2023",
    total: 10,
    status: "Completed",
  },
  {
    order: 8964,
    date: "May 12,2023",
    total: 20,
    status: "In Progress",
  },
  {
    order: 4567,
    date: "July 12,2023",
    total: 30,
    status: "Cancelled",
  },
  {
    order: 7543,
    date: "August 12,2023",
    total: 10,
    status: "Completed",
  },
  {
    order: 1247,
    date: "May 12,2023",
    total: 20,
    status: "In Progress",
  },
  {
    order: 4052,
    date: "July 12,2023",
    total: 30,
    status: "Cancelled",
  },
  {
    order: 1234,
    date: "August 12,2023",
    total: 10,
    status: "Completed",
  },
  {
    order: 8964,
    date: "May 12,2023",
    total: 20,
    status: "In Progress",
  },
  {
    order: 4567,
    date: "July 12,2023",
    total: 30,
    status: "Cancelled",
  },
  {
    order: 7543,
    date: "August 12,2023",
    total: 10,
    status: "Completed",
  },
  {
    order: 1247,
    date: "May 12,2023",
    total: 20,
    status: "In Progress",
  },
  {
    order: 4052,
    date: "July 12,2023",
    total: 30,
    status: "Cancelled",
  },
];

export default function OrderHistory() {
  const { currentItems, pageCount, handlePageClick } = usePagination(
    transactionData,
    5
  );

  return (
    <div className="max-w-[52rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 px-4 sm:px-6 lg:px-8 pt-5 mt-5">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-accent">Order History</h2>
              </div>
              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start"></th>

                    <th scope="col" className="pe-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Order
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Date
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Total
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Status
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {currentItems.map((transaction) => (
                    <tr key={transaction.order}>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 py-2"></div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="pe-6 py-2">
                          <Link
                            className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                            to={`/account/orders/${transaction.order}`}
                          >
                            #{transaction.order}
                          </Link>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-neutral-400">
                            {transaction.date}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-neutral-400">
                            ${transaction.total}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span
                            className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium ${
                              transaction.status === "Completed" &&
                              "bg-teal-100 text-teal-800"
                            } ${
                              transaction.status === "In Progress" &&
                              "bg-orange-100 text-orange-800"
                            } ${
                              transaction.status === "Cancelled" &&
                              "bg-red-100 text-red-800"
                            } rounded-full `}
                          >
                            {transaction.status === "Completed" && (
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                            )}
                            {transaction.status === "In Progress" && (
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                              </svg>
                            )}
                            {transaction.status === "Cancelled" && (
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                              </svg>
                            )}
                            {transaction.status}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <!-- End Table --> */}

              {/* <!-- Pagination */}
              <div className="px-6 py-4  gap-3 flex justify-center items-center border-t border-gray-200 ">
                <Pagination
                  handlePageClick={handlePageClick}
                  pageCount={pageCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
