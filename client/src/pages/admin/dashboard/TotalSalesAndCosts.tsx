import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
// import upIcon from '/dashboard/up.svg'
import downIcon from '/dashboard/down.svg'

const options: ApexOptions = {
    chart: {
        type: 'area',
        stacked: false,
        height: 200,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
        width: 5,
        curve: 'smooth',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: -10
    },
    markers: {
        size: 0,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },
    xaxis: {
      categories: [
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
        'SUN'
      ],
    },
    yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    }
};

const series = [
{
  name: 'Sales',
  data: [18000, 22000, 24000, 28000, 30000, 31000, 32000]
},
{
  name: 'Cost',
  data: [10000, 12000, 13000, 15000, 17000, 18000, 18000]
}
];

const TotalSalesAndCosts = () => {

  return (
    <div className="grid sm:grid-cols-2 gap-1 sm:gap-6">
        <div className="p-4 md:p-5">
            <div className='flex flex-col gap-y-2 mb-5'>
                <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Total Sales & Costs
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                    Last 7 days
                </span>
            </div>
            <div className="mt-1 flex items-end gap-x-2">
                <span className="text-xl sm:text-4xl font-medium text-gray-800">
                    $350K
                </span>
                <span className="text-md sm:text-lg font-medium text-blue-500">
                    $235K
                </span>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
                <span className="flex items-center gap-x-1 text-red-600">
                    
                    <img
                        src={downIcon}
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

        <ReactApexChart options={options} series={series} type="area" height={200}/>

    </div>
  )
}

export default TotalSalesAndCosts
