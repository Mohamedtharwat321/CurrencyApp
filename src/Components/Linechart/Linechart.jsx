import React, { useEffect, useState } from "react";
import "./Linechart.css";
import Chart from "react-google-charts";

const Linechart = ({ chartData }) => {
  const [data, setData] = useState(["Date", "Prices"]);
  useEffect(() => {
    let dataCopy = [["Data", "Prices"]];
    if (chartData.prices) {
      chartData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [chartData]);
  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default Linechart;
