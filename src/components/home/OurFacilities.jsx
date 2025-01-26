import FacilityCard from "./FacilityCard";

const OurFacilities = () => {
  const facilities = [
    {
      title: "Air Condition",
      type: "airCondition",
    },
    {
      title: "Gym",
      type: "gym",
    },
    {
      title: "Security",
      type: "security",
    },

    {
      title: "Hair Dryer",
      type: "hairDryer",
    },
    {
      title: "Wi-Fi",
      type: "wifi",
    },
    {
      title: "Fingerprint",
      type: "fingerprint",
    },
    {
      title: "Fire Safety",
      type: "fireSafety",
    },
    {
      title: "Cloth Wash",
      type: "washingMachine",
    },
    {
      title: "Smart TV",
      type: "tv",
    },
    {
      title: "Power Backup",
      type: "powerBackup",
    },
    {
      title: "Shoe Polish",
      type: "shoePolish",
    },
    {
      title: "Clean Rooms",
      type: "cleaningServices",
    },
  ];
  return (
    <div className="my-10">
      <p className=" text-primary dark:text-gray-400 sm:text-5xl text-2xl font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 w-[200px] sm:w-[300px] mx-auto">
        Our Facilities
      </p>
      {/* grid section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center gap-5 mt-10">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            title={facility.title}
            type={facility.type}
          />
        ))}
      </div>
    </div>
  );
};

export default OurFacilities;
