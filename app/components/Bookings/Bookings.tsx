"use client";
import React, { useState, useRef, useEffect } from "react";
import { SlOptions } from "react-icons/sl";
import { BsEye } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Merriweather } from "next/font/google";
import Pagination from "../global/Pagination";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface Booking {
  bookingId: string;
  customerName: string;
  companyName: string;
  payment: string;
  bookingDate: string;
  moveDate: string;
  status: "Active" | "Cancelled" | "Completed" | "Pending";
}

const bookings: Booking[] = [
  {
    bookingId: "39108",
    customerName: "John Smith",
    companyName: "Direct Movers LLC",
    payment: "$399",
    bookingDate: "19-06-2024",
    moveDate: "19-06-2024",
    status: "Active",
  },
  {
    bookingId: "39109",
    customerName: "John Smith",
    companyName: "Direct Movers LLC",
    payment: "$530",
    bookingDate: "19-06-2024",
    moveDate: "19-06-2024",
    status: "Cancelled",
  },
  {
    bookingId: "39110",
    customerName: "Alice Johnson",
    companyName: "Swift Relocation Inc",
    payment: "$450",
    bookingDate: "20-06-2024",
    moveDate: "21-06-2024",
    status: "Pending",
  },
  {
    bookingId: "39111",
    customerName: "Robert Brown",
    companyName: "MoveEasy Logistics",
    payment: "$600",
    bookingDate: "18-06-2024",
    moveDate: "20-06-2024",
    status: "Completed",
  },
  {
    bookingId: "39112",
    customerName: "Sophia Davis",
    companyName: "Home Shifters Co.",
    payment: "$720",
    bookingDate: "17-06-2024",
    moveDate: "19-06-2024",
    status: "Active",
  },
  {
    bookingId: "39113",
    customerName: "Michael Wilson",
    companyName: "FastTrack Movers",
    payment: "$510",
    bookingDate: "19-06-2024",
    moveDate: "22-06-2024",
    status: "Cancelled",
  },
  {
    bookingId: "39114",
    customerName: "Emma Taylor",
    companyName: "Efficient Movers LLC",
    payment: "$675",
    bookingDate: "16-06-2024",
    moveDate: "18-06-2024",
    status: "Pending",
  },
];

const filterOptions = [
  "All Booking",
  "Active",
  "Cancelled",
  "Pending",
  "Completed",
];

const BookingTable: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Booking");
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>(bookings);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (bookingId: string) => {
    setActiveDropdown(activeDropdown === bookingId ? null : bookingId);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setFilterDropdownOpen(false);

    if (filter === "All Booking") {
      setFilteredBookings(bookings);
    } else {
      setFilteredBookings(
        bookings.filter((booking) => booking.status === filter)
      );
    }
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-10 mb-5`}
        >
          Total Bookings
        </h1>
        <div className="relative flex items-center">
          <button
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            className="flex items-center border border-[#FFE8E5] py-3 px-5 rounded-sm text-sm"
          >
            {selectedFilter}
            <IoIosArrowDown className="ml-2" />
          </button>
          {filterDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 bg-white border border-[#FFE8E5] shadow-md mt-2 rounded-md w-full z-10"
            >
              <ul>
                {filterOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleFilterClick(option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="w-[90vw] mx-auto md:w-full overflow-auto "
      >
        <table className="min-w-full min-h-[150px] table-auto border-collapse border border-[#FFE8E5]">
          <thead>
            <tr className="bg-[#F8FAFC] text-left text-[#0A0B0A] border-t border-r border-l border-transparent">
              <th className="p-[15px] font-[500]">S No</th>
              <th className="p-[15px] font-[500]">Booking ID</th>
              <th className="p-[15px] font-[500]">Customer Name</th>
              <th className="p-[15px] font-[500]">Company Name</th>
              <th className="p-[15px] font-[500]">Payment</th>
              <th className="p-[15px] font-[500]">Booking Date</th>
              <th className="p-[15px] font-[500]">Move Date</th>
              <th className="p-[15px] font-[500]">Status</th>
              <th className="p-[15px] font-[500] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr
                key={booking.bookingId}
                className="hover:bg-gray-50 text-sm border-t border-[#FFE8E5] bg-white font-normal text-[#052145]"
              >
                <td className="p-[15px] border-r border-[#FFE8E5]">
                  {index + 1}
                </td>
                <td className="p-[15px]">{booking.bookingId}</td>
                <td className="p-[15px]">{booking.customerName}</td>
                <td className="p-[15px]">{booking.companyName}</td>
                <td className="p-[15px]">{booking.payment}</td>
                <td className="p-[15px]">{booking.bookingDate}</td>
                <td className="p-[15px]">{booking.moveDate}</td>
                <td className="p-[15px]">
                  <span
                    className={`px-3 py-1 text-sm rounded-full text-white ${
                      booking.status === "Active"
                        ? "bg-[#10B981]"
                        : booking.status === "Cancelled"
                        ? "bg-[#E4626F]"
                        : booking.status === "Completed"
                        ? "bg-[#5D9EF4]"
                        : "bg-[#FFC734]"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="p-[15px] relative text-center border-l border-[#FFE8E5]">
                  <button
                    onClick={() => handleDropdownToggle(booking.bookingId)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <SlOptions />
                  </button>
                  {activeDropdown === booking.bookingId && (
                    <div
                      onClick={() => setActiveDropdown(null)}
                      className="absolute bottom-2 right-[60%] bg-white z-10 border border-[#FFE8E5] rounded shadow-lg mt-2"
                    >
                      <ul>
                        <li className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer">
                          <BsEye className="text-lg mr-2" />
                          View
                        </li>
                        <li className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer">
                          <CiLocationOn className="text-lg mr-2" />
                          Track
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default BookingTable;
