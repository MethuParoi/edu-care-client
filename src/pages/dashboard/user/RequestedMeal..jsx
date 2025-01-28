// import Loader from "../../../components/ui/Loader/Loader";
// import MyReviewRow from "../../../components/user-dashboard/my-review/MyReviewRow";
// import RequestedMealRow from "../../../components/user-dashboard/requested-meal/RequestedMealRow";
// import { useRequestedMeal } from "../../../utils/fetchUniversity";

// const RequestedMeal = () => {
//   const { isLoading, requestedMeal, error, refetch } = useRequestedMeal();

//   if (isLoading) {
//     <div className="flex justify-center items-center h-screen">
//       <Loader />
//     </div>;
//   }
//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300 relative">
//         My Requested Meals
//       </h1>
//       {!isLoading && requestedMeal?.length === 0 && (
//         <h2 className="self-center text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No Requested Meals found!
//         </h2>
//       )}
//       {/* table */}
//       {requestedMeal?.length > 0 && (
//         <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
//           <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Meal Title
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Likes
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Review Count
//             </p>
//             <p className="text-lg xl:text-xl  font-semibold text-gray-300">
//               Status
//             </p>
//           </div>

//           <div className="">
//             {requestedMeal.map((requestedMeal) => (
//               <RequestedMealRow
//                 key={requestedMeal.id}
//                 mealId={requestedMeal.id}
//                 status={requestedMeal.status}
//                 refetch={refetch}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestedMeal;
