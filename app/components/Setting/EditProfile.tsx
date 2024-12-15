import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";

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
    <div className="space-y-6   mx-auto ">
      <div className="border text-wrap bg-white  border-[#FFE8E5] rounded-md p-4">
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
  );
};

export default EditProfile;
