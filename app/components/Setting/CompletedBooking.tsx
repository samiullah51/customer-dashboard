import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { Merriweather } from "next/font/google";
import { BsStarFill } from "react-icons/bs";
import DetailsModal from "./DetailsModal";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const CompletedBooking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [ratings, setRatings]: any = useState({
    professionalism: 0,
    timeliness: 0,
    communication: 0,
    valueForMoney: 0,
  });
  const [review, setReview] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleCancelOrder = () => {
    setShowOptions(false);
  };
  const handleRating = (category: any, value: any) => {
    setRatings((prev: any) => ({
      ...prev,
      [category]: value,
    }));
  };
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const [isDisputeOpen, setIsDisputeOpen] = useState(false);

  const openDispute = () => setIsDisputeOpen(true);

  const openIsDetialsModal = () => setIsDetailsModalOpen(true);
  const closeDetailsModal = () => setIsDetailsModalOpen(false);
  return (
    <div className="space-y-6 mx-auto">
      <div className="border relative text-wrap bg-white border-[#FFE8E5] rounded-md p-4">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col md:flex-row items-center justify-start">
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
            <span className="bg-[#3486F1] mb-1 md:mb-0 text-nowrap text-white text-sm py-1 px-5 rounded-full ml-10">
              Completed
            </span>
          </div>
          <div className="flex flex-col md:flex-row my-3 items-center relative mr-10">
            {!isReview ? (
              <a
                className="flex items-center text-nowrap p-2 text-md rounded-md underline cursor-pointer hover:text-[#FA1F00]"
                onClick={openModal}
              >
                Rate delivery
              </a>
            ) : (
              <div className="flex ">
                <div className="flex items-center">
                  <span className="mr-2">5.0</span>
                  <BsStarFill className="mx-1 text-yellow-400" />
                  <BsStarFill className="mx-1 text-yellow-400" />
                  <BsStarFill className="mx-1 text-yellow-400" />
                  <BsStarFill className="mx-1 text-yellow-400" />
                  <BsStarFill className="mx-1 text-yellow-400" />
                </div>
                <a
                  className="flex  items-center p-2 text-md rounded-md underline cursor-pointer "
                  onClick={() => setShowReview(!showReview)}
                >
                  <span className="hover:text-[#FA1F00] text-nowrap select-none">
                    See Review
                  </span>
                  {showReview && (
                    <div className="absolute top-[40px] md:top-[50px]  right-6 md:right-0 w-fit bg-white border border-[#ccc] p-5 rounded-md shadow-md">
                      <div className="flex items-center justify-center mb-4">
                        <BsStarFill className="mx-1 text-yellow-400" />
                        <BsStarFill className="mx-1 text-yellow-400" />
                        <BsStarFill className="mx-1 text-yellow-400" />
                        <BsStarFill className="mx-1 text-yellow-400" />
                        <BsStarFill className="mx-1 text-yellow-400" />
                      </div>
                      <p className="text-sm  text-[#052145]">
                        SafeMove Inc. provided an exceptional moving experience.
                        The movers were punctual, professional, and handled our
                        belongings with great care. They communicated clearly
                        throughout the entire process, making us feel at ease.
                      </p>
                    </div>
                  )}
                </a>
              </div>
            )}
            <button className="flex text-nowrap items-center mx-3 border border-[#FFD1CB] p-2 text-[14px] rounded-md cursor-pointer hover:bg-[#FFD1CB]/10">
              <TiDocumentText className="mr-1 text-2xl" />
              Download invoice
            </button>
          </div>
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
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Dispute
              </p>
            </div>
          )}
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
              <h1
                className={`${merriweather.className} text-center font-[700] text-[#052145] text-2xl mb-8`}
              >
                Rate this delivery{" "}
              </h1>
              {[
                { label: "Professionalism of Movers", key: "professionalism" },
                { label: "Timeliness", key: "timeliness" },
                { label: "Communication", key: "communication" },
                { label: "Value for Money", key: "valueForMoney" },
              ].map((item: any) => (
                <div
                  key={item.key}
                  className="w-full flex items-center justify-between text-[14px] font-[400] mb-4"
                >
                  <p>{item.label}</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`mx-1 cursor-pointer text-lg ${
                          ratings[item.key] >= star
                            ? "text-yellow-500"
                            : "text-gray-400/30"
                        }`}
                        onClick={() => handleRating(item.key, star)}
                      >
                        <BsStarFill />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="my-5">
                <div className="mt-1 flex items-center w-full md:w-[100%] lg:w-full px-4 py-2 border border-[#FFE8E5] rounded-lg shadow-sm focus-within:border-[#fd370aca]">
                  <textarea
                    placeholder="Write your review"
                    rows={3}
                    className="w-full border-none resize-none outline-none p-2"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              <button
                className="mt-4 w-full bg-[#FA1F00] text-white px-4 py-2 rounded-md hover:bg-[#d11a01]"
                onClick={() => {
                  setIsReview(true);
                  closeModal();
                }}
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

export default CompletedBooking;
