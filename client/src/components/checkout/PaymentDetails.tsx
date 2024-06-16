import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { setCart } from "../../redux/features/cart/cartSlice";
import { addOrderToOrders } from "../../redux/features/orders/ordersSlice";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PaymentDetails() {
  const user = useAppSelector((state: RootState) => state.auth.value);
  const dispatch = useAppDispatch();
  const successToast = () => toast.success(<ConfirmationToast />);

  const [pending, setPending] = useState(false);
  const [, setError] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    street: "",
    zipCode: "",
    cardHolderName: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    try {
      setPending(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/orders/checkout`,
        {
          recipientProfile: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
          },
          recipientAddress: {
            street: form.street,
            city: form.city,
            state: form.state,
            zipCode: form.zipCode,
          },
          paymentMethod: {
            type: "DEBIT_CARD",
            bankName: "bank",
            cardHolderName: form.cardHolderName,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log(res);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        street: "",
        zipCode: "",
        cardHolderName: "",
        cardNumber: "",
        date: "",
        cvv: "",
      });
      dispatch(setCart([]));
      dispatch(addOrderToOrders(res.data.data));

      successToast();
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    // <!-- Card Section -->
    <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Card --> */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
        <h2 className="text-2xl  font-bold text-accent dark:text-neutral-200">
          Billing Details
        </h2>

        <form onSubmit={(e) => handlePayment(e)}>
          {/* <!-- Section --> */}
          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <label
              htmlFor="af-payment-billing-contact"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Personal Details
            </label>

            <div className="mt-2 space-y-3">
              <input
                id="af-payment-billing-contact"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="First Name"
                value={form.firstName}
                name="firstName"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Last Name"
                value={form.lastName}
                name="lastName"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Email"
                value={form.email}
                name="email"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Phone Number"
                value={form.phone}
                name="phone"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* <!-- End Section --> */}

          {/* <!-- Section --> */}
          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <label
              htmlFor="af-payment-billing-address"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Shipping address
            </label>

            <div className="mt-2 space-y-3">
              <input
                id="af-payment-billing-address"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Street Address"
                value={form.street}
                name="street"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="City"
                value={form.city}
                name="city"
                onChange={handleChange}
                required
              />
              <div className="grid sm:flex gap-3">
                <input
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="State"
                  value={form.state}
                  name="state"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Zip Code"
                  value={form.zipCode}
                  name="zipCode"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          {/* <!-- End Section --> */}

          {/* <!-- Section --> */}
          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <label
              htmlFor="af-payment-payment-method"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Payment method
            </label>

            <div className="mt-2 space-y-3">
              <input
                id="af-payment-payment-method"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Name on Card"
                value={form.cardHolderName}
                name="cardHolderName"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Card Number"
                value={form.cardNumber}
                name="cardNumber"
                onChange={handleChange}
                required
              />
              <div className="grid sm:flex gap-3">
                <input
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Expiration Date"
                  value={form.date}
                  name="date"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="CVV Code"
                  value={form.cvv}
                  name="cvv"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          {/* <!-- End Section --> */}

          <div className="mt-5 flex justify-end gap-x-2">
            <Link
              to={"/cart"}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Go back
            </Link>

            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
              data-hs-overlay="#hs-subscription-with-image"
            >
              {pending ? "Waiting..." : "Make Payment"}
            </button>
          </div>
        </form>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
}

const ConfirmationToast = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <p>Payment Successful!</p>
      <Link
        to={"/"}
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
      >
        Go Back Home
      </Link>
    </div>
  );
};
