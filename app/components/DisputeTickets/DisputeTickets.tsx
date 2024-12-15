"use client";
import React, { useState, useEffect } from "react";
import { SlOptions } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsEye } from "react-icons/bs";
import { LuUserPlus2 } from "react-icons/lu";
import { AiTwotoneEdit } from "react-icons/ai";
import { PiTrashSimpleThin } from "react-icons/pi";
import { Merriweather } from "next/font/google";
import Pagination from "../global/Pagination";
import DisputeModal from "./DisputeModal";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface Ticket {
  ticketId: string;
  customerName: string;
  companyName: string;
  subject: string;
  dataReceived: string;
  status: "In-Progress" | "Pending" | "Rejected" | "Completed";
}

const tickets: Ticket[] = [
  {
    ticketId: "T001",
    customerName: "John Smith",
    companyName: "XYZ Ltd.",
    subject: "Invoice Discrepancy",
    dataReceived: "12h ago",
    status: "In-Progress",
  },
  {
    ticketId: "T002",
    customerName: "Alice Johnson",
    companyName: "ABC Corp.",
    subject: "Payment Issue",
    dataReceived: "2d ago",
    status: "Pending",
  },
  {
    ticketId: "T003",
    customerName: "Robert Brown",
    companyName: "Acme Inc.",
    subject: "Refund Request",
    dataReceived: "1d ago",
    status: "Rejected",
  },
  {
    ticketId: "T004",
    customerName: "Emily Davis",
    companyName: "Global Solutions",
    subject: "Payment Confirmation",
    dataReceived: "3h ago",
    status: "In-Progress",
  },
  {
    ticketId: "T005",
    customerName: "Chris Wilson",
    companyName: "Tech Gurus",
    subject: "Invoice Clarification",
    dataReceived: "5h ago",
    status: "Pending",
  },
  {
    ticketId: "T006",
    customerName: "Sophia Lee",
    companyName: "Innovative Enterprises",
    subject: "Invoice Discrepancy",
    dataReceived: "1h ago",
    status: "In-Progress",
  },
  {
    ticketId: "T007",
    customerName: "Liam Martinez",
    companyName: "Visionary Solutions",
    subject: "Payment Overcharge",
    dataReceived: "4h ago",
    status: "Rejected",
  },
];
const DisputeTicketsTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(tickets);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Ticket | null>(
    null
  );
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const filtered = tickets.filter(
        (ticket) => ticket.dataReceived === formattedDate
      );
      setFilteredTickets(filtered);
      setShowReset(true);
    } else {
      setFilteredTickets(tickets);
    }
  }, [selectedDate]);

  const resetFilter = () => {
    setSelectedDate(null);
    setFilteredTickets(tickets);
    setShowReset(false);
  };

  const handleView = (ticket: Ticket) => {
    setSelectedTransaction(ticket);
    setModalOpen(true);
    setDropdownVisible(null);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-10 mb-5`}
        >
          Dispute Tickets
        </h1>
        <div className="flex items-center space-x-3">
          {showReset && (
            <button
              onClick={resetFilter}
              className="flex items-center border border-[#FFE8E5] py-3 px-4 rounded-md text-sm hover:bg-[#FA1F00]/10"
              title="Reset Filter"
            >
              <FiRefreshCcw className="mr-2" />
              Reset
            </button>
          )}
          <div className="relative">
            <button
              onClick={() => setDatePickerVisible(!isDatePickerVisible)}
              className="flex items-center border border-[#FFE8E5] py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/10"
            >
              <FaCalendarAlt className="mr-2" />
              Search by Date
            </button>
            {isDatePickerVisible && (
              <div className="absolute top-12 right-0 z-10">
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
      <div
        style={{ scrollbarWidth: "none" }}
        className="w-[90vw] mx-auto md:w-full overflow-auto "
      >
        <table className="min-w-full min-h-[230px] table-auto border-collapse border border-[#FFE8E5]">
          <thead>
            <tr className="bg-[#F8FAFC] text-left text-[#0A0B0A] border-t border-r border-l border-transparent">
              <th className="p-[15px] font-[500]">S No</th>
              <th className="p-[15px] font-[500]">Ticket ID</th>
              <th className="p-[15px] font-[500]">Customer Name</th>
              <th className="p-[15px] font-[500]">Company Name</th>
              <th className="p-[15px] font-[500]">Subject</th>
              <th className="p-[15px] font-[500]">Data Received</th>
              <th className="p-[15px] font-[500] ">Status</th>
              <th className="p-[15px] font-[500] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket, index) => (
              <tr
                key={ticket.ticketId}
                className="hover:bg-gray-50 text-sm border-t border-[#FFE8E5] bg-white font-normal text-[#052145]"
              >
                <td className="p-[15px] border-r border-[#FFE8E5]">
                  {index + 1}
                </td>
                <td className="p-[15px]">{ticket.ticketId}</td>
                <td className="p-[15px]">{ticket.customerName}</td>
                <td className="p-[15px]">{ticket.companyName}</td>
                <td className="p-[15px]">{ticket.subject}</td>
                <td className="p-[15px]">{ticket.dataReceived}</td>
                <td className="p-[15px]  ">
                  <span
                    className={`py-2 px-5 w-[100%] text-nowrap rounded-full text-white ${
                      ticket.status === "In-Progress"
                        ? "bg-[#10B981]"
                        : ticket.status === "Pending"
                        ? "bg-[#FFC107]"
                        : "bg-[#E4626F]"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="p-[15px] relative text-center border-l border-[#FFE8E5]">
                  <button
                    className="text-gray-500 hover:text-gray-800"
                    onClick={() =>
                      setDropdownVisible(
                        dropdownVisible === ticket.ticketId
                          ? null
                          : ticket.ticketId
                      )
                    }
                  >
                    <SlOptions />
                  </button>
                  {dropdownVisible === ticket.ticketId && (
                    <div className="absolute top-0 right-[60%] bg-white min-w-[160px] z-10 border border-[#FFE8E5] rounded shadow-lg mt-2">
                      <ul>
                        <li
                          onClick={() => handleView(ticket)}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          <BsEye className="text-lg mr-2" />
                          View
                        </li>
                        <li className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer">
                          <LuUserPlus2 className="text-lg mr-2" />
                          Invite Company
                        </li>
                        <li className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer">
                          <AiTwotoneEdit className="text-lg mr-2" />
                          Reply
                        </li>
                        <li className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer">
                          <PiTrashSimpleThin className="text-lg mr-2" />
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

      {modalOpen && selectedTransaction && (
        <DisputeModal setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default DisputeTicketsTable;
