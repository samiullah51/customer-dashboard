import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";

function DetailsModal({ closeModal }: any) {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
        style={{ margin: 0 }}
        onClick={closeModal}
      ></div>
      <div className="fixed  inset-0 text-[#052145] flex items-center justify-center z-[100]">
        <div
          style={{ scrollbarWidth: "none" }}
          className="bg-white relative rounded-lg p-6 max-h-[85vh] overflow-scroll w-[95%] md:w-1/3"
        >
          <span
            className="absolute top-1 right-2 text-2xl cursor-pointer hover:font-bold"
            onClick={closeModal}
          >
            x
          </span>
          <h1 className="font-[500]">Order Details</h1>
          <div className="flex my-3 items-center justify-between">
            <p>Order Number</p>
            <p>001</p>
          </div>
          <div className="flex my-3 items-center justify-between">
            <p>Transaction ID</p>
            <p>T001</p>
          </div>
          <div className="flex my-3 items-center justify-between">
            <p>Company Name</p>
            <p>John Smith</p>
          </div>
          <div className="flex my-3 items-center justify-between">
            <p>Payment</p>
            <p>$2344</p>
          </div>{" "}
          <div className="flex my-3 items-center justify-between">
            <p>Date</p>
            <p>02 Oct 2024</p>
          </div>
          <div className="flex my-3 items-center justify-between">
            <p>Status</p>
            <p
              className={`py-1 px-5 rounded-full text-white 
               
                   bg-[#10B981]
              `}
            >
              Active
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsModal;
