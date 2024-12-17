"use client";
import React, { useState } from "react";
import ConfirmedBooking from "../Setting/ConfirmedBooking";
import ActiveBooking from "../Setting/ActiveBooking";
import CompletedBooking from "../Setting/CompletedBooking";
import CancelledBooking from "../Setting/CancelledBooking";

function BookingTabs() {
  const [activeTab, setActiveTab] = useState("1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return <ConfirmedBooking />;
      case "2":
        return <ActiveBooking />;
      case "3":
        return <CompletedBooking />;
      case "4":
        return <CancelledBooking />;
      default:
        return <ConfirmedBooking />;
    }
  };

  return (
    <div className="w-full flex justify-center text-nowrap">
      <div className="p-5 rounded-lg w-full">
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex overflow-scroll flex-col md:flex-row justify-start border-b-2 mb-4 "
        >
          <div
            className={`tab-title ${
              activeTab === "1"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors md:mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("1")}
            role="tab"
            aria-selected={activeTab === "1"}
            aria-controls="tab-1"
          >
            Confirm Booking{" "}
            <span className="bg-[#FA1F00] text-white rounded-full py-1 px-2 ml-2">
              1
            </span>
          </div>
          <div
            className={`tab-title ${
              activeTab === "2"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("2")}
            role="tab"
            aria-selected={activeTab === "2"}
            aria-controls="tab-2"
          >
            Active Booking
          </div>
          <div
            className={`tab-title ${
              activeTab === "3"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("3")}
            role="tab"
            aria-selected={activeTab === "3"}
            aria-controls="tab-3"
          >
            Completed Booking
          </div>
          <div
            className={`tab-title ${
              activeTab === "4"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("4")}
            role="tab"
            aria-selected={activeTab === "4"}
            aria-controls="tab-4"
          >
            Cancelled Booking
          </div>
        </div>

        <div role="tabpanel" id={`tab-${activeTab}`}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default BookingTabs;
