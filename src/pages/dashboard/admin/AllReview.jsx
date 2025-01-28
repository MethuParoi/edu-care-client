// import AllReviewRow from "../../../components/admin-dashboard/all-review/AllReviewRow";
// import { useFetchAllReview } from "../../../utils/fetchReview";
// // import Loader from "../../../";

// const AllReview = () => {
//   const { isLoading, allReview, error, refetch } = useFetchAllReview();

//   if (isLoading) {
//     <div className="flex justify-center items-center h-screen">
//       {/* <Loader /> */}
//       Loading...
//     </div>;
//   }
//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
//         All Reviews
//       </h1>
//       {!isLoading && allReview?.length === 0 && (
//         <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No review found!
//         </h2>
//       )}
//       {/* table */}
//       {allReview?.length > 0 && (
//         <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
//           <div className="grid grid-cols-5 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
//             <p className="text-lg xl:text-xl  font-semibold text-gray-300">
//               Review
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Meal Title
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Likes
//             </p>
//             <p className="text-lg xl:text-xl font-semibold text-gray-300">
//               Review Count
//             </p>
//           </div>

//           <div className="">
//             {allReview.map((reviewObj) =>
//               reviewObj.reviews.map((nestedReview, index) =>
//                 nestedReview.review.map((singleReview) => (
//                   <AllReviewRow
//                     key={singleReview.meal_id + index}
//                     review={singleReview.review}
//                     user={singleReview.user_id}
//                     mealId={singleReview.meal_id}
//                     refetch={refetch}
//                   />
//                 ))
//               )
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllReview;
