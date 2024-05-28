import Status from "./Status"
import { mock_orders } from "./mock_data"

const Table = () => {
  return (
    <div
        key="1"
        className="w-full px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto"
    >
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active" id="basic-tabs-item-1" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
                        Confirmed
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="basic-tabs-item-2" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
                        Pending
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="basic-tabs-item-3" data-hs-tab="#basic-tabs-3" aria-controls="basic-tabs-3" role="tab">
                        Processing
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="basic-tabs-item-4" data-hs-tab="#basic-tabs-4" aria-controls="basic-tabs-4" role="tab">
                        Picked
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="basic-tabs-item-5" data-hs-tab="#basic-tabs-5" aria-controls="basic-tabs-5" role="tab">
                        Shipped
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="basic-tabs-item-6" data-hs-tab="#basic-tabs-6" aria-controls="basic-tabs-6" role="tab">
                        Delivered
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="basic-tabs-item-7" data-hs-tab="#basic-tabs-7" aria-controls="basic-tabs-7" role="tab">
                        Cancelled
                    </button>
                </nav>
                <div>
                    <div id="basic-tabs-1" role="tabpanel" aria-labelledby="basic-tabs-item-1"/>
                    <div id="basic-tabs-2" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-2"/>
                    <div id="basic-tabs-3" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-3"/>
                    <div id="basic-tabs-4" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-4"/>
                    <div id="basic-tabs-5" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-5"/>
                    <div id="basic-tabs-6" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-6"/>
                    <div id="basic-tabs-7" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-7"/>
                </div>

                <div className="py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div className="sm:col-span-1">
                    <label
                        className="sr-only"
                        htmlFor="hs-as-table-product-review-search"
                    >
                        Search by order id
                    </label>
                    <div className="relative">
                        <input
                            className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            id="hs-as-table-product-review-search"
                            name="hs-as-table-product-review-search"
                            placeholder="Search by order id"
                            type="text"
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                        <svg
                            className="size-4 text-gray-400 dark:text-neutral-500"
                            fill="currentColor"
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="sm:col-span-2 md:grow">
                    <div className="flex justify-end gap-x-2">
                        
                        <div
                        className='hs-dropdown relative inline-block [--placement:bottom-right]'
                        >
                        <button
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                            id="hs-as-table-table-filter-dropdown"
                            type="button"
                        >
                            <svg
                            className="flex-shrink-0 size-3.5"
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
                            <path d="M3 6h18" />
                            <path d="M7 12h10" />
                            <path d="M10 18h4" />
                            </svg>
                            Filter by date range
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            ORDER ID
                            </span>
                        </div>
                        </th>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            CREATED
                            </span>
                        </div>
                        </th>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            CUSTOMER
                            </span>
                        </div>
                        </th>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            TOTAL
                            </span>
                        </div>
                        </th>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            PROFIT
                            </span>
                        </div>
                        </th>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Status
                            </span>
                        </div>
                        </th>
                        <th
                        className="px-6 py-3 text-start"
                        scope="col"
                        >
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {mock_orders.map((order) => 
                            <tr>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-2">
                                <span
                                className="text-sm font-bold"
                                >
                                {order.order_id}
                                </span>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-2">
                                <span className="text-sm">
                                {order.created}
                                </span>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-2">
                                <span className="text-sm">
                                {order.customer}
                                </span>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-2">
                                <span className="text-sm">
                                {`$${order.total}`}
                                </span>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-2">
                                <div className="flex items-center">
                                        {`$${order.profit}`}
                                        <span className="inline-flex items-center py-0.5 px-2 rounded-md text-xs font-semibold bg-green-100 text-green-800">
                                        {`${order.percent}%`}
                                        </span>
                                </div>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-2">
                                <Status status={order.status}/>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-1.5 flex justify-end">
                                <div className="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-neutral-700 dark:bg-neutral-700 dark:border-neutral-700">
                                
                                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                    <button
                                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                    id="hs-table-dropdown-1"
                                    type="button"
                                    >
                                    <svg
                                        className="size-4"
                                        fill="currentColor"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                    </button>
                                    <div
                                    aria-labelledby="hs-table-dropdown-1"
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                                    >
                                        <div className="py-2 first:pt-0 last:pb-0">
                                            
                                            <a
                                                className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                                href="#"
                                            >
                                            Order Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
                
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div className="inline-flex items-center gap-x-2">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Showing:
                    </p>
                    <div className="max-w-sm space-y-3">
                        <select className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option selected>9</option>
                        <option>20</option>
                        </select>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                        of 20
                    </p>
                    </div>
                    <div>
                        <nav className="flex items-center -space-x-px">
                            <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m15 18-6-6 6-6"></path>
                                </svg>
                                <span aria-hidden="true" className="sr-only">Previous</span>
                            </button>
                            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-red-500 text-white border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500" aria-current="page">1</button>
                            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">2</button>
                            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">3</button>
                            <div className="hs-tooltip inline-block border border-gray-200 dark:border-neutral-700">
                                <button type="button" className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10">
                                <span className="group-hover:hidden text-xs">•••</span>
                                <svg className="group-hover:block hidden flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 17 5-5-5-5"></path>
                                    <path d="m13 17 5-5-5-5"></path>
                                </svg>
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                    Next 4 pages
                                </span>
                                </button>
                            </div>
                            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
                            <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                <span aria-hidden="true" className="sr-only">Next</span>
                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Table
