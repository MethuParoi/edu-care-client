// import { MdOutlineDeleteForever } from "react-icons/md";
// import { useMealDetails } from "../../../utils/fetchUniversity";
// import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
// import { useContext } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";

// const AllReviewRow = ({ review, mealId, refetch, user }) => {
//   const navigate = useNavigate();
//   // const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const { isLoading, mealDetails } = useMealDetails(mealId);

//   const handleDelete = () => {
//     axiosSecure
//       .delete(`/review/delete-review/${user}/${mealId}`)
//       .then((response) => {
//         if (response.status === 200) {
//           toast.success("Review deleted successfully");
//           refetch();
//         }
//       });
//   };

//   return (
//     <div className="grid grid-cols-5 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {review}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {mealDetails?.title}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {mealDetails?.likes}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {mealDetails?.reviewsCount}
//       </p>

//       <div className="flex space-x-4">
//         <button
//           onClick={() => navigate(`/meal-details/${mealId}`)}
//           className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
//         >
//           View Meal
//         </button>
//         {/* delete */}
//         <button
//           onClick={() => handleDelete()}
//           className="hover:bg-red-500 bg-red-400 text-gray-100 px-1 py-1 rounded-lg"
//         >
//           <MdOutlineDeleteForever className="text-4xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllReviewRow;
