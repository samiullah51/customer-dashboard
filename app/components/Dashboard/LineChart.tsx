"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart: React.FC = () => {
  const chartOptions: any = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#FF4A4A"],
    },
    grid: {
      borderColor: "#D6E7FC",
      strokeDashArray: 6,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#A3A3A3",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A3A3A3",
        },
        formatter: (value: number) => {
          if (value > 0) {
            return `${value / 1000}k`;
          }
          return value;
        },
      },
    },
    tooltip: {
      theme: "light",
    },
  };

  const chartSeries = [
    {
      name: "Total Bookings",
      data: [
        2000, 5000, 3000, 12000, 8000, 1000, 5000, 15000, 7000, 10000, 4000,
        2000,
      ],
    },
  ];

  return (
    <div className="bg-white rounded-md p-4 border border-[#FFE8E5]">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-[400] text-[#052145] text-[16px]">
          Total Booking
        </h2>
        <button className="text-[#052145] py-2 px-3 rounded-md bg-[#F6F5F5] text-sm  flex items-center">
          <span className="mr-1">This Year</span> <IoIosArrowDown />
        </button>
      </div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={300}
      />
    </div>
  );
};

export default LineChart;
