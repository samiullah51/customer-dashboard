import React from "react";
import { BiLock } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

function DriverView({
  filteredPermissions,
  toggleDropdown,
  dropdownOpen,
  handleViewDetails,
}: any) {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="w-[90vw] mx-auto md:w-full overflow-auto "
    >
      <table className="min-w-full table-auto border-collapse border border-[#FFE8E5]">
        <thead>
          <tr className="bg-[#F8FAFC] text-left text-[#0A0B0A] border-t border-r border-l border-transparent">
            <th className="p-[15px] font-[500]">S No</th>
            <th className="p-[15px] font-[500]">Permission ID</th>
            <th className="p-[15px] font-[500]">Company Name</th>
            <th className="p-[15px] font-[500]">Email</th>
            <th className="p-[15px] font-[500]">Total Vehicles</th>
            <th className="p-[15px] font-[500]">Date of Reg</th>
            <th className="p-[15px] font-[500] text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPermissions.map((permission: any, index: any) => (
            <tr
              key={permission.permissionId}
              className="hover:bg-gray-50 text-sm border border-[#FFE8E5]"
            >
              <td className="p-[15px] border-r border-[#FFE8E5]">
                {index + 1}
              </td>
              <td className="p-[15px]">{permission.permissionId}</td>
              <td className="p-[15px]">Direct Mover LLC</td>
              <td className="p-[15px]">john.doe123@gmail.com</td>
              <td className="p-[15px]">{permission.phoneNumber}</td>
              <td className="p-[15px]">12</td>
              <td className="p-[15px]">{permission.dateOfRegistration}</td>
              <td className="p-[15px] text-center relative border-l border-[#FFE8E5]">
                <button
                  onClick={() => toggleDropdown(permission.permissionId)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <SlOptions />
                </button>
                {dropdownOpen === permission.permissionId && (
                  <div className="absolute top-[-50px] left-[-45px] bg-white z-10 border border-[#FFE8E5] rounded shadow-lg">
                    <ul>
                      <li
                        onClick={() => handleViewDetails(permission)}
                        className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        <BsEye className="text-lg mr-2" />
                        View
                      </li>
                      <li
                        onClick={() => handleViewDetails(permission)}
                        className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        <BiLock className="text-lg mr-2" />
                        Block
                      </li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriverView;
