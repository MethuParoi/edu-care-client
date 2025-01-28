// import ServeMealRow from "../../../components/admin-dashboard/serve-meal/ServeMealRow";
// import Loader from "../../../components/ui/Loader/Loader";
// import MyReviewRow from "../../../components/user-dashboard/my-review/MyReviewRow";
// import RequestedMealRow from "../../../components/user-dashboard/requested-meal/RequestedMealRow";
// import {
//   useAllRequestedMeal,
//   useRequestedMeal,
// } from "../../../utils/fetchUniversity";

// const ServeMeal = () => {
//   const { isLoading, allRequestedMeal, error, refetch } = useAllRequestedMeal();

//   if (isLoading) {
//     <div className="flex justify-center items-center h-screen">
//       <Loader />
//     </div>;
//   }
//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300 relative">
//         Serve Meals
//       </h1>
//       {!isLoading && allRequestedMeal?.length === 0 && (
//         <h2 className="self-center text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No Meals found!
//         </h2>
//       )}
//       {/* table */}
//       {allRequestedMeal?.length > 0 && (
//         <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
//           <div className="grid grid-cols-5 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Meal Title
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               User Email
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Name
//             </p>
//             <p className="text-lg xl:text-xl  font-semibold text-gray-300">
//               Status
//             </p>
//           </div>

//           <div className="">
//             {allRequestedMeal?.[0]?.meals?.map((requestedMeal) => (
//               <ServeMealRow
//                 key={requestedMeal.id}
//                 mealId={requestedMeal.id}
//                 status={requestedMeal.status}
//                 userEmail={requestedMeal.user}
//                 name={requestedMeal.name}
//                 refetch={refetch}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServeMeal;
