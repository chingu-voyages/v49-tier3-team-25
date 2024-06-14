import { Link } from "react-router-dom";
import Pagination from "../shared/Pagination";
import usePagination from "../../hooks/usePagination";
import { Transaction } from "../../lib/types";
import { useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setOrders } from "../../redux/features/orders/ordersSlice";

export default function OrderHistory() {
  const user = useAppSelector((state: RootState) => state.auth.value);
  const orders = useAppSelector((state: RootState) => state.orders.value);
  const dispatch = useAppDispatch();
  const { currentItems, pageCount, handlePageClick } = usePagination(orders, 5);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await axios(
          `${import.meta.env.VITE_BACKEND_URL}/orders`,

          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        console.log(res.data.data);
        dispatch(setOrders(res.data.data));
      } catch (err) {
        console.log(err);
      }
    };

    getAllOrders();
  }, []);

  return (
    <div className="max-w-[52rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <h2 className="text-xl font-bold text-accent pb-2">My Orders</h2>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
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
                  {currentItems.map(
                    (transaction: Transaction, index: number) => (
                      <tr key={transaction.order}>
                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 py-2"></div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="pe-6 py-2">
                            <Link
                              className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                              to={`/account/orders/${index + 1}`}
                              state={{ state: transaction }}
                            >
                              #
                              {Math.floor(Math.random() * 10 + 100) +
                                transaction.items[0].book.sku.slice(0, 3)}
                            </Link>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              {transaction.orderDate.slice(0, 10)}
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
                                transaction.currentStatus === "Completed" &&
                                "bg-teal-100 text-teal-800"
                              } ${
                                transaction.currentStatus === "PENDING" &&
                                "bg-orange-100 text-orange-800"
                              } ${
                                transaction.currentStatus === "Cancelled" &&
                                "bg-red-100 text-red-800"
                              } rounded-full `}
                            >
                              {transaction.currentStatus === "Completed" && (
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
                              {transaction.currentStatus === "PENDING" && (
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
                              {transaction.currentStatus === "Cancelled" && (
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
                              {transaction.currentStatus}
                            </span>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
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
