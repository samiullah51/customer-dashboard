import BookingTable from "@/app/components/Bookings/Bookings";
import StatsCard from "@/app/components/Cards/StatsCard";
import React from "react";

function page() {
  return (
    <div>
      <div className="p-1 flex items-center justify-evenly flex-wrap">
        <StatsCard title="Total Booking" count={10971} />
        <StatsCard title="Active Booking" count={684} />
        <StatsCard title="Pending Booking" count={10980} />
        <StatsCard title="Completed Booking" count={1895} />
        <StatsCard title="Cancelled Booking" count={876} />
      </div>
      <BookingTable />
    </div>
  );
}

export default page;
