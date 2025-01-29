import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ManageScholarshipRow = ({
  img,
  scholarship_name,
  university,
  subject,
  degree,
  application_fee,
  meal_id,
  refetchDetail,
  setMeal_id,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  console.log(degree);

  const handleEditClick = () => {
    // fetchFoodDetails();
    refetchDetail();
    setMeal_id(meal_id);
    document.getElementById("my_modal_4").showModal();
  };

  const handleRemoveClick = () => {
    axiosSecure
      .delete(`/university/delete-university/${meal_id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success("University deleted successfully!");
          refetch();
        }
      })
      .catch((err) => {
        toast.error("An error occurred. Please try again.");
      });
  };
  return (
    <div className="grid grid-cols-6  gap-y-4 justify-items-center w-[1100px] md:w-[90%] xl:w-[1100px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl ">
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {scholarship_name}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-2">
        {university}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {subject}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        Bachelors
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {application_fee}
      </p>

      <div className="flex space-x-2 items-center">
        {/* view */}
        <button
          onClick={() => navigate(`/scholarship-details/${meal_id}`)}
          className="hover:bg-cyan-500 bg-cyan-400 text-gray-100 px-1 py-1 rounded-lg"
        >
          <HiOutlineViewfinderCircle className="text-4xl" />
        </button>
        {/* edit */}
        <button
          onClick={() => handleEditClick()}
          className="hover:bg-teal-500 bg-teal-400 text-gray-100 px-1 py-1 rounded-lg"
        >
          <FaEdit className="text-4xl" />
        </button>
        {/* delete */}
        <button
          onClick={() => handleRemoveClick()}
          className="hover:bg-red-500 bg-red-400 text-gray-100 px-1 py-1 rounded-lg"
        >
          <MdOutlineDeleteForever className="text-4xl" />
        </button>
      </div>

      {/* second row
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-2 col-span-2">
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

export default ManageScholarshipRow;
