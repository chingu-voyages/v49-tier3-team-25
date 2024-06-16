// not sure why its not recognising  ReactApexChart from 'react-apexcharts' in TotalSalesAndCosts, TopSellingGenre, and TodayOrder - have commented them out for now

import upIcon from "/dashboard/up.svg";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const TodayOrder = () => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "straight",
    },
    title: {
      text: "Orders Over Time",
      align: "left",
      style: {
        fontSize: "14px",
        fontWeight: "thin",
      },
    },
    xaxis: {
      categories: [
        "12am",
        "1am",
        "2am",
        "3am",
        "4am",
        "5am",
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "0pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",
        "9pm",
        "10pm",
        "11pm",
      ],
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "orders",
      data: [
        180, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70, 180, 51, 60, 38, 88,
        50, 40, 52, 88, 80, 60, 70,
      ],
    },
  ];

  return (
    <div className="p-4 md:p-5">
      <div className="flex flex-col gap-y-2 mb-5">
        <span className="text-xl sm:text-2xl tracking-wide font-black">
          Total Order
        </span>
      </div>
      <div className="mt-1 flex items-end gap-x-2">
        <span className="text-xl sm:text-4xl font-medium text-gray-800">
          16.5K
        </span>
      </div>
      <div className="mt-1 flex gap-x-2">
        <span className="flex items-center gap-x-1 text-green-600">
          <img src={upIcon} alt="" width={15} height={15} />
          <span className="inline-block text-sm">6%</span>
        </span>

        <span className="text-xs tracking-wide text-gray-500">vs last day</span>
      </div>

      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default TodayOrder;
