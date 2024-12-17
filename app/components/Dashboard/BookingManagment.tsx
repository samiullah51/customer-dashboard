"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import BookingTabs from "../Bookings/BookingTabs";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const BookingManagment: React.FC = () => {
  return (
    <div className="w-[100%]  container mx-auto ">
      <div className="flex  flex-col md:flex-row md:justify-between items-center pr-2">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-0 md:mt-10 mb-0 md:mb-5`}
        >
          Booking Management
        </h1>
      </div>

      <BookingTabs />
    </div>
  );
};

export default BookingManagment;
