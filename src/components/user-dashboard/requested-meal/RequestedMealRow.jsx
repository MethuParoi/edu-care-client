import React from "react";

const RequestedMealRow = ({ username, email, subscription_status, _id }) => {
  return (
    <div className="grid grid-cols-4 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {username}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {email}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {subscription_status}
      </p>

      <div className="flex space-x-4">
        <button className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg">
          Make Admin
        </button>
      </div>
    </div>
  );
};

export default RequestedMealRow;
