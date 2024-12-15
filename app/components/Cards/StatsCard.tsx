import { formatNumber } from "@/app/utils/formatNumber";
import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface StatsCardProps {
  title: string;
  count?: number;
  currency?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, count, currency }) => {
  return (
    <div
      className={`  w-full p-4 border  border-[#FFE8E5] bg-white rounded-md md:flex-1 mx-3 my-3 flex items-center justify-start`}
    >
      <div className="bg-[#052145] text-white flex items-center justify-center p-4 rounded-full">
        <FaUserGroup />
      </div>

      <div className="ml-3">
        <p className="text-[16px] font-[400]">{title}</p>
        <p
          className={`${merriweather.className} text-[#FA1F00] text-[26px] font-[700] my-1`}
        >
          {count !== undefined
            ? currency
              ? "$" + formatNumber(count)
              : formatNumber(count)
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
