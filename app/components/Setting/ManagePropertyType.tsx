import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQs = () => {
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newService, setNewService] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null
  );

  const handleAccordionToggle = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  const handleAction = (action: string) => {
    alert(`${action} selected`);
    setDropdownVisible(null);
  };

  const handleServiceAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newService.trim()) {
      setServices((prev) => [...prev, newService.trim()]);
      setNewService("");
    }
  };

  const handleServiceRemove = (service: string) => {
    setServices((prev) => prev.filter((s) => s !== service));
  };

  const propertyTypes = [
    {
      id: "house",
      text: "What steps should I take to prepare for my move and ensure a smooth experience on the moving day?",
    },
    {
      id: "office",
      text: "What should I do if I need to reschedule my move, and are there any fees or penalties involved?",
    },
    {
      id: "villa",
      text: "How does the process of getting matched with moving companies work, and what information do I need to provide?",
    },
  ];

  return (
    <div className="space-y-6 w-full mx-auto mt-10">
      {propertyTypes.map((property) => (
        <div
          key={property.id}
          className="bg-[#fff] p-5 rounded-md relative border border-[#FFE8E5]"
        >
          {/* Header */}
          <div
            onClick={() => handleAccordionToggle(property.id)}
            className="w-full flex items-start  md:items-center justify-between cursor-pointer"
          >
            <p className="font-medium text-[#052145] text-wrap">
              {property.text}
            </p>
            <div className="flex items-center">
              {expandedAccordion === property.id ? (
                <IoIosArrowUp className="mr-3 text-[#052145]" />
              ) : (
                <IoIosArrowDown className="mr-3 text-[#052145]" />
              )}
            </div>
          </div>

          {dropdownVisible === `${property.id}-options` && (
            <div className="absolute top-[-70px] right-[20px] mt-2 bg-white border border-[#FFE8E5] rounded-md shadow-md w-40 z-10">
              <button
                onClick={() => handleAction("Edit")}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                <FiEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={() => handleAction("Delete")}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                <FiTrash2 className="mr-2" /> Delete
              </button>
            </div>
          )}

          {expandedAccordion === property.id && (
            <ul className="py-2 px-1 text-[#052145] text-wrap">
              To prepare for your move, start by organizing and decluttering
              your belongings, deciding what to keep, donate, or discard. Pack
              your items in labeled boxes, grouping similar items together.
              Ensure you have a clear path for movers and that any fragile or
              valuable items are securely packed. On moving day, be available to
              answer any questions the movers might have and to oversee the
              loading process. Our moving tips guide, available in the resources
              section, provides more detailed preparation steps.
            </ul>
          )}
        </div>
      ))}

      {modalVisible && (
        <div
          style={{ margin: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg mx-2 w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4 text-[#052145]">
              Add new property type
            </h2>
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              onKeyDown={handleServiceAdd}
              placeholder="Enter rooms against property type"
              className="w-full my-2 outline-none border border-[#FFE8E5] rounded-md py-3 px-4 mb-4"
            />
            <div className="flex flex-wrap gap-3 text-sm my-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1 rounded-md relative"
                >
                  <span>{service}</span>
                  <button
                    onClick={() => handleServiceRemove(service)}
                    className="ml-2 text-[11px] absolute top-[-20px] right-[-10px]  w-5 h-5 flex items-center justify-center text-white bg-red-500  rounded-full"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalVisible(false)}
                className="bg-[#FA1F00] w-full text-white px-4 py-2 rounded-md"
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQs;
