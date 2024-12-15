import React from "react";
import { CiEdit, CiWallet } from "react-icons/ci";
import { HiOutlineDocumentText, HiOutlineUser } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
import { PiCalendarDotsLight, PiUsersThree } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

function Sidebar({
  isActive,
  handleLinkClick,
  sidebarRef,
  isSidebarOpen,
}: any) {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      ref={sidebarRef}
      className={`fixed top-0 left-0 overflow-y-scroll min-w-[300px] text-nowrap md:relative z-40 bg-[#fff] text-[#000] w-64 md:w-1/6 py-[30px] px-[20px] h-full flex flex-col transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 my-3">
        <h2 className="text-xl font-bold text-center text-[26px]">LOGO</h2>
      </div>
      <ul className="space-y-4 flex-1 mb-10">
        <li>
          <button
            onClick={() => handleLinkClick("/dashboard")}
            className={`flex items-center px-4 py-3 w-full rounded-md text-left transition ${
              isActive("/dashboard")
                ? "bg-[#FA1F00] text-white"
                : "hover:bg-[#FA1F00]/30"
            }`}
          >
            <RxDashboard className="mr-3" size={20} />
            Booking Management
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick("/dashboard/user-management")}
            className={`flex items-center px-4 py-3 w-full rounded-md text-left transition ${
              isActive("/dashboard/user-management")
                ? "bg-[#FA1F00] text-white"
                : "hover:bg-[#FA1F00]/30"
            }`}
          >
            <HiOutlineDocumentText className="mr-3" size={20} />
            Quote Management
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick("/dashboard/payment-history")}
            className={`flex items-center px-4 py-3 w-full rounded-md text-left transition ${
              isActive("/dashboard/payment-history")
                ? "bg-[#FA1F00] text-white"
                : "hover:bg-[#FA1F00]/30"
            }`}
          >
            <CiWallet className="mr-3" size={20} />
            Payment History
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick("/dashboard/invoicing")}
            className={`flex items-center px-4 py-3 w-full rounded-md text-left transition ${
              isActive("/dashboard/invoicing")
                ? "bg-[#FA1F00] text-white"
                : "hover:bg-[#FA1F00]/30"
            }`}
          >
            <PiCalendarDotsLight className="mr-3" size={20} />
            Invoicing
          </button>
        </li>{" "}
        <li>
          <button
            onClick={() => handleLinkClick("/dashboard/dispute-management")}
            className={`flex items-center px-4 py-3 w-full rounded-md text-left transition ${
              isActive("/dashboard/dispute-management")
                ? "bg-[#FA1F00] text-white"
                : "hover:bg-[#FA1F00]/30"
            }`}
          >
            <CiEdit className="mr-3" size={20} />
            Customer Support
          </button>
        </li>
      </ul>
      <p className="mt-auto pb-2  text-[gray] text-sm text-center select-none">
        © Copyright All Right Reserved
      </p>
    </div>
  );
}

export default Sidebar;
