import PhoneContact from "./PhoneContact";
const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return {
        textColor: "text-yellow-600",
        backgroundColor: "bg-[#FFFCBF]", // Light background color for Active status
      };
    case "Payment Due":
      return {
        textColor: "text-red-600",
        backgroundColor: "bg-[#FDD8D7]", // Light background color for Payment Due status
      };
    case "Reserved":
      return {
        textColor: "text-green-600",
        backgroundColor: "bg-[#C8F8D8]", // Light background color for Reserved status
      };
    default:
      return {
        textColor: "text-gray-600",
        backgroundColor: "bg-gray-100", // Light background color for default status
      };
  }
};

const LeadsTable = () => {
  const leads = [
    {
      id: "#6775",
      firstName: "Test",
      lastName: "Lead",
      contact: "+912123121212",
      visitDate: "-",
      status: "Active",
      room: "Warden Boys Life",
      checkIn: "-",
      source: "Walk In",
      activity: "Reserve Room",
    },
    {
      id: "#6260",
      firstName: "Contract",
      lastName: "Test",
      contact: "+918929738283",
      visitDate: "-",
      status: "Active",
      room: "Warden Boys Life",
      checkIn: "-",
      source: "Referral",
      activity: "Reserve Room",
    },
    {
      id: "#1664",
      firstName: "Test",
      lastName: "Lead 1121",
      contact: "+911674562323",
      visitDate: "-",
      status: "Payment Due",
      room: "F012",
      checkIn: "May 23, 2024",
      source: "Website",
      activity: "Payment Pending",
    },
    {
      id: "#610",
      firstName: "Test",
      lastName: "Lead 124",
      contact: "+911241111111",
      visitDate: "-",
      status: "Reserved",
      room: "G003",
      checkIn: "Mar 27, 2024",
      source: "Google Search",
      activity: "Registration Form Pending",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between space-x-4 p-4 bg-white">
        {/* Add Button */}
        <button className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600">
          + Add
        </button>

        {/* Filters */}
        <div className="flex items-center space-x-2 text-gray-500">
          {/* Disabled "Check In Month" */}
          <button
            className="px-3 py-2 bg-gray-100 rounded text-gray-400 cursor-not-allowed"
            disabled
          >
            Check In Month
          </button>

          {/* All Properties Dropdown */}
          <div className="relative">
            <select className="px-3 py-2 bg-gray-100 rounded text-gray-600 outline-none">
              <option>All Properties</option>
              <option>Property 1</option>
              <option>Property 2</option>
            </select>
          </div>

          {/* Sorted By Dropdown */}
          <div className="relative ">
            <select className="px-3 py-2 bg-gray-100 rounded text-gray-600 outline-none appearance-none ">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {/* Filters Button */}
          <div className="relative">
            <select className="px-3 py-2 bg-gray-100 rounded text-gray-600 outline-none">
              <option>Filters</option>
              <option>Filter 1</option>
              <option>Filter 2</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Visit Date</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Room Reserved</th>
              <th className="text-left p-2">Tentative Check-In</th>
              <th className="text-left p-2">Source</th>
              <th className="text-left p-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{lead.id}</td>
                <td className="p-2">
                  {lead.name}

                  <PhoneContact
                    key={index}
                    firstName={lead.firstName}
                    lastName={lead.lastName}
                    phone={lead.contact}
                    status={lead.status}
                  />
                </td>
                <td className="p-2">{lead.visitDate}</td>
                <td className={`p-2 text-sm font-medium `}>
                  <span
                    className={`px-2 py-1 rounded ${
                      getStatusColor(lead.status).textColor
                    } ${getStatusColor(lead.status).backgroundColor}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="p-2">{lead.room}</td>
                <td className="p-2">{lead.checkIn}</td>
                <td className="p-2">{lead.source}</td>
                <td className="p-2 text-[#5183B6]">{lead.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeadsTable;
