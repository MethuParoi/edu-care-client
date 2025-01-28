// import AddUpcomingMeal from "../../../components/admin-dashboard/upcoming-meal/AddUpcomingMeal";
// import { useUpcomingMeal } from "../../../utils/fetchUniversity";
// import UpcomingMealRow from "../../../components/admin-dashboard/upcoming-meal/UpcomingMealRow";
// import Button from "../../../components/ui/Button";
// import { useState } from "react";
// import Loader from "../../../components/ui/Loader/Loader";

// const UpcomingMeal = () => {
//   const [isPublishing, setIsPublishing] = useState(false);
//   const { isLoading, upcomingMeal, error, refetch } = useUpcomingMeal();
//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
//         Upcoming Meals
//       </h1>
//       {/* add meal */}
//       <div className="flex justify-end w-[90%] xl:max-w-[1150px] mx-auto mb-4">
//         <Button
//           label="Add Upcoming Meal"
//           onClick={() =>
//             document.getElementById("upcoming_meal_modal").showModal()
//           }
//           type="small"
//         />
//       </div>
//       {!isLoading && upcomingMeal?.length === 0 && (
//         <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No Upcoming Meal found!
//         </h2>
//       )}
//       {isPublishing && (
//         <div className="absolute top-1/2 left-1/2">
//           <Loader />
//         </div>
//       )}
//       {/* table */}
//       {upcomingMeal?.length > 0 && (
//         <div className="w-[90%] xl:max-w-[1150px] mx-auto  overflow-x-scroll max-h-[600px] overflow-y-auto mb-20 relative">
//           <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1100px] md:w-[90%] xl:w-[1100px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl top-0 sticky z-10">
//             <div>{/* image */}</div>
//             <p className="text-lg xl:text-xl  font-semibold text-gray-300">
//               Title
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Price
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Meal Type
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Distributor
//             </p>
//             {/* <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Rating
//             </p> */}
//           </div>

//           <div className="">
//             {upcomingMeal
//               .sort((a, b) => b.likes - a.likes) // Sort in descending order based on likes
//               .map((meal) => (
//                 <UpcomingMealRow
//                   key={meal._id}
//                   title={meal.title}
//                   price={meal.price}
//                   mealType={meal.mealType}
//                   ingredients={meal.ingredients}
//                   mealImage={meal.mealImage}
//                   distributorName={meal.distributorName}
//                   distributorEmail={meal.distributorEmail}
//                   postTime={meal.postTime}
//                   rating={meal.rating}
//                   description={meal.description}
//                   likes={meal.likes}
//                   reviews_count={meal.reviewsCount}
//                   meal_id={meal._id}
//                   refetch={refetch}
//                   setIsPublishing={setIsPublishing}
//                   // refetchDetail={refetchDetail}
//                   // setMeal_id={setMeal_id}
//                 />
//               ))}
//             {/* {upcomingMeal.map((meal) => (
//               <UpcomingMealRow
//                 key={meal._id}
//                 title={meal.title}
//                 price={meal.price}
//                 mealType={meal.mealType}
//                 ingredients={meal.ingredients}
//                 mealImage={meal.mealImage}
//                 distributorName={meal.distributorName}
//                 distributorEmail={meal.distributorEmail}
//                 postTime={meal.postTime}
//                 rating={meal.rating}
//                 description={meal.description}
//                 likes={meal.likes}
//                 reviews_count={meal.reviewsCount}
//                 meal_id={meal._id}
//                 refetch={refetch}
//                 setIsPublishing={setIsPublishing}
//                 // refetchDetail={refetchDetail}
//                 // setMeal_id={setMeal_id}
//               />
//             ))} */}
//           </div>
//         </div>
//       )}

//       {/* upcoming meal modal */}
//       <AddUpcomingMeal refetch={refetch} />
//     </div>
//   );
// };

// export default UpcomingMeal;
