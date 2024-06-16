const RecentOrders = () => {
  const orders = [
    {
      id: "#6548",
      customer: "Joseph Wheeler",
      status: "Pending",
      total: 95.29,
    },
    {
      id: "#6548",
      customer: "Sarah Smith",
      status: "Completed",
      total: 62.4,
    },
    {
      id: "#6548",
      customer: "Claire Thomson",
      status: "Pending",
      total: 9.9,
    },
    {
      id: "#6548",
      customer: "Gary Chase",
      status: "Pending",
      total: 49.99,
    },
    {
      id: "#6548",
      customer: "Sarah Jones",
      status: "Completed",
      total: 9.4,
    },
  ];

  return (
    <div className="p-4 md:p-5">
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl tracking-wide font-black">
          Recent Orders
        </span>

        <div key="1" className="max-w-[85rem] py-3">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-start" scope="col">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              ID
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start" scope="col">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              CUSTOMER
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start" scope="col">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              STATUS
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start" scope="col">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              TOTAL
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="py-5 px-10 whitespace-nowrap align-center">
                            <span className="block text-md font-bold text-gray-800">
                              {order.id}
                            </span>
                          </td>
                          <td className="py-5 px-3 whitespace-nowrap align-center">
                            <span className="block text-md font-semibold text-gray-800">
                              {order.customer}
                            </span>
                          </td>
                          <td className="py-5 px-3 whitespace-nowrap align-center">
                            {order.status == "Completed" ? (
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-sm font-medium text-green-500">
                                Completed
                              </span>
                            ) : (
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-sm font-medium text-yellow-500">
                                Pending
                              </span>
                            )}
                          </td>
                          <td className="py-5 px-3 whitespace-nowrap align-center">
                            <span className="block text-md font-semibold text-gray-800">
                              {`$${order.total}`}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
