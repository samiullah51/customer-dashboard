"use client";
import React, { useState, useEffect, useRef } from "react";
import { SlCalender, SlOptions } from "react-icons/sl";
import { BsEye } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "../global/Pagination";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineChartPie } from "react-icons/hi2";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface Transaction {
  transactionId: string;
  customerName: string;
  payment: string;
  date: string;
  paymentMethod: string;
  status: "Active" | "Cancelled";
}

const transactions: Transaction[] = [
  {
    transactionId: "T001",
    customerName: "John Smith",
    payment: "$100",
    date: "2024-06-19",
    paymentMethod: "Credit Card",
    status: "Active",
  },
  {
    transactionId: "T002",
    customerName: "Alice Johnson",
    payment: "$50",
    date: "2024-06-18",
    paymentMethod: "PayPal",
    status: "Cancelled",
  },
  {
    transactionId: "T003",
    customerName: "Robert Brown",
    payment: "$75",
    date: "2024-06-17",
    paymentMethod: "Debit Card",
    status: "Active",
  },
  {
    transactionId: "T004",
    customerName: "Emily Davis",
    payment: "$200",
    date: "2024-06-19",
    paymentMethod: "Credit Card",
    status: "Cancelled",
  },
  {
    transactionId: "T005",
    customerName: "Chris Wilson",
    payment: "$120",
    date: "2024-06-16",
    paymentMethod: "Bank Transfer",
    status: "Active",
  },
  {
    transactionId: "T006",
    customerName: "Sophia Lee",
    payment: "$150",
    date: "2024-06-15",
    paymentMethod: "Credit Card",
    status: "Active",
  },
  {
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All companies");
  const [selectedReport, setSelectedReport] = useState("Generate Revenue");

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

  const handleFilterClick = (filter: string) => {
    setFilterDropdownOpen(false);
    setSelectedFilter(filter);
  };
  const handleDropdownToggle = (transactionId: string) => {
    setActiveDropdown(activeDropdown === transactionId ? null : transactionId);
  };

  const handleMenuClick = (action: string, transaction: Transaction) => {
    if (action === "view") {
      setSelectedTransaction(transaction);
      setModalOpen(true);
    }
    setActiveDropdown(null);
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
                          onClick={() => handleMenuClick("view", transaction)}
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

      {/* Modal */}
      {
        // modalOpen && selectedTransaction && (
        //   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        //     <div
        //       style={{ scrollbarWidth: "none" }}
        //       className="bg-white max-h-[700px] h-[70vh] overflow-y-auto rounded-lg shadow-lg p-6 w-[95%] md:w-1/3 relative"
        //     >
        //       <div className="border  border-[#FFE8E5] rounded-md p-4">
        //         <div className="flex mb-4">
        //           <img
        //             src="https://www.svgrepo.com/show/384682/account-avatar-profile-user-10.svg"
        //             alt="Profile Avatar"
        //             width={60}
        //             height={60}
        //             className="mr-4"
        //           />
        //           <div className="text-[#052145]">
        //             <p className="text-[16px] font-[500]">Aqib Javid</p>
        //             <p>aqib.official@gmail.com</p>
        //             <p>+966 117603434</p>
        //           </div>
        //         </div>
        //         <p className="text-[#052145] mb-3 font-[500]">Details</p>
        //         <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
        //           <p>Book date</p>
        //           <p>Thursday, 8 August 2024</p>
        //         </div>
        //         <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
        //           <p>Company</p>
        //           <p>Direct Mover LLC</p>
        //         </div>
        //         <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
        //           <p>Refund request date</p>
        //           <p>Thursday, 12 August 2024</p>
        //         </div>
        //         <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
        //           <p>Amount</p>
        //           <p>$500</p>
        //         </div>
        //         <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
        //           <p>Penalty %</p>
        //           <p>10%</p>
        //         </div>
        //         {/* Grand Total */}
        //         <div className="w-full p-2 rounded-sm bg-[#F8FAFC] flex items-center justify-between text-[18px] font-[500]">
        //           <p>Grand Total</p>
        //           <p>$450</p>
        //         </div>
        //       </div>
        //       {/* Cancellation Policy */}
        //       <div className="w-[95%]  text-wrap mt-4 text-[14px] font-[400]">
        //         <p className="font-[500]">Cancellation Policy:</p>
        //         <p className="my-2 w-full">
        //           • Full refund if canceled 7 days before the move; 50% refund if
        //           canceled within 3-6 days; no refund if canceled less than 3 days
        //           before the move.
        //         </p>
        //       </div>
        //       <div className="flex flex-col">
        //         <button
        //           onClick={() => setModalOpen(false)}
        //           className="w-full bg-[#FA1F00] p-2 rounded-md shadow-sm my-2 hover:bg-red-600 text-white"
        //         >
        //           Confirm
        //         </button>
        //         <button
        //           onClick={() => setModalOpen(false)}
        //           className="w-full border border-[#FA1F00] text-black p-2 rounded-md shadow-sm my-2 hover:bg-red-600/10 "
        //         >
        //           Close
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // )
      }
    </div>
  );
};

export default TransactionTable;
