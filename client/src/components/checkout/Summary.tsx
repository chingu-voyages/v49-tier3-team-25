import { useAppSelector } from "../../redux/hooks";

export default function Summary() {
  const cart = useAppSelector((state) => state.cart.value);

  const subtotal = cart?.reduce((acc, curr) => {
    return (acc = acc + curr.quantity * 25);
  }, 0);

  return (
    // <!-- Invoice -->
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div className="sm:w-11/12 lg:w-3/4 mx-auto">
        {/* <!-- Table --> */}
        <div className="mt-6">
          <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
            <span className="text-xl font-bold text-accent pb-2 ">Summary</span>

            <div className="hidden sm:grid sm:grid-cols-5">
              <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Item
              </div>
              <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Price
              </div>
              <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Qty
              </div>
              <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Subtotal
              </div>
            </div>

            <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

            {cart.map((item) => (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div className="col-span-full sm:col-span-2">
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Item
                  </h5>
                  <p className="font-medium text-gray-800 dark:text-neutral-200">
                    {item?.book?.title}
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Price
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">$25</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Quantity
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">
                    {item.quantity}
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Subtotal
                  </h5>
                  <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                    ${item.quantity * 25}
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
      </div>
    </div>
  );
}
