"use client";

import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { BsPaypal } from "react-icons/bs";
import { CiLock, CiWallet } from "react-icons/ci";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { SiMastercard } from "react-icons/si";
import { SiGooglepay } from "react-icons/si";
const EditProfile = () => {
  const [image, setImage] = useState(
    "https://cdn.vectorstock.com/i/1000v/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
  );
  const [imagePreview, setImagePreview] = useState(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 w-full md:w-1/2 mx-auto mt-10 md:mt-20">
      <div className="flex justify-center mb-4 ">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            <img
              src={imagePreview}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <label
            htmlFor="fileInput"
            className="absolute bottom-0 right-0 bg-white p-2 rounded-full cursor-pointer hover:bg-gray-200"
          >
            <AiOutlineEdit className="text-gray-600 w-5 h-5" />
          </label>
        </div>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <div className="w-full flex-col md:flex-row flex">
        <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <HiOutlineUser className="text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-none outline-none p-2"
          />
        </div>
        <div className="mt-1 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <HiOutlineUser className="text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-none outline-none p-2"
          />
        </div>
      </div>
      <div className="w-full flex-col md:flex-row flex">
        <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <HiOutlineEnvelope className="text-gray-500 w-6 h-6" />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-none outline-none p-2"
          />
        </div>
        <div className="mt-1 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <BiCalendar className="text-gray-500 w-6 h-6" />
          <input
            type="date"
            placeholder="12-09-1998"
            className="w-full border-none outline-none p-2 "
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium p-2 rounded-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
};

const ChangePassword = () => (
  <div className="space-y-6 w-full md:w-1/2 mx-auto mt-6 md:mt-20">
    <div>
      <div className="mt-1 flex items-center w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
        <CiLock className="text-gray-500 w-6 h-6" />
        <input
          type="password"
          placeholder="Old Password"
          className="w-full border-none outline-none p-2"
        />
      </div>
    </div>

    <div>
      <div className="mt-1 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
        <CiLock className="text-gray-500 w-6 h-6" />
        <input
          type="password"
          placeholder="New Password"
          className="w-full border-none outline-none p-2"
        />
      </div>
    </div>

    <div>
      <div className="mt-1 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
        <CiLock className="text-gray-500 w-6 h-6" />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border-none outline-none p-2"
        />
      </div>
    </div>

    <div className="mt-4">
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium p-2 rounded-lg"
      >
        Update
      </button>
    </div>
  </div>
);

const ManagePaymentMethod = () => {
  const [image, setImage] = useState(
    "https://cdn.vectorstock.com/i/1000v/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
  );
  const [imagePreview, setImagePreview] = useState(image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 w-full md:w-1/2 mx-auto mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between ">
        <div className="border border-[#FFA397] p-4 rounded-md bg-white w-full md:w-1/3 md:mr-1">
          <CiWallet className="text-[30px]" />
          <h1 className="mt-2">Credit Card</h1>
        </div>
        <div className="border my-1 md:my-0  p-4 rounded-md bg-white w-full md:w-1/3  md:mr-1">
          <BsPaypal className="text-[30px]" />
          <h1 className="mt-2">Paypal</h1>
        </div>
        <div className="border  p-4 bg-white rounded-md w-full md:w-1/3">
          <SiGooglepay className="text-[30px]" />
          <h1 className="mt-2">Google Pay</h1>
        </div>
      </div>
      <div className="w-full flex-col md:flex-row flex">
        <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <HiOutlineUser className="text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="Cardholder name"
            className="w-full border-none outline-none p-2"
          />
        </div>
      </div>
      <div className="w-full flex-col md:flex-row flex">
        <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <SiMastercard className="text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="Card number"
            className="w-full border-none outline-none p-2"
          />
        </div>
      </div>
      <div className="w-full flex-col md:flex-row flex">
        <div className="mt-1 mr-3 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <BiCalendar className="text-gray-500 w-6 h-6" />
          <input
            type="date"
            placeholder="Expiry date"
            className="w-full border-none outline-none p-2 "
          />
        </div>
        <div className="mt-1  flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
          <CiLock className="text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="CSV"
            className="w-full border-none outline-none p-2"
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium p-2 rounded-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
};
function page() {
  const [activeTab, setActiveTab] = useState("1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return <EditProfile />;
      case "2":
        return <ChangePassword />;
      case "3":
        return <ManagePaymentMethod />;
      default:
        return <EditProfile />;
    }
  };

  return (
    <div className="w-full flex justify-center text-nowrap">
      <div className="p-5 rounded-lg w-full">
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex overflow-scroll flex-col md:flex-row justify-start border-b-2 mb-4 "
        >
          <div
            className={`tab-title ${
              activeTab === "1"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors md:mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("1")}
            role="tab"
            aria-selected={activeTab === "1"}
            aria-controls="tab-1"
          >
            Edit Profile
          </div>
          <div
            className={`tab-title ${
              activeTab === "2"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("2")}
            role="tab"
            aria-selected={activeTab === "2"}
            aria-controls="tab-2"
          >
            Change Password
          </div>
          <div
            className={`tab-title ${
              activeTab === "3"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("3")}
            role="tab"
            aria-selected={activeTab === "3"}
            aria-controls="tab-3"
          >
            Manage payment method
          </div>
        </div>

        <div role="tabpanel" id={`tab-${activeTab}`}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default page;
