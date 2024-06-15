import upIcon from '/dashboard/up.svg'
// import downIcon from '/dashboard/down.svg'

const TotalOrdersAndProfit = () => {
  return (
    <div className="grid grid-cols-2">
        <div className="p-4 md:p-5">
            <div className='flex flex-col gap-y-2 mb-5'>
                <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Total Orders
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                    Last 7 days
                </span>
            </div>
            <div className="mt-1 flex items-end gap-x-2">
                <span className="text-xl sm:text-4xl font-medium text-gray-800">
                    25.7K
                </span>
            </div>
            <div className="mt-1 flex gap-x-2">
                <span className="flex items-center gap-x-1 text-green-600">
                    
                    <img
                        src={upIcon}
                        alt=""
                        width={15}
                        height={15}
                    />
                    <span className="inline-block text-sm">
                    1.7%
                    </span>
                </span>

                <span className="text-xs tracking-wide text-gray-500">
                    vs last 7 days
                </span>

            </div>
        </div>
        
        <div className="p-4 md:p-5">
            <div className='flex flex-col gap-y-2 mb-5'>
                <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Total Profit
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                    Last 7 days
                </span>
            </div>
            <div className="mt-1 flex items-end gap-x-2">
                <span className="text-xl sm:text-4xl font-medium text-gray-800">
                    50K
                </span>
            </div>
            <div className="mt-1 flex gap-x-2">
                <span className="flex items-center gap-x-1 text-green-600">
                    
                    <img
                        src={upIcon}
                        alt=""
                        width={15}
                        height={15}
                    />
                    <span className="inline-block text-sm">
                    12%
                    </span>
                </span>

                <span className="text-xs tracking-wide text-gray-500">
                    vs last 7 days
                </span>

            </div>
        </div>


    </div>
  )
}

export default TotalOrdersAndProfit
