import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCart } from "../../redux/features/cart/cartSlice";
import axios from "axios";

export default function ConfirmationModal() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.value);
  const cart = useAppSelector((state) => state.cart.value);

  const remove = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      dispatch(setCart([]));
    } catch (err) {
      console.log(err);
    }
  };

  const clearCart = () => {
    cart.forEach((item) => {
      remove(item.book._id);
    });
  };

  return (
    <>
      <div className="text-center">
        <button
          type="submit"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
          data-hs-overlay="#hs-subscription-with-image"
        >
          Make Payment
        </button>
      </div>

      <div
        id="hs-subscription-with-image"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
            <div className="absolute top-2 z-[10] end-2">
              <button
                type="button"
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-subscription-with-image"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="aspect-w-16 aspect-h-8">
              <img
                className="w-full object-cover h-40 rounded-t-xl"
                src="/book.jpeg"
                alt="Image Description"
              />
            </div>

            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
                Yay! 🎉
              </h3>
              <p className="text-gray-500 dark:text-neutral-500">
                Thank you for your order. You book/s will arrive soon!
              </p>

              <div className="mt-6 flex justify-center gap-x-4">
                <Link
                  onClick={clearCart}
                  to={"/"}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#hs-subscription-with-image"
                >
                  Go back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
