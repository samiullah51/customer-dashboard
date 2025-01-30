"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AddModal from "./AddModal";

import ManagePropertyType from "../Setting/ManagePropertyType";

const CustomerTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleView = (val: any) => {
    setIsDropdownOpen(false);
  };

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="container mx-auto py-0 md:py-4 md:px-7">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className={` text-[18px] font-[700] text-[#052145] mt-10 mb-5`}>
          Frequently Ask Questions
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3">
          <div className="relative flex   items-center  md:mt-0 space-y-3 md:space-y-0">
            <button
              onClick={openModal}
              className={` flex mr-2 items-center border bg-[#FA1F00] ml-2 text-white py-3 px-5 rounded-md text-sm hover:bg-[#FA1F00]/90`}
            >
              + Create new
            </button>

            {isDropdownOpen && (
              <div className="absolute select-none top-12 right-6 bg-white border border-[#FFE8E5] rounded-md shadow-lg p-0 z-10">
                <p
                  className="px-5 py-3  text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleView(true)}
                >
                  FAQs
                </p>
                <p
                  className="px-5 py-3  text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleView(false)}
                >
                  Dispute Tickets
                </p>
              </div>
            )}
            {isModalOpen && <AddModal />}
          </div>
        </div>
      </div>

      <ManagePropertyType />
    </div>
  );
};

export default CustomerTable;
