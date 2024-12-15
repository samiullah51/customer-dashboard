"use client";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutChart: React.FC = () => {
  const chartOptions: any = {
    chart: {
      type: "donut",
    },
    labels: ["Customers", "Companies"],
    colors: ["#FFC7C7", "#001E4E"],
    legend: {
      position: "bottom",
      itemMargin: {
        horizontal: 20,
        vertical: 10,
      },
      labels: {
        colors: "#A3A3A3",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },

    tooltip: {
      theme: "light",
    },
  };

  const chartSeries = [79, 21];

  return (
    <div className="bg-white h-full flex items-start justify-center rounded-md p-4 border border-[#FFE8E5]">
      <div className=" my-auto">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          height={300}
        />
      </div>
    </div>
  );
};

export default DonutChart;
