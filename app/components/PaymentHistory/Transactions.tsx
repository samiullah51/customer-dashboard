"use client";
import React, { useState, useEffect } from "react";
import { SlCalender, SlOptions } from "react-icons/sl";
import { BsEye } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "../global/Pagination";
import { Merriweather } from "next/font/google";
import DetailsModal from "./DetailsModal";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface Transaction {
  orderNumber: string;
  transactionId: string;
  customerName: string;
  payment: string;
  date: string;
  paymentMethod: string;
  status: "Active" | "Cancelled";
}

const transactions: Transaction[] = [
  {
    orderNumber: "001",
    transactionId: "T001",
    customerName: "John Smith",
    payment: "$100",
    date: "2024-06-19",
    paymentMethod: "Credit Card",
    status: "Active",
  },
  {
    orderNumber: "002",

    transactionId: "T002",
    customerName: "Alice Johnson",
    payment: "$50",
    date: "2024-06-18",
    paymentMethod: "PayPal",
    status: "Cancelled",
  },
  {
    orderNumber: "003",

    transactionId: "T003",
    customerName: "Robert Brown",
    payment: "$75",
    date: "2024-06-17",
    paymentMethod: "Debit Card",
    status: "Active",
  },
  {
    orderNumber: "004",

    transactionId: "T004",
    customerName: "Emily Davis",
    payment: "$200",
    date: "2024-06-19",
    paymentMethod: "Credit Card",
    status: "Cancelled",
  },
  {
    orderNumber: "005",

    transactionId: "T005",
    customerName: "Chris Wilson",
    payment: "$120",
    date: "2024-06-16",
    paymentMethod: "Bank Transfer",
    status: "Active",
  },
  {
    orderNumber: "006",

    transactionId: "T006",
    customerName: "Sophia Lee",
    payment: "$150",
    date: "2024-06-15",
    paymentMethod: "Credit Card",
    status: "Active",
  },
  {
    orderNumber: "007",

    transactionId: "T007",
    customerName: "Liam Martinez",
    payment: "$90",
    date: "2024-06-20",
    paymentMethod: "PayPal",
    status: "Cancelled",
  },
];

const TransactionTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredTransactions, setFilteredTransactions] =
    useState<Transaction[]>(transactions);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const openIsDetialsModal = () => setIsDetailsModalOpen(true);
  const closeDetailsModal = () => setIsDetailsModalOpen(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const filtered = transactions.filter(
        (transaction) => transaction.date === formattedDate
      );
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactions);
    }
  }, [selectedDate]);

  const handleDropdownToggle = (transactionId: string) => {
    setActiveDropdown(activeDropdown === transactionId ? null : transactionId);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col items-start md:flex-row  md:items-center justify-between">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-10 mb-5`}
        >
          Transaction History
        </h1>
        <div className="flex flex-col md:flex-row  items-start md:items-start md:space-x-3">
          <div className="relative flex my-2 md:my-0 items-center">
            <button className="flex items-center border border-[#FFE8E5] py-3 px-5 rounded-sm text-sm">
              <SlCalender className="mr-2" />
              Thrusday, 8 Auguest 2024
            </button>
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
              <th className="p-[15px] font-[500]">Order No</th>
              <th className="p-[15px] font-[500]">Transaction ID</th>
              <th className="p-[15px] font-[500]">Company Name</th>
              <th className="p-[15px] font-[500]">Payment</th>
              <th className="p-[15px] font-[500]">Date</th>
              <th className="p-[15px] font-[500]">Status</th>
              <th className="p-[15px] font-[500] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr
                key={transaction.transactionId}
                className="hover:bg-gray-50 text-sm border-t border-[#FFE8E5] bg-white font-normal text-[#052145]"
              >
                <td className="p-[15px] border-r border-[#FFE8E5]">
                  {index + 1}
                </td>
                <td className="p-[15px]">{transaction.orderNumber}</td>
                <td className="p-[15px]">{transaction.transactionId}</td>
                <td className="p-[15px]">{transaction.customerName}</td>
                <td className="p-[15px]">{transaction.payment}</td>
                <td className="p-[15px]">{transaction.date}</td>
                <td className="p-[15px]">
                  <span
                    className={`py-1 px-5 rounded-full text-white ${
                      transaction.status === "Active"
                        ? "bg-[#10B981]"
                        : "bg-[#E4626F]"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="p-[15px] relative text-center border-l border-[#FFE8E5]">
                  <button
                    onClick={() =>
                      handleDropdownToggle(transaction.transactionId)
                    }
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <SlOptions />
                  </button>
                  {activeDropdown === transaction.transactionId && (
                    <div className="absolute bottom-2 right-[60%] bg-white z-10 border border-[#FFE8E5] rounded shadow-lg mt-2">
                      <ul>
                        <li
                          onClick={() => setIsDetailsModalOpen(true)}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          <BsEye className="text-lg mr-2" />
                          View
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
      {isDetailsModalOpen && <DetailsModal closeModal={closeDetailsModal} />}
    </div>
  );
};

export default TransactionTable;
