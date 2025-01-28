import { useFeaturedUniversity } from "../../utils/fetchUniversity";
import ScholarshipCard from "./ScholarshipCard";

const TabRow = () => {
  const { isLoading, featuredUniversity, error, refetch } =
    useFeaturedUniversity("featured");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-4 justify-items-center">
      {featuredUniversity?.map((university, index) => (
        <ScholarshipCard key={index} university={university} />
      ))}
    </div>
  );
};

export default TabRow;
