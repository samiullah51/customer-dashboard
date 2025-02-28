import React, { useRef } from "react";
import { ImCross } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";

function Details({ setModalOpen }: any) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("Selected file:", event.target.files[0]); // Handle file upload logic here
    }
  };

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

          <div className="w-full flex items-center justify-between">
            <div className="border flex items-center flex-1 border-[#FFE8E5] my-4 rounded-md p-4">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              />
              <RiAttachment2
                className="text-[16px] mr-2 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              />
              <input
                type="text"
                placeholder="Write your message"
                className="border-none outline-none w-full bg-white"
              />
            </div>
            <button className="bg-[#FA1F00] rounded-md py-5 hover:bg-[#FA1F00]/80 px-8 ml-2 text-white">
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
