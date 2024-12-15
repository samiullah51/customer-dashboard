import DisputeTicketsTable from "@/app/components/DisputeTickets/DisputeTickets";
import CustomerTable from "@/app/components/UserManagement/Customers";
import React from "react";

function page() {
  return (
    <div className="px-2">
      <CustomerTable />
    </div>
  );
}

export default page;
