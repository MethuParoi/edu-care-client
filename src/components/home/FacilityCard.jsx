import { CgGym } from "react-icons/cg";
import {
  MdCleaningServices,
  MdOutlineSecurity,
  MdOutlineWifi,
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { PiHairDryerBold } from "react-icons/pi";
import {
  FaFingerprint,
  FaFireExtinguisher,
  FaPowerOff,
  FaTv,
} from "react-icons/fa6";
import { LuWashingMachine } from "react-icons/lu";
import { GiConverseShoe } from "react-icons/gi";

const FacilityCard = ({ title, type }) => {
  const renderIcon = () => {
    switch (type) {
      case "gym":
        return <CgGym className="h-16 w-16 text-accentHover" />;
      case "security":
        return <MdOutlineSecurity className="h-16 w-16 text-accentHover" />;
      case "airCondition":
        return <TbAirConditioning className="h-16 w-16 text-accentHover" />;
      case "hairDryer":
        return <PiHairDryerBold className="h-16 w-16 text-accentHover" />;
      case "wifi":
        return <MdOutlineWifi className="h-16 w-16 text-accentHover" />;
      case "fingerprint":
        return <FaFingerprint className="h-16 w-16 text-accentHover" />;
      case "fireSafety":
        return <FaFireExtinguisher className="h-16 w-16 text-accentHover" />;
      case "washingMachine":
        return <LuWashingMachine className="h-16 w-16 text-accentHover" />;
      case "tv":
        return <FaTv className="h-16 w-16 text-accentHover" />;
      case "powerBackup":
        return <FaPowerOff className="h-16 w-16 text-accentHover" />;
      case "shoePolish":
        return <GiConverseShoe className="h-16 w-16 text-accentHover" />;
      case "cleaningServices":
        return <MdCleaningServices className="h-16 w-16 text-accentHover" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-36 sm:w-44 h-48 bg-secondary opacity-85 flex flex-col items-center justify-center gap-y-5 rounded-2xl">
      <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
        {renderIcon()}
      </div>
      <h1 className="text-xl sm:text-2xl font-semibold nunitoSans-font text-gray-900 border-t-2 border-gray-900 text-center">
        {title}
      </h1>
    </div>
  );
};

export default FacilityCard;
