import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useMealDetails } from "../../../utils/fetchMeals";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const ServeMealRow = ({ mealId, refetch, status, userEmail, name }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  //delete
  const handeleServe = () => {
    const [re1] = Promise.all([
      axiosSecure.put(
        `/requested-meal/update-requested-meal-status/${mealId}`,
        { status: "delivered" }
      ),
    ]).then((res) => {
      if (res[0].status === 200) {
        toast.success("meal served successfully");
        refetch();
      } else {
        toast.error("Failed to serve");
      }
    });
  };
  console.log(mealId);
  const { isLoading, mealDetails } = useMealDetails(mealId);
  return (
    <div className="grid grid-cols-5 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {mealDetails?.title}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {userEmail}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {name}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {status}
      </p>

      <div className="flex space-x-4 ">
        {/* serve */}
        <button
          onClick={() => {
            handeleServe(mealId);
          }}
          className="hover:bg-red-500 bg-red-400 text-gray-100 h-10 w-20 rounded-lg"
        >
          Serve
        </button>
      </div>
    </div>
  );
};

export default ServeMealRow;
