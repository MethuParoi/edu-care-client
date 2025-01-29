import Button from "../../ui/Button";

import { useEffect, useState } from "react";

const ProfileDesc = ({ name, mail, badge, role }) => {
  return (
    <div className="pl-64 sm:pl-56 font-semibold text-red-300">
      {/* badge */}
      {role != "user" && (
        <div className="mb-4 flex items-center justify-start gap-x-5">
          <h2 className="text-3xl font-semibold text-red-500 bg-teal-400 p-2 rounded-lg">
            {role}
          </h2>
        </div>
      )}

      <div className="pb-3 sm:border-b-2 border-gray-600">
        <h1 className="text-md sm:text-xl lg:text-3xl ">{`Name: ${name}`}</h1>
      </div>

      <div className="pt-5 pb-3 sm:border-b-2 border-gray-600">
        <h1 className="text-md sm:text-xl lg:text-3xl">{`Email: ${mail}`}</h1>
      </div>

      {role != "user" && (
        <div className="pt-5 pb-3 sm:border-b-2 border-gray-600">
          <h1 className="text-md sm:text-xl lg:text-3xl">{`Role: ${role}`}</h1>
        </div>
      )}
    </div>
  );
};

export default ProfileDesc;
