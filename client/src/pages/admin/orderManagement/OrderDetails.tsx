import { useParams } from "react-router-dom";
import { mock_products } from "./mock_data";

const OrderDetails = () => {
    const { id } = useParams();
  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col gap-6 bg-white rounded-xl shadow p-4 sm:p-7 mt-5">
            <div className="mb-5">
                <h2 className="text-xl font-bold text-accent">{`Orders ID:${id}`}</h2>
                <p className="text-sm text-gray-600">Feb 16, 2022 - Feb 20, 2022</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-1 p-3 bg-white border rounded-xl">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Customer
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Full Name: Shristi Singh
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Email: shristi@gmail.com
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Phone: +91 904 231 1212
                  </span>
                  <button className="py-1 mt-2 text-xs rounded-md bg-red-500 text-white w-full">
                    View Profile
                  </button>
                </div>
              </div>
              <div className="md:col-span-1 p-3 bg-white border rounded-xl">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Order Info
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Shipping: Next express
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Payment Method: Paypal
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Status: Pending
                  </span>
                  <button className="py-1 mt-2 text-xs rounded-md bg-red-500 text-white w-full">
                    Download Info
                  </button>
                </div>
              </div>
              <div className="md:col-span-1 p-3 bg-white border rounded-xl">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Deliver To
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Address: Dharam Colony
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Palam Vihar: Gurgaon
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Haryana
                  </span>
                  <button className="py-1 mt-2 text-xs rounded-md bg-red-500 text-white w-full">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 p-3 bg-white border rounded-xl">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Payment Info
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Master Card **** **** 6557
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Business name: Shristi Singh
                  </span>
                  <span className="text-xs tracking-wide text-gray-500">
                    Phone: +91 904 231 1212
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-3 p-3 bg-white">
                <div className="flex flex-col">
                  <label htmlFor="notes" className="text-xl sm:text-2xl tracking-wide font-black">
                    Note
                  </label>
                  <textarea id="notes" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Type some notes"/>
                </div>
              </div>
            </div>
            
            
            <div className="p-4 md:p-5">
              <div className='flex flex-col'>
                  <span className="text-xl sm:text-2xl tracking-wide font-black">
                      Products
                  </span>
                  
                  <div
                      key="1"
                      className="max-w-[85rem] py-3"
                  >
                  <div className="flex flex-col">
                      <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                          <div className="bg-white overflow-hidden">
                          
                          
                          <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                              <tr>
                                  <th
                                  className="px-6 py-3 text-start"
                                  scope="col"
                                  >
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                        Product Name
                                        </span>
                                    </div>
                                  </th>
                                  <th
                                  className="px-6 py-3 text-start"
                                  scope="col"
                                  >
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                        Order ID
                                        </span>
                                    </div>
                                  </th>
                                  <th
                                  className="px-6 py-3 text-start"
                                  scope="col"
                                  >
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                        Quantity
                                        </span>
                                    </div>
                                  </th>
                                  <th
                                  className="px-6 py-3 text-start"
                                  scope="col"
                                  >
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                        Total
                                        </span>
                                    </div>
                                  </th>
                              </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                  {mock_products.map(product => 
                                      <tr className="bg-white hover:bg-gray-50">
                                          <td className="py-5 px-10 whitespace-nowrap align-center">
                                              <span className="block text-md font-bold text-gray-800">
                                              {product.product_name}
                                              </span>
                                          </td>
                                          <td className="py-5 px-3 whitespace-nowrap align-center">
                                              <span className="block text-md font-semibold text-gray-800">
                                              {product.order_id}
                                              </span>
                                          </td>
                                          <td className="py-5 px-3 whitespace-nowrap align-center">
                                              <span className="block text-md font-semibold text-gray-800">
                                              {product.Quantity}
                                              </span>
                                          </td>
                                          <td className="py-5 px-3 whitespace-nowrap align-center">
                                                  <span className="block text-md font-semibold text-gray-800">
                                                  {`$${product.Quantity * product.Price}`}
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

            <div className="flex flex-col items-end">
              <div className="flex flex-row justify-between">
                <span className="text-xs tracking-wide text-gray-500">
                  Subtotal
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                  $3,201.6
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-xs tracking-wide text-gray-500">
                  Tax(20%)
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                  $640.32
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-xs tracking-wide text-gray-500">
                  Discount
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                  $0
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-xs tracking-wide text-gray-500">
                  Shipping Rate
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                  $0
                </span>
              </div>
              <div className="flex flex-row justify-between">
              <span className="text-xl sm:text-2xl tracking-wide font-black">
                Total
              </span>
              <span className="text-xl sm:text-2xl tracking-wide font-black">
                $3841.92
              </span>
              </div>
            </div>
            
        </div>

    </div>
  )
}

export default OrderDetails
