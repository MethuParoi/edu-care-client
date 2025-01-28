// import { useState } from "react";
// import AllMealRow from "../../../components/admin-dashboard/all-meal/AllMealRow";
// import EditModal from "../../../components/admin-dashboard/all-meal/EditModal";
// import {
//   useFeaturedMeal,
//   useMealDetails,
// } from "../../../utils/fetchUniversity";

// const featuredMeal = () => {
//   const [meal_id, setMeal_id] = useState(null);
//   // const [refetch, setRefetch] = useState(false);
//   // const [mealDetail, setMealDetail] = useState({});
//   const { isLoading, featuredMeal, error, refetch } = useFeaturedMeal("all");
//   const {
//     isLoading: isLoadingDetail,
//     mealDetails: mealDetail,
//     error: errorDetail,
//     refetch: refetchDetail,
//   } = useMealDetails(meal_id);

//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
//         All Meals
//       </h1>
//       {!isLoading && featuredMeal?.length === 0 && (
//         <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No Meal Found!
//         </h2>
//       )}
//       {/* table */}
//       {featuredMeal?.length > 0 && (
//         // table container styles
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

//           <div className="pt-2">
//             {featuredMeal.map((meal) => (
//               <AllMealRow
//                 key={meal._id}
//                 title={meal.title}
//                 price={meal.price}
//                 mealType={meal.mealType}
//                 mealImage={meal.mealImage}
//                 distributorName={meal.distributorName}
//                 rating={meal.rating}
//                 description={meal.description}
//                 likes={meal.likes}
//                 reviews_count={meal.reviewsCount}
//                 meal_id={meal._id}
//                 refetchDetail={refetchDetail}
//                 setMeal_id={setMeal_id}
//                 refetch={refetch}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* <DeleteModal foodId={foodId} _id={_id} onRemoveFood={handleRemoveFood} /> */}
//       <EditModal
//         meal_id={meal_id}
//         setMeal_id={setMeal_id}
//         mealDetail={mealDetail}
//         // setRefetch={setRefetch}
//         refetch={refetch}
//       />
//     </div>
//   );
// };

// export default featuredMeal;
