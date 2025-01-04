import React from "react";
import BookingHeader from "./BookingHeader";
import { IoIosArrowForward } from "react-icons/io";
import Inventory from "./Inventory";
import { CiLocationOn, CiLock, CiWallet } from "react-icons/ci";
import { BiCalendar, BiTime } from "react-icons/bi";
import { SiGooglepay, SiMastercard } from "react-icons/si";
import { HiOutlineUser } from "react-icons/hi2";
import { BsPaypal } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

function page() {
  return (
    <div>
      <BookingHeader />
      <hr />
      <div className="w-full md:w-[90%]  mx-auto px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 flex-wrap ">
          <Inventory count="1" />
          <Inventory count="2" />
          <Inventory count="3" />
          <Inventory count="4" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-10 py-10">
          <div>
            <h1 className="font-[500]">Book Mover</h1>
            <p className="text-sm my-2">
              Verify your location info below. Prices are right around the
              corner! 
            </p>
          </div>
          <button className=" bg-[#FA1F00] text-white rounded-md py-3 px-7 flex items-center">
            <span className="mr-2">Book Now</span> <IoIosArrowForward />
          </button>
        </div>

        <h1 className="font-[500]">Personal info</h1>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="space-y-6 w-full  mx-auto ">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <HiOutlineUser className="text-gray-500 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>{" "}
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <PiEnvelopeSimpleLight className="text-gray-500 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-col md:flex-row flex">
              <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                <LiaPhoneVolumeSolid className="text-gray-500 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border-none outline-none p-2"
                />
              </div>
            </div>
            <h1 className="font-[500]">Payment method</h1>
            <div className="flex flex-col  items-start gap-5 justify-between ">
              <div className="border flex items-center gap-3   p-4 rounded-md bg-[#F8FAFC] w-full md:w-1/2 md:mr-1">
                <CiWallet className="text-[30px]" />
                <h1 className="mr-2">Credit Card</h1>
              </div>
              <div className="border flex items-center gap-3   p-4 rounded-md bg-[#F8FAFC] w-full md:w-1/2 md:mr-1">
                <BsPaypal className="text-[30px]" />
                <h1 className="mr-2">Paypal</h1>
              </div>
              <div className="border flex items-center gap-3   p-4 rounded-md bg-[#F8FAFC] w-full md:w-1/2 md:mr-1">
                <SiGooglepay className="text-[30px]" />
                <h1 className="mr-2">Google Pay</h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-[500]">Details</h1>
              <p className="px-4 text-sm text-[]">
                Provided By Direct Movers LLC
              </p>
            </div>
            <div className="flex flex-col md:flex-row text-nowrap items-center justify-between">
              <div className="mt-1 mr-3 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                <BiCalendar className="text-gray-500 w-6 h-6" />
                <p className="p-2">Thrusday, 8 Auguest 2024</p>

                {/* <input
                  type="date"
                  placeholder="Thrusday, 8 Auguest 2024"
                  className="w-full border-none outline-none p-2 "
                /> */}
              </div>
              <div className="mt-1 mr-3 flex items-center w-full px-4 py-2 border border-[#FFE8E5] bg-white rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                <BiTime className="text-gray-500 w-6 h-6" />
                <p className="p-2">Arrival between 08 am - 10 am</p>
                {/* <input
                  type="time"
                  placeholder="Arrival between 08 am - 10 am"
                  className="w-full border-none outline-none p-2 "
                /> */}
              </div>
            </div>
            <div className="w-full flex-col md:flex-row flex">
              <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                <LiaPhoneVolumeSolid className="text-gray-500 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border-none outline-none p-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <CiLocationOn className="text-gray-500 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>{" "}
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <input
                    type="text"
                    placeholder="Apartment"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <input
                    type="text"
                    placeholder="Riyadh"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>{" "}
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <input
                    type="text"
                    placeholder="Riyadh"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>
              <div className="w-full flex-col md:flex-row flex">
                <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <input
                    type="text"
                    placeholder="33235"
                    className="w-full border-none outline-none p-2"
                  />
                </div>
              </div>
            </div>
            <h1 className="font-[500]">Any Special Requests?</h1>
            <div
              style={{
                marginBottom: "10px",
              }}
              className="w-full mb-3 flex-col md:flex-row flex"
            >
              <div className="mt-1 flex items-center mr-3 w-full bg-white px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                <textarea
                  placeholder="Request"
                  className="w-full resize-none border-none outline-none p-2"
                  rows={3}
                />
              </div>
            </div>{" "}
            <label htmlFor="check" className="text-sm my-3 cursor-pointer ml-1">
              <input type="checkbox" id="check" />
              <span className="ml-1 my-2">
                I have read, understand and accept the Terms and Conditions
              </span>
            </label>
            <div className="mt-4">
              <button className=" bg-[#FA1F00] text-white rounded-md py-3 px-7 flex items-center">
                <span className="mr-2">Book Now</span> <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="border mt-3 md:mt-0 text-wrap bg-white  border-[#FFE8E5] rounded-md p-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col md:flex-row items-center justify-start">
                <div className="flex flex-col md:flex-row mb-4 items-start md:items-center">
                  <img
                    src="/assets/images/van.png"
                    alt="Profile Avatar"
                    width={80}
                    height={60}
                    className="mr-4"
                  />
                  <div className="text-[#052145] text-wrap h-full  py-2 flex flex-col justify-between">
                    <p className="text-[16px]  font-[500] mb-1">
                      Direct Movers LLC
                    </p>
                    <p>Booking Reference: #123456</p>
                  </div>
                </div>
                <span className="bg-[#10B981] mb-1 md:mb-0 text-nowrap text-white text-sm py-1 px-5 rounded-full ml-10">
                  Waiting for driver to assign
                </span>
              </div>
              <div className=" bg-[#F6F5F5] p-3 ml-[-20px] md:ml-0  rounded-full  cursor-pointer hover:bg-gray-200">
                <SlOptionsVertical />
              </div>
            </div>

            <p className="text-[#052145] mb-3 font-[500]">Details</p>
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
                <span className="text-[#FA1F00] cursor-pointer hover:underline">
                  All Items list
                </span>{" "}
              </p>
            </div>
            <div className="w-full flex items-center justify-between text-[14px] font-[400] mb-4">
              <p>Payment Method</p>
              <p>Credit Card (**** 1234)</p>
            </div>

            {/* Grand Total */}
            <div className="w-full p-2 rounded-sm bg-[#F8FAFC] flex items-center justify-between text-[18px] font-[500]">
              <p>Grand Total</p>
              <p>$439</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
