import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function DetailsModal({ closeModal }: any) {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
        style={{ margin: 0 }}
        onClick={closeModal}
      ></div>
      {/* Modal Content */}
      <div className="fixed  inset-0 text-[#052145] flex items-center justify-center z-[100]">
        <div
          style={{ scrollbarWidth: "none" }}
          className="bg-white relative rounded-lg p-6 max-h-[85vh] overflow-scroll w-[95%] md:w-1/3"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-lg hover:font-bold"
          >
            <RxCross2 />
          </button>
          <h1 className="font-[500]">Proposal</h1>
          <div className="w-full flex items-center justify-between">
            <div className="flex mb-4">
              <img
                src="/assets/images/van.png"
                alt="Profile Avatar"
                width={60}
                height={60}
                className="mr-4 object-contain"
              />
              <div className="text-[#052145]">
                <p className="text-[16px] mb-1 font-[500]">Direct Movers LLC</p>
                <p>2024-07-22</p>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="text-[#052145]">
                <p className="text-[16px] mb-1 font-[500]">(555) 123-4567</p>
                <p className="text-[dodgerblue] cursor-pointer">
                  info@safemove.com
                </p>
              </div>
            </div>
          </div>
          <h1 className="font-[500] mb-2">Company proposal items</h1>
          {["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"].map(
            (tab, index) => (
              <button
                key={index}
                className={`px-6 py-3 mx-1 my-1 rounded-lg w-full md:w-auto ${
                  activeTab === index
                    ? "bg-[#FA1F00] text-white"
                    : "bg-white border text-[#052145]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            )
          )}
          <table className="min-w-full p-5 my-2 table-auto border-collapse ">
            <thead>
              <tr className="bg-[#e9eaec] text-left text-[#0A0B0A] border-t border-r border-l border-transparent">
                <th className="p-[15px] font-[500]">S No</th>

                <th className="p-[15px] font-[500]">Product name</th>
                <th className="p-[15px] font-[500]">Size</th>
                <th className="p-[15px] font-[500]">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 border text-sm border-b border-gray">
                <td className="p-[15px] border-r ">1</td>
                <td className="p-[15px]">End Table</td>
                <td className="p-[15px]">2'4"</td>
                <td className="p-[15px]  border-l ">3</td>
              </tr>
              <tr className="hover:bg-gray-50 border text-sm border-b border-gray">
                <td className="p-[15px] border-r ">2</td>
                <td className="p-[15px]">Floor Lamp</td>
                <td className="p-[15px]">2'4"</td>
                <td className="p-[15px]  border-l ">2</td>
              </tr>
              <tr className="hover:bg-gray-50 border text-sm border-b border-gray">
                <td className="p-[15px] border-r ">3</td>
                <td className="p-[15px]">End Table</td>
                <td className="p-[15px]">2'4"</td>
                <td className="p-[15px]  border-l ">3</td>
              </tr>
              <tr className="hover:bg-gray-50 border text-sm border-b border-gray">
                <td className="p-[15px] border-r ">4</td>
                <td className="p-[15px]">Floor Lamp</td>
                <td className="p-[15px]">2'4"</td>
                <td className="p-[15px]  border-l ">2</td>
              </tr>
            </tbody>
          </table>

          <h1 className="font-[500] my-4">Services</h1>
          <div className="flex my-2 items-center justify-between">
            <p>Packing</p>
            <p>$100</p>
          </div>
          <h1 className="font-[500] my-4">Price</h1>
          <div className="flex my-2 items-center justify-between">
            <p>Moving price:</p>
            <p>$849</p>
          </div>
          <div className="flex my-2 items-center justify-between">
            <p>Discount:</p>
            <p>$0</p>
          </div>
          <h1 className="font-[500] my-4">Note</h1>
          <p className="text-sm text-[#052145] text-wrap">
            We are the best company in the town when it come to moving office
            items as we delivered same before we think we can easily do this, so
            let’s connect and make it happen.!
          </p>
          <div className="flex items-center justify-normal border py-2 px-5 rounded-sm my-4">
            <CiDiscount1 className="mr-2" />{" "}
            <p className="text-[#818181] text-sm">Any discount i.e AUG15</p>
          </div>
          <div className="w-full p-2 rounded-sm bg-[#F8FAFC] flex items-center justify-between text-[18px] font-[500]">
            <p>Grand Total</p>
            <p>$1,009</p>
          </div>
          <p className="text-sm my-3 text-wrap">
            50% deposit required upon booking confirmation balance due on the
            day of the move.
          </p>
          <li className="text-[14px] my-3 text-wrap">
            Cancellation Policy: Full refund if canceled 7 days before the move;
            50% refund if canceled within 3-6 days; no refund if canceled less
            than 3 days before the move.
          </li>
          <div className="flex items-center gap-4 justify-between">
            <button
              className="mt-4 w-full bg-[#F6F5F5] text-black px-4 py-2 rounded-md hover:bg-[#b7b7b7]"
              onClick={closeModal}
            >
              Decline
            </button>
            <button
              onClick={() => {
                closeModal;
                router.push("/book-now");
              }}
              className="mt-4 w-full bg-[#FA1F00] text-white px-4 py-2 rounded-md hover:bg-[#d11a01]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsModal;
