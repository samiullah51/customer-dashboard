"use client";
import { SlOptionsVertical } from "react-icons/sl";

const page = () => {
  return (
    <div className="space-y-6 px-4   mx-auto ">
      <h1 className={` text-[18px] font-[700] text-[#052145] mt-10 mb-5`}>
        Quote Management
      </h1>
      <div className="border relative text-wrap bg-white  border-[#FFE8E5] rounded-md p-4">
        <div className="flex flex-col md:flex-row items-start  justify-start md:justify-between">
          <p className="text-[#052145]">Booking Reference: #123456</p>
          <div className="flex flex-col md:flex-row items-center">
            <span className="bg-[#10B981] my-2 md:my-0 mr-10 mb-1 md:mb-0 text-nowrap text-white text-sm py-1 px-5 rounded-full ml-10">
              10 Quote recevied
            </span>
          </div>
        </div>
        <div className=" bg-[#F6F5F5] absolute top-2 right-2 p-3 ml-[-20px] md:ml-0  rounded-full  cursor-pointer hover:bg-gray-200">
          <SlOptionsVertical />
        </div>

        <p className="text-[#052145] mb-3 font-[500]">Details</p>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Mover date</p>
          <p>Thursday, 8 August 2024</p>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Mover Arrival Time</p>
          <p>8:00 AM - 10:00 AM</p>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Items to Be Moved</p>
          <p>
            2 Bedrooms, Living Room, Kitchen,{" "}
            <span className="text-[#FA1F00] cursor-pointer hover:underline">
              All Items list
            </span>{" "}
          </p>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Payment Method</p>
          <p>Credit Card (**** 1234)</p>
        </div>

        <div className="flex items-center justify-between mt-5 mb-4 text-black">
          <p className="font-[500]">Companies Quotation</p>
          <p className="cursor-pointer hover:underline font-[500]">See All</p>
        </div>

        <div className="flex  flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row mb-4 items-start md:items-center">
            <img
              src="/assets/images/van.png"
              alt="Profile Avatar"
              width={80}
              height={60}
              className="mr-4 "
            />
            <div className="text-[#052145] text-wrap h-full py-2 flex flex-col justify-between">
              <p className="text-[16px] font-[500] mb-1">Direct Movers LLC</p>
              <p>2024-07-22</p>
              <p className="text-sm my-1">‘Discount for early booking’</p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <p>$1,200</p>
            <div className="flex my-2">
              <button className="outline-none mr-2 bg-[#F6F5F5] border px-4 py-1 border-none text-sm py-1 px2 rounded-md">
                Decline
              </button>
              <button className="outline-none bg-[#FA1F00] text-white border px-4 py-1 border-none text-sm py-1 px2 rounded-md">
                Accept
              </button>
            </div>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row mb-4 items-start md:items-center">
            <img
              src="/assets/images/van.png"
              alt="Profile Avatar"
              width={80}
              height={60}
              className="mr-4 "
            />
            <div className="text-[#052145] text-wrap h-full py-2 flex flex-col justify-between">
              <p className="text-[16px] font-[500] mb-1">Direct Movers LLC</p>
              <p>2024-07-22</p>
              <p className="text-sm my-1">‘Discount for early booking’</p>
            </div>
          </div>
          <div className="flex my-2 md:my-0 flex-col justify-end items-end">
            <p>$1,200</p>
            <div className="flex my-2">
              <button className="outline-none mr-2 bg-[#F6F5F5] border px-4 py-1 border-none text-sm py-1 px2 rounded-md">
                Decline
              </button>
              <button className="outline-none bg-[#FA1F00] text-white border px-4 py-1 border-none text-sm py-1 px2 rounded-md">
                Accept
              </button>
            </div>
          </div>
        </div>
        {/* Grand Total */}
        <div className="w-full p-2 rounded-sm bg-[#F8FAFC] flex items-center justify-between text-[18px] font-[500]">
          <p>Grand Total</p>
          <p>$439</p>
        </div>
      </div>
    </div>
  );
};

export default page;
