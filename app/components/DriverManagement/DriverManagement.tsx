"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Merriweather } from "next/font/google";
import Pagination from "../global/Pagination";
import { IoIosArrowDown } from "react-icons/io";
import TruckView from "./TruckView";
import DriverView from "./DriverView";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

interface Permission {
  permissionId: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  totalDriver: string;
  dateOfRegistration: string;
}

const permissions: Permission[] = [
  {
    permissionId: "P001",
    companyName: "XYZ Logistics",
    email: "contact@xyzlogistics.com",
    phoneNumber: "+123456789",
    totalDriver: "50",
    dateOfRegistration: "2024-06-19",
  },
  {
    permissionId: "P002",
    companyName: "ABC Transport",
    email: "info@abctransport.com",
    phoneNumber: "+987654321",
    totalDriver: "40",
    dateOfRegistration: "2024-06-18",
  },
  {
    permissionId: "P003",
    companyName: "Elite Movers",
    email: "support@elitemovers.com",
    phoneNumber: "+112233445",
    totalDriver: "35",
    dateOfRegistration: "2024-06-17",
  },
];

const DriverManagement: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredPermissions, setFilteredPermissions] =
    useState<Permission[]>(permissions);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] =
    useState<Permission | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isTruckView, setTruckView] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Active");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const filtered = permissions.filter(
        (permission) => permission.dateOfRegistration === formattedDate
      );
      setFilteredPermissions(filtered);
      setShowReset(true);
    } else {
      setFilteredPermissions(permissions);
    }
  }, [selectedDate]);

  const resetFilter = () => {
    setSelectedDate(null);
    setFilteredPermissions(permissions);
    setShowReset(false);
  };

  const handleViewDetails = (permission: Permission) => {
    setSelectedPermission(permission);
    setModalOpen(true);
    setDropdownOpen(null);
  };

  const toggleDropdown = (permissionId: string) => {
    setDropdownOpen((prev) => (prev === permissionId ? null : permissionId));
  };

  const toggleView = () => {
    setTruckView((prev) => !prev);
  };
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setFilterDropdownOpen(false);
  };
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-10 mb-5`}
        >
          {isTruckView ? "Truck Management" : "Driver Management"}
        </h1>
        <div className="flex flex-col items-start space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-3">
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

          <button
            onClick={toggleView}
            className="flex items-center border bg-[#FA1F00] text-white border-[#FFE8E5] py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/80 w-full md:w-auto"
          >
            {isTruckView ? "View Driver Management" : "View Truck Management"}
            <BsArrowRight className="ml-2" />
          </button>
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
                  <li
                    onClick={() => handleFilterClick("Active")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    Active
                  </li>
                  <li
                    onClick={() => handleFilterClick("Inactive")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    Inactive
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full md:w-auto">
            <button
              onClick={() => setDatePickerVisible(!isDatePickerVisible)}
              className="flex items-center border border-[#FFE8E5] py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/10 w-full md:w-auto"
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
      {!isTruckView ? (
        <>
          <TruckView
            filteredPermissions={filteredPermissions}
            toggleDropdown={toggleDropdown}
            dropdownOpen={dropdownOpen}
            handleViewDetails={handleViewDetails}
          />
          <Pagination />
        </>
      ) : (
        <>
          <DriverView
            filteredPermissions={filteredPermissions}
            toggleDropdown={toggleDropdown}
            dropdownOpen={dropdownOpen}
            handleViewDetails={handleViewDetails}
          />
          <Pagination />
        </>
      )}{" "}
      {modalOpen && selectedPermission && (
        <div
          onClick={() => setModalOpen(false)}
          className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white max-h-[580px] h-[80vh]  w-[95vw] mx-auto rounded-lg shadow-lg p-6  overflow-y-auto md:w-[60%] relative">
            <div
              style={{ scrollbarWidth: "none" }}
              className="  overflow-auto border border-[#FFE8E5] rounded-md p-4"
            >
              <div className="flex mb-4">
                <img
                  src="/assets/images/user.png"
                  alt="Profile Avatar"
                  width={60}
                  height={60}
                  className="mr-4 object-contain"
                />
                <div className="text-[#052145]">
                  <p className="text-[16px] font-[500]">Aqib Javid</p>
                  <p>aqib.official@gmail.com</p>
                  <p>+966 117603434</p>
                </div>
              </div>

              <p className="text-[#052145] mb-3 font-[500]">
                {isTruckView ? "Vehicle details" : " Driver Details"}
              </p>
              <table className="min-w-full table-auto border-collapse border border-[#FFE8E5]">
                <thead>
                  <tr className="bg-[#F8FAFC] text-left text-[#0A0B0A] border-t border-r border-l border-transparent">
                    <th className="p-[15px] font-[500]">S No</th>
                    <th className="p-[15px] font-[500]">Reg ID</th>
                    <th className="p-[15px] font-[500]">Truck Company</th>
                    <th className="p-[15px] font-[500]">Truck Name</th>
                    <th className="p-[15px] font-[500]">Email</th>
                    <th className="p-[15px] font-[500]">License Plate</th>
                    <th className="p-[15px] font-[500]">Date of Reg</th>
                    <th className="p-[15px] font-[500] text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPermissions.map((permission, index) => (
                    <tr
                      key={permission.permissionId}
                      className="hover:bg-gray-50 text-sm border border-[#FFE8E5]"
                    >
                      <td className="p-[15px] border-r border-[#FFE8E5]">
                        {index + 1}
                      </td>
                      <td className="p-[15px]">{permission.permissionId}</td>
                      <td className="p-[15px]">Direct Mover LLC</td>
                      <td className="p-[15px]">john.doe123@gmail.com</td>
                      <td className="p-[15px]">{permission.phoneNumber}</td>
                      <td className="p-[15px]">12</td>
                      <td className="p-[15px]">
                        {permission.dateOfRegistration}
                      </td>
                      <td className="p-[15px]">
                        <span
                          className="py-2 px-5 rounded-full text-white 
                    
                    bg-[#10B981]"
                        >
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-full p-2 mt-4 rounded-sm bg-[#F8FAFC] flex items-center justify-between text-[18px] font-[500]">
                <p>Total Vehicle</p>
                <p>20</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverManagement;
