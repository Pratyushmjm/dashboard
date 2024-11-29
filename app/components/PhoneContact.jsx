const PhoneContact = ({ firstName, lastName, phone, status }) => {
    const initials = firstName[0] + lastName[0];  // Get initials from first and last name
  
    return (
      <div className="flex items-center p-4">
        {/* Circular avatar with initials */}
        <div className={`${status === "Active"
                        ? "bg-[#D68E6C]"
                        : status === "Payment Due"
                        ? "bg-[#60B882]"
                        : "bg-[#958DBC]"}  text-white w-8 h-8 p-3 rounded-lg flex items-center justify-center mr-4`}>
          {initials.toUpperCase()}
        </div>
  
        {/* Contact details */}
        <div>
          <h2 className="text-sm font-semibold">{firstName} {lastName}</h2>
          <p className="text-gray-600">{phone}</p>
        </div>
      </div>
    );
  };
  
  export default PhoneContact;
  