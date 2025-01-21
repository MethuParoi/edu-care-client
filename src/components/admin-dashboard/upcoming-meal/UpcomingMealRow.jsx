import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const UpcomingMealRow = ({
  title,
  price,
  mealType,
  mealImage,
  distributorName,
  rating,
  description,
  likes,
  reviews_count,
  meal_id,
  refetch,
  //   refetchDetail,
  //   setMeal_id,
}) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handlePublish = () => {
    document.getElementById("upcoming_meal_modal").showModal();
  };

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-y-4 justify-items-center w-[1100px] md:w-[90%] xl:w-[1100px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl ">
      <div className="row-span-2">
        <img className="w-28 h-28 rounded-lg" src={mealImage} alt="" />
      </div>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {title}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {price}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {mealType}
      </p>
      <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
        {distributorName}
      </p>

      <div className="flex space-x-2 items-center">
        {/* edit */}
        <button
          onClick={() => handlePublish()}
          className="hover:bg-teal-500 bg-teal-400 text-gray-100 px-4 py-2 text-lg font-semibold rounded-lg"
        >
          Publish
        </button>
        {/* delete */}
        {/* <button
          onClick={() => handleRemoveClick()}
          className="hover:bg-red-500 bg-red-400 text-gray-100 px-1 py-1 rounded-lg"
        >
          <MdOutlineDeleteForever className="text-4xl" />
        </button> */}
      </div>

      {/* second row */}
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
      </p>
    </div>
  );
};

export default UpcomingMealRow;
