import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MembershipSection = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Silver",
      price: "1999/month",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Gold",
      price: "2999/month",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Platinum",
      price: "4999/month",
      gradient: "from-blue-400 to-blue-600",
    },
  ];

  const handleRedirect = (packageName) => {
    navigate(`/checkout`);

    // navigate(`/checkout/${packageName.toLowerCase()}`);
  };

  return (
    <div className="p-6">
      <p className=" text-primary dark:text-gray-400 sm:text-5xl text-4xl font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 w-[480px] mx-auto my-10">
        Upgrade to Premium Packages
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`bg-gradient-to-r ${pkg.gradient} text-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center h-[250px]`}
          >
            <h3 className="text-2xl font-semibold mb-4">{pkg.name} Package</h3>
            <div className="flex items-center gap-x-2 mb-8">
              <FaBangladeshiTakaSign className="" />
              <p className="text-lg font-medium ">{pkg.price}</p>
            </div>
            <button
              onClick={() => handleRedirect(pkg.name)}
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-600 font-semibold py-2 px-4 rounded-lg transition"
            >
              Choose {pkg.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipSection;
