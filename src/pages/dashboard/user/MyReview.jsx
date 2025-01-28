// import { useFetchReview } from "../../../utils/fetchReview";
// import MyReviewow from "../../../components/user-dashboard/my-review/MyReviewRow";
// import Loader from "../../../components/ui/Loader/Loader";
// import MyReviewRow from "../../../components/user-dashboard/my-review/MyReviewRow";
// import { useContext, useState } from "react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
// import { AuthContext } from "../../../provider/AuthProvider";
// const MyReview = () => {
//   const { isLoading, Review, error, refetch } = useFetchReview();
//   const { user } = useContext(AuthContext);
//   const [editReview, setEditReview] = useState("");
//   const [editReviewId, setEditReviewId] = useState("");
//   const axiosSecure = useAxiosSecure();

//   const handleEdit = () => {
//     axiosSecure
//       .patch(`/user/edit-review/${user.email}/${editReviewId}`, {
//         review: editReview,
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           toast.success("Review edited successfully");
//           refetch();
//           document.getElementById("edit_review_modal").close();
//         }
//       });
//   };

//   if (isLoading) {
//     <div className="flex justify-center items-center h-screen">
//       <Loader />
//     </div>;
//   }
//   return (
//     <div className="mt-10 flex flex-col items-start">
//       <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300 relative">
//         My Reviews
//       </h1>
//       {!isLoading && Review?.length === 0 && (
//         <h2 className="self-center text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
//           No review found!
//         </h2>
//       )}
//       {/* table */}
//       {Review?.length > 0 && (
//         <div className="w-[90%] xl:max-w-[1000px] mx-auto  overflow-x-scroll max-h-[500px] overflow-y-auto mb-20">
//           <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1000px] md:w-[90%] xl:w-[1000px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl">
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
//             {Review.map((singleReview) => (
//               <MyReviewRow
//                 key={singleReview.id}
//                 review={singleReview.review}
//                 mealId={singleReview.id}
//                 refetch={refetch}
//                 setEditReviewId={setEditReviewId}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* edit modal */}
//       <dialog id="edit_review_modal" className="modal">
//         <div className="modal-box flex flex-col items-center justify-center">
//           <form method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           <h3 className="font-bold text-xl">Edit Review</h3>
//           <textarea
//             value={editReview}
//             onChange={(e) => setEditReview(e.target.value)}
//             placeholder="Edit your review here"
//             className="w-[70%] h-20 p-2 mt-2 border-2 border-gray-600 rounded-lg mb-5"
//           ></textarea>

//           <button
//             onClick={() => handleEdit()}
//             className="btn btn-normal text-white bg-red-400 hover:bg-red-500"
//           >
//             Edit Review
//           </button>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default MyReview;
