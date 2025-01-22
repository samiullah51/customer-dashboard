import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FiMap } from "react-icons/fi";
import DetailsModal from "./DetailsModal";

const ActiveBooking = ({ setActiveTab }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisputeOpen, setIsDisputeOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  const openDispute = () => setIsDisputeOpen(true);
  const closeDispute = () => setIsDisputeOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const openIsDetialsModal = () => setIsDetailsModalOpen(true);
  const closeDetailsModal = () => setIsDetailsModalOpen(false);
  const handleReasonChange = (reason: any) => setSelectedReason(reason);
  return (
    <div className="space-y-6 mx-auto">
      <div className="border relative text-wrap bg-white border-[#FFE8E5] rounded-md p-4">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex  flex-col  md:flex-row items-center justify-start">
            <div className="flex flex-col md:flex-row mb-4 items-start md:items-center">
              <img
                src="/assets/images/van.png"
                alt="Profile Avatar"
                width={80}
                height={60}
                className="mr-4"
              />
              <div className="text-[#052145] text-wrap h-full py-2 flex flex-col justify-between">
                <p className="text-[16px] font-[500] mb-1">Direct Movers LLC</p>
                <p>Booking Reference: #123456</p>
              </div>
            </div>
            <span className="bg-[#10B981] mb-1 md:mb-0 text-nowrap text-white text-sm py-1 px-5 rounded-full ml-10">
              Shipment delivered
            </span>
          </div>
          <div className="flex my-3 md:my-0  text-nowrap mr-10  items-center">
            <button
              className="flex items-center border border-[#FFD1CB] p-2 text-[14px] rounded-md cursor-pointer hover:bg-[#FFD1CB]/10"
              onClick={openModal}
            >
              <FiMap className="mr-1" />
              Track on map
            </button>
            <button
              onClick={() => setActiveTab("3")}
              className="flex items-center w-full my-1 md:my-0 p-2 bg-[#FA1F00] text-white mx-4 text-[14px] rounded-md cursor-pointer hover:bg-[#d11a01]"
            >
              Confirm booking
            </button>

            <div
              onClick={toggleDropdown}
              className="bg-[#F6F5F5] absolute top-3 right-3 p-3 ml-[-20px] md:ml-0 rounded-full cursor-pointer hover:bg-gray-200"
            >
              <SlOptionsVertical />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[50px] right-4 bg-white border border-[#FFE8E5] rounded-md shadow-lg p-0 z-10">
                <p
                  className="px-5 py-3  text-sm cursor-pointer hover:bg-gray-100"
                  onClick={openDispute}
                >
                  Cancel Booking
                </p>
                <p
                  className="px-5 py-3  text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  Dispute
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="text-[#052145] mb-3 font-[500] select-none">Details</p>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Mover date</p>
          <p>Thursday, 8 August 2024</p>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Mover Arrival Time</p>
          <p>8:00 AM - 10:00 AM</p>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Items to Be Moved</p>
          <p>
            2 Bedrooms, Living Room, Kitchen,{" "}
            <span
              onClick={() => setIsDetailsModalOpen(true)}
              className="text-[#FA1F00] cursor-pointer hover:underline"
            >
              All Items list
            </span>{" "}
          </p>
        </div>
        <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
          <p>Payment Method</p>
          <p>Credit Card (**** 1234)</p>
        </div>

        <div className="w-full p-2 rounded-sm bg-[#F8FAFC] flex items-center justify-between text-[18px] font-[500]">
          <p>Grand Total</p>
          <p>$439</p>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
            style={{ margin: 0 }}
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-[100]">
            <div className="bg-white rounded-lg p-6 w-[95%] md:w-1/3">
              <div className="w-full h-80 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509402!2d-122.41941528468154!3d37.774929679759585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818e86c5f0a7%3A0xe7b0a548e45c96a1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1699895545525!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
                <p>Pickup address</p>
                <p>123 Elm Street, Springfield</p>
              </div>
              <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
                <p>Delivery address</p>
                <p>456 Oak Avenue, Metropolis</p>
              </div>
              <button
                className="mt-4 bg-[#FA1F00] text-white px-4 py-2 rounded-md hover:bg-[#d11a01]"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      {isDisputeOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
            style={{ margin: 0 }}
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-[100]">
            <div className="bg-white rounded-lg p-6 w-[95%] md:w-1/3">
              <h1 className="text-center mb-4 font-medium text-lg">
                Write Reason for Cancellation
              </h1>

              <div
                className={`mt-2 flex items-center justify-between px-4 py-3 border ${
                  selectedReason === "Not interested"
                    ? "border-[#fd370aca]"
                    : "border-[#FFE8E5]"
                } rounded-lg shadow-sm cursor-pointer`}
                onClick={() => handleReasonChange("Not interested")}
              >
                <label className="text-sm font-medium text-gray-700">
                  Not interested
                </label>
                <input
                  type="radio"
                  name="reason"
                  value="Not interested"
                  checked={selectedReason === "Not interested"}
                  onChange={() => handleReasonChange("Not interested")}
                  className="h-5 w-5 accent-[#FA1F00]"
                />
              </div>

              <div
                className={`mt-2 flex items-center justify-between px-4 py-3 border ${
                  selectedReason === "Too late to respond"
                    ? "border-[#fd370aca]"
                    : "border-[#FFE8E5]"
                } rounded-lg shadow-sm cursor-pointer`}
                onClick={() => handleReasonChange("Too late to respond")}
              >
                <label className="text-sm font-medium text-gray-700">
                  Too late to respond
                </label>
                <input
                  type="radio"
                  name="reason"
                  value="Too late to respond"
                  checked={selectedReason === "Too late to respond"}
                  onChange={() => handleReasonChange("Too late to respond")}
                  className="h-5 w-5 accent-[#FA1F00]"
                />
              </div>

              <div
                className={`mt-2 flex items-center justify-between px-4 py-3 border ${
                  selectedReason === "Booked by mistake"
                    ? "border-[#fd370aca]"
                    : "border-[#FFE8E5]"
                } rounded-lg shadow-sm cursor-pointer`}
                onClick={() => handleReasonChange("Booked by mistake")}
              >
                <label className="text-sm font-medium text-gray-700">
                  Booked by mistake
                </label>
                <input
                  type="radio"
                  name="reason"
                  value="Booked by mistake"
                  checked={selectedReason === "Booked by mistake"}
                  onChange={() => handleReasonChange("Booked by mistake")}
                  className="h-5 w-5 accent-[#FA1F00]"
                />
              </div>

              <div className="mt-4">
                <textarea
                  placeholder="Write anything for cancellation"
                  className="w-full border border-[#FFE8E5] rounded-lg shadow-sm p-3 focus:outline-none focus:border-[#fd370aca]"
                  rows={3}
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                />
              </div>

              <button
                className="mt-4 w-full bg-[#FA1F00] text-white px-4 py-2 rounded-md hover:bg-[#d11a01]"
                onClick={() => closeDispute()}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
      {isDetailsModalOpen && <DetailsModal closeModal={closeDetailsModal} />}
    </div>
  );
};

export default ActiveBooking;
