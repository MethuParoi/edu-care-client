import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";
const ManageAppliedApplicationRow = ({
  university,
  scholarship,
  applicant,
  status,
  application_id,
  setApplicationDetail,
  refetch,

  //   refetchDetail,
  //   setMeal_id,
}) => {
  const axiosSecure = useAxiosSecure();

  const handleDetails = () => {
    axiosSecure
      .get(`/application/get-application/${application_id}`)
      .then((res) => {
        if (res.status === 200) {
          setApplicationDetail(res.data);
        }
      });
  };

  return (
    <div className="grid grid-cols-6 gap-y-4 justify-items-center w-[1100px] md:w-[90%] xl:w-[1100px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl ">
      {/* <div className="row-span-2">
        <img className="w-28 h-28 rounded-lg" src={mealImage} alt="" />
      </div> */}
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-2">
        {university}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {scholarship}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {applicant}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {status}
      </p>

      <div className="flex space-x-2 items-center col-span-2">
        {/* details */}
        <button
          onClick={() => {
            handleDetails();
            document.getElementById("my_modal_3").showModal();
          }}
          className="hover:bg-teal-500 bg-teal-400 text-gray-100 px-4 py-2 text-lg font-semibold rounded-lg"
        >
          Details
        </button>
        {/* Feedback */}
        <button
          // disabled={isPublished}
          onClick={() => {
            document.getElementById("feedback").showModal();
          }}
          className="hover:bg-teal-500 bg-teal-400 text-gray-100 px-4 py-2 text-lg font-semibold rounded-lg"
        >
          Feedback
        </button>
        {/* Cancel */}
        <button
          // disabled={isPublished}
          onClick={() => {
            toast.success("Application cancelled successfully!");
          }}
          className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-2 text-lg font-semibold rounded-lg"
        >
          Cancel
        </button>
      </div>

      {/* second row */}
      {/* <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-2 col-span-2">
        <span className="font-semibold">Description:</span> {description}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        <span className="font-semibold">Rating:</span> {rating}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        <span className="font-semibold">Likes:</span> {likes}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        <span className="font-semibold">Reviews:</span> {reviews_count}
      </p> */}
    </div>
  );
};

export default ManageAppliedApplicationRow;
