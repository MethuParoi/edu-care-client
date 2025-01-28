// import { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import axios from "axios";
// import Loader from "../components/ui/Loader/Loader";
// import { AiFillLike, AiFillProduct, AiOutlineLike } from "react-icons/ai";
// import { CiCalendarDate } from "react-icons/ci";
// import { IoLocation } from "react-icons/io5";
// import Button from "../components/ui/Button";
// import {
//   useMealDetails,
//   useUpcomingMealDetails,
// } from "../utils/fetchUniversity";
// import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";
// import { MdOutlineRateReview } from "react-icons/md";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
// import { useFetchSingleUser } from "../utils/fetchUsers";
// // import RequestModal from "../components/food-details/RequestModal";

// const UpcomingMealDetails = () => {
//   const [review, setReview] = useState("");
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const navigate = useNavigate();
//   const { id } = useParams();

//   const { isLoading, upcomingMealDetails, error, refetch } =
//     useUpcomingMealDetails(id);
//   const { singleUser, refetch: refetchLikedMeal } = useFetchSingleUser(
//     user?.email
//   );

//   //disble like button if user already liked the meal
//   const [isLiked, setIsLiked] = useState(false);
//   useEffect(() => {
//     if (singleUser?.likedMeals === 0) return;
//     if (singleUser?.likedMeals?.includes(id)) {
//       setIsLiked(true);
//     }
//   }, [singleUser, id]);

//   //publish meal based on like count
//   const handlePublish = async () => {
//     // console.log(upcomingMealDetails.likes);
//     if (
//       upcomingMealDetails.likes === 9 &&
//       upcomingMealDetails.isPublished === false
//     ) {
//       const [res1, res2] = Promise.all([
//         axiosSecure.patch(
//           `/meal/update-upcoming-meal/${upcomingMealDetails._id}`
//         ),
//         axiosSecure.post(`/meal/add-liked-meal`, {
//           ...upcomingMealDetails,
//           _id: upcomingMealDetails._id,
//         }),
//       ]).then((res) => {
//         if (res[0].status === 200 && res[1].status === 200) {
//           toast.success("Meal published successfully!");
//         }
//       });
//     }
//   };

//   //handle like button
//   const handleLike = async () => {
//     try {
//       const [res, resLikedMeal] = await Promise.all([
//         axiosSecure.patch(`meal/increase-upcoming-meal-like/${id}`),
//         axiosSecure.post(`/user/insert-liked-meals/${user?.email}`, {
//           likedMeals: [id],
//         }),
//       ]).then((res) => {
//         if (
//           res[0].data.modifiedCount === 1 &&
//           res[1].data.modifiedCount === 1
//         ) {
//           toast.success("Meal liked successfully!");
//           refetch();
//           refetchLikedMeal();
//           handlePublish();
//         }
//       });
//       // Handle the responses if needed
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-w-screen h-[70dvh]">
//         <div className="z-50 fixed top-1/2 left-1/2">
//           <Loader />{" "}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className=" min-w-screen flex md:flex-row flex-col md:gap-x-16 md:justify-center md:mt-16 md:mb-32 mb-16">
//       <div>
//         <img
//           className="w-full h-80 object-cover
//             md:w-[600px] md:h-[400px] md:rounded-lg"
//           src={upcomingMealDetails?.mealImage}
//           alt="movie-poster"
//         />
//       </div>

//       {/* food details */}
//       <div className="flex flex-col gap-y-4 md:w-[40%] px-2 mt-5 md:mt-0">
//         <h1 className="text-3xl font-semibold">{upcomingMealDetails?.title}</h1>
//         <div className="flex gap-x-4">
//           <div className="badge badge-secondary bg-green-200 border-transparent text-gray-800">
//             {upcomingMealDetails?.mealType}
//           </div>
//         </div>
//         {/* price, distributor, post time */}
//         <div className="flex flex-wrap items-center gap-x-4 my-2 gap-y-2">
//           <div className="flex items-center gap-x-2">
//             <FaBangladeshiTakaSign className="text-xl" />
//             <p className="text-gray-600">{upcomingMealDetails?.price}</p>
//           </div>
//           <div className="flex items-center gap-x-2">
//             {/* <AiFillProduct className="text-xl" /> */}
//             <p className="text-gray-600">
//               {" "}
//               <span className="font-semibold">Distributor: </span>
//               {upcomingMealDetails?.distributorName}
//             </p>
//           </div>
//           <div className="flex items-center gap-x-2">
//             <CiCalendarDate className="text-2xl font-bold" />
//             <p className="text-gray-600">{upcomingMealDetails?.postTime}</p>
//           </div>
//         </div>
//         {/* rating, review, request and like button */}
//         <div className="flex items-center gap-x-6 mt-1">
//           <div className="flex items-center gap-x-2">
//             <FaStarHalfStroke className="text-2xl font-bold" />
//             <p className="text-gray-600">{upcomingMealDetails?.rating}</p>
//           </div>
//           {/* review count */}
//           <div className="flex items-center gap-x-2">
//             <MdOutlineRateReview className="text-2xl font-bold" />
//             <p className="text-gray-600">{upcomingMealDetails?.reviewsCount}</p>
//           </div>
//           {/* like button */}
//           <div className="flex flex-wrap gap-y-2 items-center gap-x-2">
//             <button
//               disabled={isLiked || singleUser?.plan === "Bronze"}
//               onClick={() => handleLike()}
//               className="cursor-pointer px-2 py-1 bg-red-300 hover:bg-red-400 rounded-lg"
//             >
//               <AiOutlineLike className="text-2xl font-bold" />
//             </button>
//             <p className="text-gray-600">{upcomingMealDetails?.likes}</p>
//           </div>
//         </div>
//         {/* details */}
//         <p className="line-clamp-5 ">{upcomingMealDetails?.description}</p>
//         {/* ingredients */}
//         <div className="mb-4">
//           <h1 className="text-xl font-semibold">Ingredients:</h1>
//           <ul className="list-disc list-inside">
//             {Array.isArray(upcomingMealDetails?.ingredients)
//               ? upcomingMealDetails.ingredients.map((ingredient, index) => (
//                   <li key={index} className="text-gray-600">
//                     {ingredient}
//                   </li>
//                 ))
//               : upcomingMealDetails?.ingredients
//                   ?.split(",")
//                   .map((ingredient, index) => (
//                     <li key={index} className="text-gray-600">
//                       {ingredient.trim()}
//                     </li>
//                   ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingMealDetails;
