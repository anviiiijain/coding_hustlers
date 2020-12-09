import React from "react";
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { ShoppingCart } from "react-feather";
import { quaterlySales, quaterlySalesSeries } from "./StatisticsData";

class QuaterlySales extends React.Component {
  render() {
    return (
      <StatisticsCard
        icon={<ShoppingCart className="danger" size={22} />}
        iconBg="danger"
        stat="36k"
        statTitle="No. of Donors"
        options={quaterlySales}
        series={quaterlySalesSeries}
        type="area"
      />
    );
  }
}
export default QuaterlySales;
