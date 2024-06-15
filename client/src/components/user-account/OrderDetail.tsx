import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Item } from "../../lib/types";

const orderActivityData = [
  {
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-receipt"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
      </svg>
    ),
    text: "Your order has been confirmed",
    date: true,
  },
  {
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-package"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12l0 9" />
        <path d="M12 12l-8 -4.5" />
        <path d="M16 5.25l-8 4.5" />
      </svg>
    ),
    text: "Your order has been packed",
    date: true,
  },
  {
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-package-export"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12v9" />
        <path d="M12 12l-8 -4.5" />
        <path d="M15 18h7" />
        <path d="M19 15l3 3l-3 3" />
      </svg>
    ),
    text: "Your order has been picked up for delivery",
    date: true,
  },
  {
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
        <path d="M3 9l4 0" />
      </svg>
    ),
    text: "Your order is on its way",
    date: false,
  },
  {
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-confetti"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 5h2" />
        <path d="M5 4v2" />
        <path d="M11.5 4l-.5 2" />
        <path d="M18 5h2" />
        <path d="M19 4v2" />
        <path d="M15 9l-1 1" />
        <path d="M18 13l2 -.5" />
        <path d="M18 19h2" />
        <path d="M19 18v2" />
        <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
      </svg>
    ),
    text: "Your order has been delivered",
    date: false,
  },
];

export default function OrderDetail() {
  const { id } = useParams();
  const location = useLocation();
  const thisOrder = location.state.state;
  console.log(thisOrder);
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      {/* invoice number and total */}
      <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 ">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 ">#{id}</h2>
          <span className="text-xs text-gray-500 ">
            {thisOrder.items.length} Products &#8226; Ordered on{" "}
            {thisOrder.orderDate.slice(0, 10)}
          </span>
        </div>
        <div className="inline-flex gap-x-2">
          <h2 className="text-3xl font-semibold text-accent ">
            ${location.state.total}
          </h2>
        </div>
      </div>

      {/* stepper */}
      <ul className="relative flex flex-col md:flex-row gap-2">
        {orderActivityData.map((item) => (
          <li
            key={item.text}
            className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
          >
            <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
              <span
                className={`size-7 flex justify-center items-center flex-shrink-0 ${
                  item.date ? "bg-green-200" : "bg-red-200"
                } font-medium text-gray-800 rounded-full `}
              >
                {item.icon}
              </span>
              <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden d"></div>
            </div>
            <div className="grow md:grow-0 md:mt-3 pb-5">
              <span className="block text-sm font-medium text-gray-800 ">
                {item.text}
              </span>
              <p className="text-xs text-gray-500 ">{item.date} </p>
            </div>
          </li>
        ))}
      </ul>

      {/* <!-- Table --> */}
      <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 ">
        <div className="hidden sm:grid sm:grid-cols-5">
          <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase ">
            Item
          </div>
          <div className="text-start text-xs font-medium text-gray-500 uppercase ">
            Price
          </div>
          <div className="text-start text-xs font-medium text-gray-500 uppercase ">
            Quantity
          </div>
          <div className="text-end text-xs font-medium text-gray-500 uppercase ">
            Total
          </div>
        </div>

        <div className="hidden sm:block border-b border-gray-200 "></div>

        {thisOrder.items.map((product: Item) => (
          <div
            key={product.book.title}
            className="grid grid-cols-3 sm:grid-cols-5 gap-2"
          >
            <div className="col-span-full sm:col-span-2">
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase ">
                Item
              </h5>
              <p className="font-medium text-gray-800 ">{product.book.title}</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase ">
                Qty
              </h5>
              <p className="text-gray-800 ">{product.quantity}</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase ">
                Rate
              </h5>
              <p className="text-gray-800 ">
                {" "}
                ${product.book.salePrice * product.quantity}
              </p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase ">
                Amount
              </h5>
              <p className="sm:text-end text-gray-800 ">
                ${product.book.salePrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex sm:justify-end pb-5">
        <div className="w-full max-w-2xl sm:text-end space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500 ">Total:</dt>
              <dd className="col-span-2 font-medium text-gray-800 ">
                ${location.state.total}
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500 ">Amount paid:</dt>
              <dd className="col-span-2 font-medium text-gray-800 ">
                ${location.state.total}
              </dd>
            </dl>

            <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
              <dt className="col-span-3 text-gray-500 ">Due balance:</dt>
              <dd className="col-span-2 font-medium text-gray-800 ">$0.00</dd>
            </dl>
          </div>
        </div>
      </div>

      {/* billing etc details */}
      <div className="grid md:grid-cols-2 gap-3 border-t border-gray-200  py-5">
        <div>
          <div className="grid space-y-3">
            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-36 max-w-[200px] text-gray-500 ">
                Billing details:
              </dt>
              <dd className="font-medium text-gray-800 ">
                <span className="block font-semibold">
                  {thisOrder.recipientProfile.firstName}{" "}
                  {thisOrder.recipientProfile.lastName}
                </span>
                <address className="not-italic font-normal">
                  {thisOrder.recipientAddress.city}
                  <br />
                  {thisOrder.recipientAddress.street}
                  <br />
                  {thisOrder.recipientAddress.state}{" "}
                  {thisOrder.recipientAddress.zipcode}
                  <br />
                </address>
              </dd>
            </dl>

            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-36 max-w-[200px] text-gray-500 ">
                Shipping details:
              </dt>
              <dd className="font-medium text-gray-800 ">
                <span className="block font-semibold">
                  {thisOrder.recipientProfile.firstName}{" "}
                  {thisOrder.recipientProfile.lastName}
                </span>
                <address className="not-italic font-normal">
                  {thisOrder.recipientAddress.city}
                  <br />
                  {thisOrder.recipientAddress.street}
                  <br />
                  {thisOrder.recipientAddress.state}{" "}
                  {thisOrder.recipientAddress.zipcode}
                  <br />
                </address>
              </dd>
            </dl>
          </div>
        </div>

        <div>
          <div className="grid space-y-3">
            <dl className="grid sm:flex gap-x-3 text-sm">
              <dt className="min-w-36 max-w-[200px] text-gray-500 ">
                Order Notes:
              </dt>
              <dd className="font-medium text-gray-800 ">
                <p className="not-italic font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, inventore?
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
