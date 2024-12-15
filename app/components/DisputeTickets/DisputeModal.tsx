import { Merriweather } from "next/font/google";
import React from "react";
import { ImCross } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
function DisputeModal({ setModalOpen }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative md:w-[60%] md:max-w-[800px] w-[90%]  mx-auto">
        <ImCross
          onClick={() => setModalOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        />
        <div
          className="bg-[#FBFBFB] z-9999 max-h-[90vh] overflow-auto p-4 rounded-lg w-full"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="border  border-[#FFE8E5] rounded-md p-5">
            <div className="flex items-center">
              <img src="/assets/images/user.png" alt="" />
              <div className="h-full  p-2">
                <p
                  className={`${merriweather.className} text-[#052145] text-lg font-[700]`}
                >
                  Aqib Javid
                </p>
                <p className="mt-3 text-[#052145] text-[16px] flex items-center">
                  Booking Reference: #123456
                </p>
              </div>
            </div>

            <p className={`text-[#052145] text-lg font-[500] my-2`}>
              Booking Details
            </p>
            <div className="flex items-center justify-between my-2 text-sm text-[#052145]">
              <p>Company Booked</p>
              <p>Direct Mover LLC</p>
            </div>
            <div className="flex items-center justify-between my-2 text-sm text-[#052145]">
              <p>Mover date</p>
              <p>Thrusday, 8 Auguest 2024</p>
            </div>
            <div className="flex text-wrap items-center justify-between my-2 text-sm text-[#052145]">
              <p>Items to Be Moved</p>
              <p>
                2 Bedrooms, Living Room, Kitchen,{" "}
                <span className="text-[#FA1F00] underline">All Items list</span>{" "}
              </p>
            </div>
            <div className="flex items-center justify-between my-2 text-sm text-[#052145]">
              <p>Payment Method</p>
              <p>Credit Card (**** 1234)</p>
            </div>
          </div>
          <div className="border border-[#FFE8E5] mt-5 rounded-md p-5">
            <p className="bg-[#FA1F00] text-white py-1 px-3 rounded-md w-fit">
              #12356
            </p>
            <p className="font-[500] my-3 text-wrap text-[#052145]">
              Overcharged for Moving Service - Incorrect Invoice Amount
            </p>
            <p className="text-[#052145] text-wrap ">
              I booked a moving service for September 20th through the Nagel
              platform. The estimated cost provided during booking was $500, but
              I was charged $650 on the final invoice. No additional services
              were requested or provided beyond what was originally agreed upon.
              I would like to dispute the extra $150 charge and request a review
              of the final invoice to resolve the discrepancy.
            </p>
          </div>
          <div className="border text-wrap border-[#FFE8E5] my-4 rounded-md p-5">
            <p className="ml-10 border border-[#FFE8E5] w-fit py-3 px-6 rounded-md">
              hi, I need solution for this problem.
            </p>
            <div className="my-2 flex items-baseline">
              <img src="/assets/images/user.png" className="w-8 h-8" alt="" />
              <span className="text-[14px] text-[#052145] ml-2">10:27 pm</span>
            </div>

            <p className="ml-auto border border-[#FFE8E5] w-fit py-3 px-6 rounded-md">
              Hi, thanks for reaching out I'll help you to find better solution
              for this.
            </p>
            <div className="mt-3 flex items-baseline justify-end">
              <img src="/assets/images/user.png" className="w-8 h-8" alt="" />
              <span className="text-[14px] text-[#052145] ml-2">10:27 pm</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between ">
            <div className="border flex items-center flex-1 border-[#FFE8E5] my-4 rounded-md p-4">
              <RiAttachment2 className="text-[16px] mr-2" />
              <input
                type="text"
                placeholder="write your message"
                className="border-none outline-none w-full bg-white"
              />
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-[#FA1F00] rounded-md py-5 hover:bg-[#FA1F00]/80 px-8 ml-2 text-white"
            >
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisputeModal;
