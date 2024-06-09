import React from "react";
import { Link } from "react-router-dom";

const dummyData = [
  {
    item: "book 1",
    price: 20,
    quantity: 1,
  },
  {
    item: "book 2",
    price: 40,
    quantity: 2,
  },
  {
    item: "book 3",
    price: 25,
    quantity: 1,
  },
];

export default function Cart() {
  const subtotal = dummyData.reduce((acc, curr) => {
    return (acc = acc + curr.quantity * curr.price);
  }, 0);
  return (
    // <!-- Invoice -->
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div className="sm:w-11/12 lg:w-3/4 mx-auto">
        <span className="text-xl font-bold text-accent pb-2 ">Your Cart</span>
        {/* <!-- Table --> */}
        <div className="mt-6">
          <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
            <div className="hidden sm:grid sm:grid-cols-5">
              <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Item
              </div>
              <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Price
              </div>
              <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Quantity
              </div>
              <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Subtotal
              </div>
            </div>

            <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

            {dummyData.map((item) => (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div className="col-span-full sm:col-span-2">
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Item
                  </h5>
                  <p className="font-medium text-gray-800 dark:text-neutral-200">
                    {item.item}
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Price
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">
                    ${item.price}
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Quantity
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">
                    {/* <!-- Input Number --> */}
                    <div
                      className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="flex items-center gap-x-1.5">
                        <button
                          type="button"
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          data-hs-input-number-decrement=""
                        >
                          <svg
                            className="flex-shrink-0 size-3.5"
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
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                        <input
                          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                          type="text"
                          //   value="0"
                          data-hs-input-number-input=""
                          defaultValue={item.quantity}
                        />
                        <button
                          type="button"
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          data-hs-input-number-increment=""
                        >
                          <svg
                            className="flex-shrink-0 size-3.5"
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
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* <!-- End Input Number --> */}
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Subtotal
                  </h5>
                  <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}

            <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>
          </div>
        </div>
        {/* <!-- End Table --> */}

        {/* <!-- Flex --> */}
        <div className="mt-8 flex sm:justify-end">
          <div className="w-full max-w-2xl sm:text-end space-y-2">
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                  Subtotal:
                </dt>
                <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                  ${subtotal}
                </dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                  Shipping:
                </dt>
                <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                  $10.00
                </dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                  Total:
                </dt>
                <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                  ${subtotal + 10}
                </dd>
              </dl>
            </div>
            {/* <!-- End Grid --> */}
          </div>
        </div>
        {/* <!-- End Flex --> */}

        <div className="mt-8 sm:mt-12 flex justify-end">
          <Link
            to={"/checkout"}
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none "
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
