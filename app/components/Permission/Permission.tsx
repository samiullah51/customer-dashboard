"use client";

import React, { useState, useEffect } from "react";
import { SlOptions, SlPhone } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";
import { BsEye } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { Merriweather } from "next/font/google";
import Pagination from "../global/Pagination";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlineUserCircle } from "react-icons/hi2";
import { CiLock } from "react-icons/ci";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

interface Registration {
  Id: string;
  regId: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateOfReg: string;
  role: string;
}

const registrations: Registration[] = [
  {
    Id: "1",
    regId: "R001",
    username: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+123456789",
    dateOfReg: "2024-06-19",
    role: "Admin",
  },
  {
    Id: "2",
    regId: "R002",
    username: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+987654321",
    dateOfReg: "2024-06-18",
    role: "Accountant",
  },
];

const RegistrationTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredRegistrations, setFilteredRegistrations] =
    useState<Registration[]>(registrations);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDropdown = (regId: string) => {
    setDropdownOpen((prev) => (prev === regId ? null : regId));
  };

  const handleViewDetails = (registration: Registration) => {
    console.log("View details of:", registration);
    setDropdownOpen(null);
  };

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const filtered = registrations.filter(
        (registration) => registration.dateOfReg === formattedDate
      );
      setFilteredRegistrations(filtered);
    } else {
      setFilteredRegistrations(registrations);
    }
  }, [selectedDate]);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-10 mb-5`}
        >
          User Management
        </h1>
        <div className="relative flex flex-col items-start space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-3">
          <button
            onClick={openModal}
            className="flex items-center border bg-[#FA1F00] text-white border-[#FFE8E5] py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/80 w-full md:w-auto"
          >
            + Add new
          </button>

          {isModalOpen && (
            <div
              style={{
                margin: "0",
              }}
              className="fixed   inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center z-50  "
            >
              <div
                style={{ scrollbarWidth: "none" }}
                className="bg-white p-8 text-[#052145] rounded-lg md:w-[50%] md:max-w-[600px] w-[90%] mx-auto h-[82vh] overflow-y-auto  "
              >
                <h2
                  className={`${merriweather.className} text-xl font-bold mb-4 text-[#052145]`}
                >
                  Add New Role
                </h2>
                <form>
                  <img
                    src="/assets/icons/edit.png"
                    className="mx-auto my-7"
                    alt=""
                  />

                  <div className="my-3 flex items-center w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                    <FaRegUser />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border-none outline-none p-2"
                      autoFocus
                    />
                  </div>
                  <div className="my-3 flex items-center w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                    <HiOutlineEnvelope className="text-[20px] mt-[2px]" />

                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border-none outline-none p-2"
                      autoFocus
                    />
                  </div>
                  <div className="my-3 flex items-center w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                    <SlPhone />
                    <input
                      type="text"
                      placeholder="Phone Number "
                      className="w-full border-none outline-none p-2"
                      autoFocus
                    />
                  </div>

                  <div className="my-3 flex items-center w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                    <CiLock className="text-[" />
                    <input
                      type="password"
                      placeholder="password"
                      className="w-full border-none outline-none p-2"
                      autoFocus
                    />
                  </div>

                  <div className="my-3 flex items-center w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                    <HiOutlineUserCircle className="text-lg" />

                    <input
                      type="text"
                      placeholder="Choose role"
                      className="w-full border-none outline-none p-2"
                      autoFocus
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start justify-center  mt-8  text-[#052145] md:items-center md:justify-between">
                    <h3
                      className={`${merriweather.className} text-md font-semibold mb-4 text-[#052145]`}
                    >
                      Select Permission
                    </h3>
                    <div className="flex text-sm justify-between items-center mb-4">
                      <div className="mr-5 ">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className=" mr-1 accent-red-500 w-4 h-4 rounded-md"
                          />
                          View all
                        </label>
                      </div>
                      <div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className=" mr-1 accent-red-500 w-4 h-4 rounded-md"
                          />
                          View & Edit all
                        </label>
                      </div>
                    </div>
                  </div>
                  {[
                    "Booking management",
                    "Quote management",
                    "Financial management",
                    "Invoicing",
                    "Truck/Driver management",
                    "User management",
                    "Customer support",
                    "Setting",
                  ].map((permission) => (
                    <div
                      className="flex flex-col items-start justify-center md:flex-row mt-4 px-1  text-sm md:justify-between md:items-center mb-6"
                      key={permission}
                    >
                      <span>{permission}</span>
                      <div className="flex items-center space-x-4 ">
                        <label className="flex items-center my-1 md:my-0 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-1 accent-red-500 w-4 h-4 rounded-md"
                          />
                          View
                        </label>
                        <label className=" flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-1 accent-red-500 w-4 h-4 rounded-md"
                          />
                          View & Edit
                        </label>
                      </div>
                    </div>
                  ))}
                  <button
                    type="submit"
                    className={` w-full px-4 py-2 bg-[#FA1F00] hover:bg-[#FA1F00]/90 text-white rounded-md`}
                  >
                    Add New
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="w-[90vw] min-h-[250px] mx-auto md:w-full overflow-auto"
      >
        <table className="min-w-full table-auto border-collapse border border-[#FFE8E5]">
          <thead>
            <tr className="bg-[#F8FAFC] text-center my-1 text-[#052145] border-t border-r border-l border-transparent">
              <th className="p-[15px] font-[500]">S No</th>
              <th className="p-[15px] font-[500]">Registration ID</th>
              <th className="p-[15px] font-[500]">Username</th>
              <th className="p-[15px] font-[500]">Email</th>
              <th className="p-[15px] font-[500]">Phone Number</th>
              <th className="p-[15px] font-[500]">Date of Registration</th>
              <th className="p-[15px] font-[500] text-center">Role</th>
              <th className="p-[15px] font-[500] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRegistrations.map((registration, index) => (
              <tr
                key={registration.regId}
                className="hover:bg-gray-50 text-center text-sm border-b border-[#FFE8E5]"
              >
                <td className="p-[15px] border-r border-[#FFE8E5]">
                  {index + 1}
                </td>
                <td className="p-[15px]">{registration.regId}</td>
                <td className="p-[15px]">{registration.username}</td>
                <td className="p-[15px]">{registration.email}</td>
                <td className="p-[15px]">{registration.phoneNumber}</td>
                <td className="p-[15px]">{registration.dateOfReg}</td>
                <td className="p-[15px] ">
                  {" "}
                  <p className="bg-[#D6E7FC] px-2 p-[3px] rounded-full text-[#052145] text-center">
                    {registration.role}
                  </p>{" "}
                </td>
                <td className="p-[15px] text-center relative border-l border-[#FFE8E5]">
                  <button
                    onClick={() => toggleDropdown(registration.regId)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <SlOptions />
                  </button>
                  {dropdownOpen === registration.regId && (
                    <div className="absolute top-[0px] right-[60%] bg-white z-10 border border-[#FFE8E5] rounded shadow-lg">
                      <ul>
                        <li
                          onClick={() => handleViewDetails(registration)}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          <BsEye className="text-lg mr-2" />
                          View
                        </li>
                        <li
                          onClick={() => handleViewDetails(registration)}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          <BiLock className="text-lg mr-2" />
                          Edit
                        </li>
                        <li
                          onClick={() => handleViewDetails(registration)}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          <BiLock className="text-lg mr-2" />
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
    </div>
  );
};

export default RegistrationTable;
