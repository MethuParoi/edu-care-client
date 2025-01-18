import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
const AllMealRow = ({
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
  refetchDetail,
  setMeal_id,
}) => {
  const handleEditClick = () => {
    // fetchFoodDetails();
    refetchDetail();
    setMeal_id(meal_id);
    document.getElementById("my_modal_4").showModal();
  };

  const handleRemoveClick = () => {
    // setFoodId(food.food_id);
    // set_id(food._id);
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
        <button className="hover:bg-cyan-500 bg-cyan-400 text-gray-100 px-1 py-1 rounded-lg">
          <HiOutlineViewfinderCircle className="text-4xl" />
        </button>
        <button
          onClick={() => handleEditClick()}
          className="hover:bg-teal-500 bg-teal-400 text-gray-100 px-1 py-1 rounded-lg"
        >
          <FaEdit className="text-4xl" />
        </button>
        <button
          onClick={() => handleRemoveClick()}
          className="hover:bg-red-500 bg-red-400 text-gray-100 px-1 py-1 rounded-lg"
        >
          <MdOutlineDeleteForever className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default AllMealRow;
