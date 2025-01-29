import { useState } from "react";
import {
  useFeaturedUniversity,
  useUniversityDetails,
} from "../../../utils/fetchUniversity";
import ManageScholarshipRow from "../../../components/admin-dashboard/manage-scholarship/ManageScholarshipRow";
import EditModal from "../../../components/admin-dashboard/manage-scholarship/EditModal";

const ManageScholarship = () => {
  const [meal_id, setMeal_id] = useState(null);
  // const [refetch, setRefetch] = useState(false);
  // const [mealDetail, setMealDetail] = useState({});
  const { isLoading, featuredUniversity, error, refetch } =
    useFeaturedUniversity("all");
  const {
    isLoading: detailLoading,
    universityDetails,
    refetch: detailRefetch,
  } = useUniversityDetails(meal_id);

  // console.log("featuredUniversity", featuredUniversity);

  return (
    <div className="mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
        Manage Scholarship
      </h1>
      {!isLoading && featuredUniversity?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
          No Scholarship Found!
        </h2>
      )}
      {/* table */}
      {featuredUniversity?.length > 0 && (
        // table container styles
        <div className="w-[90%] xl:max-w-[1150px] mx-auto  overflow-x-scroll max-h-[600px] overflow-y-auto mb-20 relative">
          <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1100px] md:w-[90%] xl:w-[1100px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl top-0 sticky z-10">
            <p className="text-lg xl:text-xl  font-semibold text-gray-300">
              Scholarship
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              University
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Subject
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Degree
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Fee
            </p>
          </div>

          <div className="pt-2">
            {featuredUniversity.map((uni) => (
              <ManageScholarshipRow
                key={uni._id}
                img={uni.mealImage}
                scholarship_name={uni.scholarshipCategory}
                university={uni.universityName}
                subject={uni.subjectCategory}
                degree={uni.degree}
                application_fee={uni.applicationFees}
                meal_id={uni._id}
                refetchDetail={detailRefetch}
                setMeal_id={setMeal_id}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      )}

      {/* <DeleteModal foodId={foodId} _id={_id} onRemoveFood={handleRemoveFood} /> */}
      <EditModal
        meal_id={meal_id}
        setMeal_id={setMeal_id}
        uniDetail={universityDetails}
        // setRefetch={setRefetch}
        refetch={refetch}
      />
    </div>
  );
};

export default ManageScholarship;
