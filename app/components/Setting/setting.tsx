"use client";
import React, { useState } from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import ApiKeysManagement from "./ApiKeysManagement";
import Services from "./Services";
import ManagePropertyType from "./ManagePropertyType";

function Setting() {
  const [activeTab, setActiveTab] = useState("1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return <EditProfile />;
      case "2":
        return <ChangePassword />;
      case "3":
        return <ApiKeysManagement />;
      case "4":
        return <Services />;
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
            Api Keys Management
          </div>
          <div
            className={`tab-title ${
              activeTab === "4"
                ? "border-b-2 border-[#FA1F00] text-[#FA1F00]"
                : "text-gray-600"
            } py-2 px-4 cursor-pointer transition-colors mr-20 hover:text-[#FA1F00]`}
            onClick={() => setActiveTab("4")}
            role="tab"
            aria-selected={activeTab === "4"}
            aria-controls="tab-4"
          >
            Services
          </div>
        </div>

        <div role="tabpanel" id={`tab-${activeTab}`}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Setting;
