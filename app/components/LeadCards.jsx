import React from "react";
import { MdPeople } from "react-icons/md";

function LeadCards() {
  const leadsData = [
    {
      label: "Active Leads, Pending Reservation",
      value: "2",
      color: "#F5D9DF",
    },
    { label: "Payment Due Leads (0 beds)", value: "1", color: "#F5D9DF" },
    { label: "Reserved Leads (0 beds)", value: "1" },
    { label: "Total Leads in Pipeline (0 beds)", value: "4" },
    { label: "Cancellations", value: "2" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 mb-6  ">
      {leadsData.map((stat, index) => (
        <div
          key={index}
          className="bg-[#EBECF0] px-5 pb-3 pt-8 shadow-md rounded-lg relative flex items-end"
        >
          <MdPeople className="absolute right-4 top-4 " color="#2D7366" />
          <div>
            <p
              className={`text-xl font-bold ${
                index > 1 ? "text-[#54616e]" : "text-[#E45856]"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`${
                index > 1 ? "text-[#C2C6CC]" : "text-[#E45856]"
              } text-[#C2C6CC] text-sm`}
            >
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeadCards;
