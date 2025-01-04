import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Inventory({ count }: any) {
  return (
    <div className=" bg-[#F6F5F5] w-full md:w-[23%]  cursor-pointer hover:bg-[#e9e9e9] rounded-md border-b border-red-500 p-3 flex items-center justify-between">
      <div className="">My inventory </div>
      <div className="flex items-center">
        <div
          style={{ width: "30px", height: "30px" }}
          className="flex items-center justify-center mr-2 rounded-full text-sm text-white bg-red-500 "
        >
          {count}
        </div>
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Inventory;
