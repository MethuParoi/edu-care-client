// import { MdOutlineDeleteForever } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import { useMealDetails } from "../../../utils/fetchUniversity";
// import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { useContext, useState } from "react";
// import { toast } from "react-toastify";

// const RequestedMealRow = ({ mealId, refetch, status }) => {
//   const { user } = useContext(AuthContext);

//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();

//   //delete
//   const handeleDelete = () => {
//     const [re1, re2] = Promise.all([
//       axiosSecure.delete(
//         `/user/delete-requested-meals/${user.email}/${mealId}`
//       ),
//       axiosSecure.delete(`/requested-meal/delete-requested-meal/${mealId}`),
//     ]).then((res) => {
//       if (res[0].status === 200 && res[1].status === 200) {
//         toast.success("request cancelled successfully");
//         refetch();
//       } else {
//         toast.error("Failed to delete");
//       }
//     });

//     // axiosSecure
//     //   .delete(`/user/delete-requested-meals/${user.email}/${mealId}`)
//     //   .then((response) => {
//     //     if (response.status === 200) {
//     //       toast.success("request cancelled successfully");
//     //       refetch();
//     //     } else {
//     //       toast.error("Failed to delete");
//     //     }
//     //   });
//   };
//   const { isLoading, mealDetails } = useMealDetails(mealId);
//   return (
//     <div className="grid grid-cols-6 gap-y-4 justify-items-center w-[1000px] md:w-[90%] xl:w-[1000px] mx-auto bg-[#3282B8] p-4 my-4 rounded-xl">
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-2">
//         {mealDetails?.title}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {mealDetails?.likes}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {mealDetails?.reviewsCount}
//       </p>
//       <p className="text-lg xl:text-xl font-medium text-gray-300 line-clamp-1">
//         {status}
//       </p>

//       <div className="flex space-x-4 col-span-2">
//         {/* view */}
//         <button
//           onClick={() => navigate(`/meal-details/${mealId}`)}
//           className="hover:bg-red-500 bg-red-400 text-gray-100 px-4 py-1 rounded-lg"
//         >
//           View Meal
//         </button>

//         {/* delete */}
//         <button
//           onClick={() => {
//             handeleDelete(mealId);
//           }}
//           className="hover:bg-red-500 bg-red-400 text-gray-100 px-1 py-1 rounded-lg"
//         >
//           <MdOutlineDeleteForever className="text-4xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RequestedMealRow;
