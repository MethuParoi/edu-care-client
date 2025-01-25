import Button from "../../ui/Button";

import bronze from "../../../assets/badge/bronge.png";
import silver from "../../../assets/badge/silver.png";
import gold from "../../../assets/badge/gold.png";
import platinum from "../../../assets/badge/platinum.png";
import { useEffect, useState } from "react";

const ProfileDesc = ({ name, mail, badge, role }) => {
  const [badgeImage, setBadgeImage] = useState("");
  useEffect(() => {
    if (badge === "Bronze") {
      setBadgeImage(bronze);
    } else if (badge === "Silver") {
      setBadgeImage(silver);
    } else if (badge === "Gold") {
      setBadgeImage(gold);
    } else if (badge === "Platinum") {
      setBadgeImage(platinum);
    }
  }, [badge]);
  return (
    <div className="pl-64 sm:pl-56 font-semibold text-red-300">
      {/* badge */}
      {role != "admin" && (
        <div className="mb-4 flex items-center justify-start gap-x-5">
          <img className="w-24" src={badgeImage} alt="" />
          <h2 className="text-3xl font-semibold text-red-500 bg-teal-400 p-2 rounded-lg">
            {badge}
          </h2>
        </div>
      )}

      <div className="pb-3 sm:border-b-2 border-gray-600">
        <h1 className="text-md sm:text-xl lg:text-3xl ">{`User Name: ${name}`}</h1>
      </div>

      <div className="pt-5 pb-3 sm:border-b-2 border-gray-600">
        <h1 className="text-md sm:text-xl lg:text-3xl">{`User Email: ${mail}`}</h1>
      </div>
    </div>
  );
};

export default ProfileDesc;
