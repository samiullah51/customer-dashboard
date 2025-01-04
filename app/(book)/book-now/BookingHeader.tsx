import React from "react";

function BookingHeader() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[90%] mx-auto items-center  justify-between py-8 px-10">
      <h1 className="text-3xl font-bold">LOGO</h1>
      <div className="flex text-nowrap  items-center justify-between my-3 md:my-0 gap-5 md:gap-14">
        <span className="cursor-pointer hover:text-red-500">Home</span>
        <span className="cursor-pointer hover:text-red-500">How it works</span>
        <span className="cursor-pointer hover:text-red-500">About</span>
        <span className="cursor-pointer hover:text-red-500">Contact</span>
      </div>
      <div className="flex text-nowrap my-3 md:my-0 items-center justify-between gap-5">
        <button className="border border-[#FFD1CB] rounded-md py-3 px-7">
          For service provider
        </button>
        <button className=" bg-[#FA1F00] text-white rounded-md py-3 px-7">
          Login
        </button>
      </div>
    </div>
  );
}

export default BookingHeader;
