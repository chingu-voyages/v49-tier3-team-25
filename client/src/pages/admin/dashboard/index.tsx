// import TotalSalesAndCosts from "./TotalSalesAndCosts";
import TotalOrdersAndProfit from "./TotalOrdersAndProfit";
// import TopSellingGenre from "./TopSellingGenre";
import BestSellingProducts from "./BestSellingProducts";
import RecentOrders from "./RecentOrders";
// import TodayOrder from "./TodayOrder";

// not sure why its not recognising  ReactApexChart from 'react-apexcharts' in TotalSalesAndCosts, TopSellingGenre, and TodayOrder - have commented them out for now

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 sm:gap-12">
        <div className="lg:col-span-5 bg-white shadow-sm rounded-xl">
          {/* <TotalSalesAndCosts /> */}
        </div>
        <div className="lg:col-span-4 bg-white shadow-sm rounded-xl">
          <TotalOrdersAndProfit />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5">
        <div className="xl:col-span-2 bg-white shadow-sm rounded-xl">
          {/* <TopSellingGenre /> */}
        </div>
        <div className="xl:col-span-3 bg-white shadow-sm rounded-xl">
          <BestSellingProducts />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="lg:col-span-2 bg-white shadow-sm rounded-xl">
          <RecentOrders />
        </div>
        <div className="lg:col-span-1 bg-white shadow-sm rounded-xl">
          {/* <TodayOrder /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
