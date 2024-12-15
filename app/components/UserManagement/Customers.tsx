"use client";
import React, { useState, useEffect } from "react";
import { SlOptions, SlPhone } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Merriweather } from "next/font/google";
import { CiLocationOn } from "react-icons/ci";

import { BsArrowRight, BsEye } from "react-icons/bs";
import Pagination from "../global/Pagination";
import AddModal from "./AddModal";
import Details from "./Details";
import { BiEdit, BiTrash } from "react-icons/bi";
import ManagePropertyType from "../Setting/ManagePropertyType";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface Customer {
  customerId: string;
  customerName: string;
  phoneNumber: string;
  totalBooking: number;
  registrationDate: string;
  moveDate: string;
  status: "Pending" | "InActive" | "In-Progress" | "Pending";
}

const customers: Customer[] = [
  {
    customerId: "C001",
    customerName: "John Smith",
    phoneNumber: "+123456789",
    totalBooking: 5,
    registrationDate: "2024-06-19",
    moveDate: "2024-06-20",
    status: "Pending",
  },
  {
    customerId: "C002",
    customerName: "Alice Johnson",
    phoneNumber: "+987654321",
    totalBooking: 3,
    registrationDate: "2024-06-18",
    moveDate: "2024-06-22",
    status: "In-Progress",
  },
  {
    customerId: "C003",
    customerName: "Robert Brown",
    phoneNumber: "+192837465",
    totalBooking: 2,
    registrationDate: "2024-06-17",
    moveDate: "2024-06-21",
    status: "Pending",
  },

  {
    customerId: "C008",
    customerName: "Olivia Taylor",
    phoneNumber: "+223344556",
    totalBooking: 5,
    registrationDate: "2024-06-18",
    moveDate: "2024-06-23",
    status: "Pending",
  },
];

const CustomerTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredCustomers, setFilteredCustomers] =
    useState<Customer[]>(customers);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isTruckView, setTruckView] = useState(false);

  const handleToggleStatus = (customerId: string) => {
    setFilteredCustomers((prev) =>
      prev.map((customer) =>
        customer.customerId === customerId
          ? {
              ...customer,
              status: customer.status === "Pending" ? "InActive" : "Pending",
            }
          : customer
      )
    );
  };
  const toggleView = () => {
    setTruckView((prev) => !prev);
  };
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const filtered = customers.filter(
        (customer) =>
          customer.registrationDate === formattedDate ||
          customer.moveDate === formattedDate
      );
      setFilteredCustomers(filtered);
      setShowReset(true);
    } else {
      setFilteredCustomers(customers);
    }
  }, [selectedDate]);

  const resetFilter = () => {
    setSelectedDate(null);
    setFilteredCustomers(customers);
    setShowReset(false);
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleDropdownToggle = (bookingId: string) => {
    setActiveDropdown(activeDropdown === bookingId ? null : bookingId);
  };

  const handleMenuClick = (action: string, bookingId: string) => {
    setIsDetailsModalOpen(true);
    setActiveDropdown(null);
  };
  return (
    <div className="container mx-auto py-0 md:py-4 md:px-7">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className={` text-[18px] font-[700] text-[#052145] mt-10 mb-5`}>
          {isTruckView ? "Dispute Tickets" : "Frequently Ask Questions"}
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3">
          {showReset && (
            <button
              onClick={resetFilter}
              className="flex items-center border border-[#FFE8E5] py-3 px-4 rounded-md text-sm hover:bg-[#FA1F00]/10 w-full md:w-auto"
              title="Reset Filter"
            >
              <FiRefreshCcw className="mr-2" />
              Reset
            </button>
          )}
          <div className="relative flex flex-col md:flex-row items-start md:items-center mt-3 md:mt-0 space-y-3 md:space-y-0">
            <button
              onClick={toggleView}
              className="flex items-center border bg-[#FA1F00] text-white border-[#FFE8E5] py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/80 w-full md:w-auto"
            >
              {isTruckView ? "View FAQs" : "View Dispute Tickets"}
              <BsArrowRight className="ml-2" />
            </button>
            <button
              onClick={openModal}
              className={` flex items-center border bg-[#FA1F00] ml-2 text-white py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/90`}
            >
              + Create new
            </button>

            {isModalOpen && <AddModal />}

            {isDetailsOpen && (
              <Details
                setModalOpen={setIsDetailsModalOpen}
                filteredCustomers={filteredCustomers}
              />
            )}

            {isDatePickerVisible && (
              <div className="absolute top-12 right-0 z-10 ">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setDatePickerVisible(false);
                  }}
                  inline
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isTruckView ? (
        <>
          <div className="w-[90vw] h-fit mx-auto md:w-full  ">
            <table className="min-w-full  min-h-[300px]  table-auto border-collapse border border-[#FFE8E5]">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#0A0B0A] border-t border-r border-l border-transparent">
                  <th className="p-[15px] font-[500]">S No</th>
                  <th className="p-[15px] font-[500]">Ticket ID</th>
                  <th className="p-[15px] font-[500]">Subject</th>

                  <th className="p-[15px] font-[500]">Date submitted</th>

                  <th className="p-[15px] font-[500]">Status</th>
                  <th className="p-[15px] font-[500] text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, index) => (
                  <tr
                    key={customer.customerId}
                    className="hover:bg-gray-50 text-sm border-t border-[#FFE8E5] bg-white font-normal text-[#052145]"
                  >
                    <td className="p-[15px] border-r border-[#FFE8E5]">
                      {index + 1}
                    </td>
                    <td className="p-[15px]">{customer.customerId}</td>
                    <td className="p-[15px]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </td>
                    <td className="p-[15px]">12h ago</td>
                    <td className="p-[15px]  ">
                      <span
                        className={`py-2 px-5 w-[100%] text-nowrap rounded-full text-white ${
                          customer.status === "In-Progress"
                            ? "bg-[#10B981]"
                            : "bg-[#E4626F]"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="p-[15px] relative  text-center border-l border-[#FFE8E5]">
                      <button
                        onClick={() =>
                          handleDropdownToggle(customer.customerId)
                        }
                        className="text-gray-500 hover:text-gray-800"
                      >
                        <SlOptions />
                      </button>
                      {activeDropdown === customer.customerId && (
                        <div className="absolute top-2   right-[60%] bg-white z-10 border border-[#FFE8E5] rounded shadow-lg mt-2">
                          <ul>
                            <li
                              onClick={() => {
                                setIsDetailsModalOpen(true);
                              }}
                              className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                            >
                              <BsEye className="text-lg mr-2" />
                              View
                            </li>
                            <li
                              onClick={() =>
                                handleMenuClick("track", customer.customerId)
                              }
                              className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                            >
                              <BiEdit className="text-lg mr-2" />
                              Edit
                            </li>
                            <li
                              onClick={() =>
                                handleMenuClick("track", customer.customerId)
                              }
                              className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                            >
                              <BiTrash className="text-lg mr-2" />
                              Delete
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
        </>
      ) : (
        <ManagePropertyType />
      )}
    </div>
  );
};

export default CustomerTable;
