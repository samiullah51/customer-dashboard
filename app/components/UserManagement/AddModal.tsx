import { Merriweather } from "next/font/google";
import React from "react";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiShieldCheckThin } from "react-icons/pi";
import { SlPhone } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";

function AddModal() {
  return (
    <div
      style={{ margin: 0 }}
      className="fixed  inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50  "
    >
      <div
        style={{ scrollbarWidth: "none" }}
        className="bg-white p-8 rounded-lg md:w-[50%] md:max-w-[600px] w-[90%] mx-auto  overflow-y-auto  "
      >
        <p className="text-wrap text-sm text-[#052145]">
          Have a questions or need assistance? Our team is here to help!
        </p>
        <form>
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
            <HiOutlineEnvelope />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-none outline-none p-2"
              autoFocus
            />
          </div>
          <div className="my-3 flex items-center w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
            <TiDocumentText className="text-xl" />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-none outline-none p-2"
              autoFocus
            />
          </div>
          <div className="my-3 flex items-start w-full md:w-[100%] lg:w-full px-4 py-1 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
            <textarea
              placeholder="Message"
              rows={6}
              className="text-start w-full border-none outline-none px-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className={` w-full px-4 py-2 bg-[#FA1F00] hover:bg-[#FA1F00]/90 text-white rounded-md`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
