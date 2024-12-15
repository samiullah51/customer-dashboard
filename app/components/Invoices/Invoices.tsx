"use client";
import React, { useState, useEffect } from "react";
import { SlOptions } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Merriweather } from "next/font/google";
import Pagination from "../global/Pagination";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

interface Invoice {
  invoiceId: string;
  bookingRef: string;
  companyName: string;
  payment: string;
  date: string;
  invoiceNumber: string;
}

const invoices: Invoice[] = [
  {
    invoiceId: "INV001",
    bookingRef: "12345",
    companyName: "XYZ Ltd.",
    payment: "$100",
    date: "2024-06-19",
    invoiceNumber: "INV-0xf23",
  },
  {
    invoiceId: "INV001",
    bookingRef: "12345",
    companyName: "XYZ Ltd.",
    payment: "$100",
    date: "2024-06-19",
    invoiceNumber: "INV-0xf23",
  },
  {
    invoiceId: "INV001",
    bookingRef: "12345",
    companyName: "XYZ Ltd.",
    payment: "$100",
    date: "2024-06-19",
    invoiceNumber: "INV-0xf23",
  },
  {
    invoiceId: "INV001",
    bookingRef: "12345",
    companyName: "XYZ Ltd.",
    payment: "$100",
    date: "2024-06-19",
    invoiceNumber: "INV-0xf23",
  },
];

const InvoicesTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>(invoices);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const filtered = invoices.filter(
        (invoice) => invoice.date === formattedDate
      );
      setFilteredInvoices(filtered);
      setShowReset(true);
    } else {
      setFilteredInvoices(invoices);
    }
  }, [selectedDate]);

  const resetFilter = () => {
    setSelectedDate(null);
    setFilteredInvoices(invoices);
    setShowReset(false);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-10 mb-5`}
        >
          Invoicing
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
              <th className="p-[15px] font-[500]">Booking reference</th>
              <th className="p-[15px] font-[500]">Company name</th>
              <th className="p-[15px] font-[500]">Payment</th>
              <th className="p-[15px] font-[500]">Date</th>
              <th className="p-[15px] font-[500]">Invoice Number</th>
              <th className="p-[15px] font-[500]">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 text-sm border-t border-[#FFE8E5] bg-white font-normal text-[#052145]"
              >
                <td className="p-[15px] border-r border-[#FFE8E5]">
                  {index + 1}
                </td>
                <td className="p-[15px]">#{invoice.invoiceNumber}</td>
                <td className="p-[15px]">{invoice.companyName}</td>
                <td className="p-[15px]">{invoice.payment}</td>
                <td className="p-[15px]">{invoice.companyName}</td>
                <td className="p-[15px]">{invoice.date}</td>
                <td className="p-[15px] underline cursor-pointer">
                  Download PDF
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

export default InvoicesTable;
