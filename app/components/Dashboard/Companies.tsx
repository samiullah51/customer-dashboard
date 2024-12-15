"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "../global/Pagination";
import { Merriweather } from "next/font/google";
import BookingTabs from "../Bookings/BookingTabs";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
interface Company {
  companyId: string;
  companyName: string;
  bookings: string;
  averageRating: string;
  location: string;
  revenue: string;
}

const companies: Company[] = [
  {
    companyId: "001",
    companyName: "Direct Movers LLC",
    bookings: "50",
    averageRating: "4.5",
    location: "New York, NY",
    revenue: "$500,000",
  },
  {
    companyId: "002",
    companyName: "Swift Relocation Inc",
    bookings: "40",
    averageRating: "4.3",
    location: "Los Angeles, CA",
    revenue: "$400,000",
  },
  {
    companyId: "003",
    companyName: "MoveEasy Logistics",
    bookings: "70",
    averageRating: "4.7",
    location: "Chicago, IL",
    revenue: "$750,000",
  },
  {
    companyId: "004",
    companyName: "Home Shifters Co.",
    bookings: "35",
    averageRating: "4.2",
    location: "Houston, TX",
    revenue: "$320,000",
  },
];

const CompaniesTable: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("This week");
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(companies);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (companyId: string) => {
    setActiveDropdown(activeDropdown === companyId ? null : companyId);
  };

  const handleMenuClick = (action: string, companyId: string) => {
    if (action === "view") {
      alert(`Viewing company: ${companyId}`);
    } else if (action === "track") {
      alert(`Tracking company: ${companyId}`);
    }
    setActiveDropdown(null);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    setFilterDropdownOpen(false);
    setFilteredCompanies(companies);
  };

  return (
    <div className="w-[100%]  container mx-auto ">
      <div className="flex  flex-col md:flex-row md:justify-between items-center pr-2">
        <h1
          className={`${merriweather.className} text-[18px] font-[700] text-[#052145] mt-0 md:mt-10 mb-0 md:mb-5`}
        >
          Booking Management
        </h1>
      </div>

      <BookingTabs />
    </div>
  );
};

export default CompaniesTable;
