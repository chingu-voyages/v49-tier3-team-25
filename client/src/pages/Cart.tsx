import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "axios";
import { removeProductFromCart } from "../redux/features/cart/cartSlice";
import Count from "../components/cart/Count";

export default function Cart() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.value);
  const cart = useAppSelector((state) => state.cart.value);
  // console.log(cart);
  const subtotal = cart?.reduce((acc, curr) => {
    return (acc = acc + curr.quantity * curr.book.salePrice);
  }, 0);

  const remove = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const updatedCart = cart.filter((item) => item.book._id !== id);
      dispatch(removeProductFromCart(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };

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

            {cart.length > 0 &&
              cart.map((item) => (
                <div
                  className="grid grid-cols-3 sm:grid-cols-5 gap-2"
                  key={item.book._id}
                >
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Item
                    </h5>
                    <div className="flex gap-1">
                      <button
                        className="flex-shrink-0"
                        onClick={() => remove(item.book._id)}
                      >
                        <svg
                          className="flex-shrink-0 size-3 text-red-500 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                        </svg>
                      </button>
                      <p className="font-medium text-gray-800 dark:text-neutral-200">
                        {item?.book?.title}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Price
                    </h5>
                    <p className="text-gray-800 dark:text-neutral-200">
                      ${item?.book?.salePrice}
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Quantity
                    </h5>
                    <p className="text-gray-800 dark:text-neutral-200">
                      <Count item={item} />
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Subtotal
                    </h5>
                    <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                      ${item?.quantity * item?.book?.salePrice}
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
