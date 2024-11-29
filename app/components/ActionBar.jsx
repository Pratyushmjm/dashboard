import { FiSearch } from "react-icons/fi"; // Importing icons
import { IoMdNotifications } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
const ActionBar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-5 items-center">
        <span className="text-xl font-semibold">Leads</span>

        <div className="flex items-center bg-[#EBECF0] border border-gray-300 rounded-lg p-1 w-[300px]">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by name, email or room..."
            className="flex-grow outline-none text-gray-500 bg-[#EBECF0]"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        {/* Robot Icon */}
        <FaRobot className="text-gray-600 text-xl" />

        {/* Box Icon */}
        <BsBoxSeamFill className="text-gray-600 text-xl" />

        {/* Headset Icon */}
        <MdOutlineHeadsetMic className="text-gray-600 text-xl" />

        {/* Notifications Icon */}
        <div className="relative">
          <IoMdNotifications className="text-gray-600 text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
            25
          </span>
        </div>

        {/* User Profile Initials */}
        <div className="bg-[#317165] h-10 w-10 rounded-full flex items-center justify-center text-white font-normal">
          MC
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
