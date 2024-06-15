import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
    chart: {
        height: 400,
        type: 'bubble',
        toolbar: {
        show: false
        },
        zoom: {
        enabled: false
        }
    },
    dataLabels: {
        style: {
            fontSize: '20px',
            fontFamily: 'Inter, ui-sans-serif',
            fontWeight: '400',
            colors: ['#fff', '#fff', '#fff']
        },
        formatter: (value) => value ? `${value}` : ''
    },
    fill: {
        opacity: 1
    },
    stroke: {
        width: 5
    },
    plotOptions: {
        bubble: {
        zScaling: false,
        minBubbleRadius: 40
        }
    },
    grid: {
        show: false,
        padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
        }
    },
    xaxis: {
        min: 0,
        max: 15,
        labels: {
        show: false
        },
        axisBorder: {
        show: false
        },
        axisTicks: {
        show: false
        }
    },
    yaxis: {
        min: 0,
        max: 15,
        labels: {
        show: false
        }
    },
    tooltip: {
        enabled: false
    },
    states: {
        hover: {
        filter: {
            type: 'none'
        }
        }
    }
}

const series =  [
    {   
        name: 'Fiction',
        data: [[6, 9, 90]]
    },
    {
        name: 'Mystery',
        data: [[4, 6, 70]]
    },
    {
        name: 'Cooking',
        data: [[6, 4, 45]]
    },
]

const TopSellingGenre = () => {
  return (
        <div className="p-4 md:p-5">
            <div className='flex flex-col gap-y-2 mb-5'>
                <span className="text-xl sm:text-2xl tracking-wide font-black">
                    Top Selling Genre
                </span>
                <span className="text-xs tracking-wide text-gray-500">
                    Total 10.4k Visitors
                </span>

                <ReactApexChart options={options} series={series} type="bubble" height={400}/>

            </div>
            
            
        </div>
  )
}

export default TopSellingGenre
