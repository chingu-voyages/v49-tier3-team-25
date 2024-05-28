import logoIcon from '/dashboard/logo.svg'
import homeIcon from '/dashboard/home.svg'
import orderManagementIcon from '/dashboard/shopping-cart.svg'
import customerIcon from '/dashboard/customer.svg'
import addProductIcon from '/dashboard/add-product.svg'
import allProductsIcon from '/dashboard/all-products.svg'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <>
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex justify-between items-center py-2">
                <ol className="ms-3 flex items-center whitespace-nowrap">
                    <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                    Application Layout
                    <svg
                        className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        />
                    </svg>
                    </li>
                    <li
                    aria-current="page"
                    className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                    >
                    Dashboard
                    </li>
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
                    <span className="sr-only">
                    Sidebar
                    </span>
                </button>
                </div>
            </div>
            <div
                className="hs-overlay [--auto-close:lg]  hs-overlay-open:translate-x-0  -translate-x-full transition-all duration-300 transform  w-[260px]  hidden  fixed inset-y-0 start-0 z-[60]  bg-white border-e border-gray-200  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-neutral-800 dark:border-neutral-700 "
                id="application-sidebar"
            >
                <div className="px-8 pt-4">
                <a
                    aria-label="Preline"
                    className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                    href="../templates/admin/index.html"
                >
                    <img
                        src={logoIcon}
                        alt=""
                        width={200}
                        height={200}
                    />
                </a>
                </div>
                <nav
                className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open=""
                >

                    <ul className="space-y-1.5">

                        <small className='py-3'>
                            Main Menu
                        </small>

                        <li>
                            <NavLink
                                className={({ isActive }) => `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${isActive && 'bg-gray-100'} text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`}
                                to="/admin"
                                end
                            >
                                <img
                                    src={homeIcon}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                Dashboard
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                className={({ isActive }) => `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${isActive && 'bg-gray-100'} text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`}
                                to="/admin/order-management"
                                end
                            >
                                <img
                                    src={orderManagementIcon}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                Order Management
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${isActive && 'bg-gray-100'} text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`}
                                to="/admin/customers"
                                end
                            >
                                <img
                                    src={customerIcon}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                Customers
                            </NavLink>
                        </li>
                        
                        <small className='py-3'>
                            Products
                        </small>

                        <li>
                            <NavLink
                                className={({ isActive }) => `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${isActive && 'bg-gray-100'} text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`}
                                to="/admin/products/add"
                                end
                            >
                                <img
                                    src={addProductIcon}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                Add Product
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                className={({ isActive }) => `w-full flex items-center gap-x-3.5 py-2 px-2.5 ${isActive && 'bg-gray-100'} text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white`}
                                to="/admin/products"
                                end
                            >
                                <img
                                    src={allProductsIcon}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                All Products
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
