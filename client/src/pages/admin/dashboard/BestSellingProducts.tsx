import React from 'react'

const BestSellingProducts = () => {

    const products = [
        {
            product: 'iPhone 13',
            total_order: 506,
            status: 'Stock',
            price: 999.29
        },
        {
            product: 'Nike Air Jordan',
            total_order: 506,
            status: 'Stock',
            price: 72.40
        },
        {
            product: 'Beats Studio 2',
            total_order: 506,
            status: 'Stock',
            price: 99.90
        },
        {
            product: 'Apple Watch Series 7',
            total_order: 506,
            status: 'Out',
            price: 249.99
        },
        {
            product: 'Amazon Echo Dot',
            total_order: 506,
            status: 'Stock',
            price: 79.40
        },
    ]
  return (
    <div className="p-4 md:p-5">
        <div className='flex flex-col'>
            <span className="text-xl sm:text-2xl tracking-wide font-black">
                Best Selling Product
            </span>
            
            <div
                key="1"
                className="max-w-[85rem] py-3"
            >
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    
                    
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th
                            className="px-6 py-3 text-start"
                            scope="col"
                            >
                            <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                PRODUCT
                                </span>
                            </div>
                            </th>
                            <th
                            className="px-6 py-3 text-start"
                            scope="col"
                            >
                            <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                TOTAL ORDER
                                </span>
                            </div>
                            </th>
                            <th
                            className="px-6 py-3 text-start"
                            scope="col"
                            >
                            <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                STATUS
                                </span>
                            </div>
                            </th>
                            <th
                            className="px-6 py-3 text-start"
                            scope="col"
                            >
                            <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                PRICE
                                </span>
                            </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map(product => 
                                <tr className="bg-white hover:bg-gray-50">
                                    <td className="py-5 px-10 whitespace-nowrap align-center">
                                        <span className="block text-md font-bold text-gray-800">
                                        {product.product}
                                        </span>
                                    </td>
                                    <td className="py-5 px-3 whitespace-nowrap align-center">
                                        <span className="block text-md font-semibold text-gray-800">
                                        {product.total_order}
                                        </span>
                                    </td>
                                    <td className="py-5 px-3 whitespace-nowrap align-center">
                                        {product.status == 'Stock' ? 
                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-sm font-medium bg-teal-100 text-teal-800 rounded-full">
                                            <svg
                                                className="size-2.5"
                                                fill="currentColor"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Stock
                                        </span>
                                        :
                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-sm font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                                            <svg 
                                                className="size-2.5" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="16" 
                                                height="16" 
                                                fill="currentColor" 
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                            </svg>
                                            Out
                                        </span>
                                        }
                                        
                                    </td>
                                    <td className="py-5 px-3 whitespace-nowrap align-center">
                                            <span className="block text-md font-semibold text-gray-800">
                                            {`$${product.price}`}
                                            </span>
                                    </td>
                                </tr>

                            )}
                            
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BestSellingProducts
