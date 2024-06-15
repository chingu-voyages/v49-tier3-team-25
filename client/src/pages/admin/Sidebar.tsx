import homeIcon from "/dashboard/home.svg";
import orderManagementIcon from "/dashboard/shopping-cart.svg";
import customerIcon from "/dashboard/customer.svg";
import addProductIcon from "/dashboard/add-product.svg";
import allProductsIcon from "/dashboard/all-products.svg";
import { Link, NavLink } from "react-router-dom";
import DashboardBreadcrumb from "./dashboard/DashboardBreadcrumb";

const Sidebar = () => {
  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <DashboardBreadcrumb
              homeElement={"Book Corner"}
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
            />
          </ol>
          <button
            aria-controls="application-sidebar"
            aria-label="Sidebar"
            className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            data-hs-overlay="#application-sidebar"
            type="button"
          >
            <svg
              className="flex-shrink-0 size-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
            </svg>
            <span className="sr-only">Sidebar</span>
          </button>
        </div>
      </div>
      <div
        className="hs-overlay [--auto-close:lg]  hs-overlay-open:translate-x-0  -translate-x-full transition-all duration-300 transform  w-[260px]  hidden  fixed inset-y-0 start-0 z-[60]  bg-white border-e border-gray-200  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-neutral-800 dark:border-neutral-700 "
        id="application-sidebar"
      >
        <div className="px-8 pt-4">
          {/* <!-- Logo --> */}
          <Link
            className="flex  items-center text-xl font-semibold"
            to="/"
            aria-label="Brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#fca5a5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-books"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M5 8h4" />
              <path d="M9 16h4" />
              <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
              <path d="M14 9l4 -1" />
              <path d="M16 16l3.923 -.98" />
            </svg>
            <div className="flex flex-col  -ml-[2px] font-bold">
              <span className="-mb-[5px] tracking-widest  text-sm">BOOK</span>
              <span className="tracking-tighter text-xs -mt-[2px]">CORNER</span>
            </div>
          </Link>
          {/* <!-- End Logo --> */}
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            <small className="py-3">Main Menu</small>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${
                    isActive && "bg-gray-100"
                  } text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`
                }
                to="/admin"
                end
              >
                <img src={homeIcon} alt="" width={20} height={20} />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${
                    isActive && "bg-gray-100"
                  } text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`
                }
                to="/admin/orders"
                end
              >
                <img src={orderManagementIcon} alt="" width={20} height={20} />
                Order Management
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${
                    isActive && "bg-gray-100"
                  } text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`
                }
                to="/admin/customers"
                end
              >
                <img src={customerIcon} alt="" width={20} height={20} />
                Customers
              </NavLink>
            </li>

            <small className="py-3">Products</small>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${
                    isActive && "bg-gray-100"
                  } text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`
                }
                to="/admin/products/add"
                end
              >
                <img src={addProductIcon} alt="" width={20} height={20} />
                Add Product
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${
                    isActive && "bg-gray-100"
                  } text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`
                }
                to="/admin/products"
                end
              >
                <img src={allProductsIcon} alt="" width={20} height={20} />
                All Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
