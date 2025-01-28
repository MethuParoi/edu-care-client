// import { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "../../../provider/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import Loader from "../../../components/ui/Loader/Loader";

// const AddMeal = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { user } = useContext(AuthContext);
//   const food_id = Math.floor(Math.random() * 10000); //random 4 digit id
//   const distributorName = user?.displayName;
//   const distributorEmail = user?.email;
//   const axiosSecure = useAxiosSecure();
//   const axiosPublic = useAxiosPublic();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   useEffect(() => {
//     reset({
//       postTime: new Date().toLocaleString("en-US", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//       }),
//     });
//   }, []);

//   //upload image to imagebb
//   const image_hosting_api = `https://api.imgbb.com/1/upload?key=${
//     import.meta.env.VITE_IMGBB_API_KEY
//   }`;

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     const imageFile = { image: data.image[0] };
//     const res = await axiosPublic.post(image_hosting_api, imageFile, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     const mealImage = res.data.data.display_url;
//     // console.log(res.data);

//     if (!res.data.success) {
//       setIsLoading(false);
//       return toast.error("An error occurred. Please try again.");
//     }
//     const mealData = {
//       ...data,
//       price: Number(data.price),
//       food_id,
//       mealImage,
//       distributorName,
//       distributorEmail,
//       rating: 0,
//       likes: 0,
//       reviewsCount: 0,
//     };

//     axiosSecure
//       .post("/meal/add-meal", mealData)
//       .then((res) => {
//         if (res.status === 200) {
//           toast.success("Meal added successfully!");
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         toast.error("An error occurred. Please try again.");
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="sm:p-6 p-2  mx-auto mb-5">
//       {isLoading && (
//         <div className="z-50 fixed top-1/2 left-1/2">
//           <Loader />
//         </div>
//       )}

//       <h2 className="text-2xl text-red-300 font-semibold text-center mb-8 border-b-2 border-red-300 w-[150px] mx-auto">
//         Add Meal
//       </h2>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-4 flex flex-col items-center"
//       >
//         {/* Movie Poster and title */}
//         <div className="flex lg:flex-row flex-col items-center justify-between lg:w-[700px] text-gray-600">
//           {/* meal Title */}
//           <div className="relative mb-8">
//             <label className="block mb-2 font-medium">Meal Title</label>
//             <input
//               type="text"
//               placeholder="Enter meal title"
//               {...register("title", {
//                 required: "Title is required",
//                 minLength: {
//                   value: 2,
//                   message: "Title must be at least 2 characters",
//                 },
//               })}
//               className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
//             />
//             {errors.title && (
//               <span className="text-red-500 absolute bottom-[-25px] left-0">
//                 {errors.title.message}
//               </span>
//             )}
//           </div>
//           {/* Meal Category */}
//           <div className="relative mb-8">
//             <label className="block mb-2 font-medium">Meal Category</label>
//             <input
//               type="text"
//               placeholder="Enter meal category"
//               {...register("mealType", {
//                 required: "Meal Category is required",
//                 // pattern: {
//                 //   value: /^(https?:\/\/)/,
//                 //   message: "Please provide a valid image URL",
//                 // },
//               })}
//               className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
//             />
//             {errors.mealType && (
//               <span className="text-red-500 absolute bottom-[-25px] left-0">
//                 {errors.mealType.message}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Meal ingredient and price */}
//         <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px] text-gray-700">
//           {/* meal Ingredients */}
//           <div className="relative mb-8">
//             <label className="block mb-2 font-medium">Meal Ingredients</label>
//             <input
//               type="text"
//               placeholder="Enter meal ingredients"
//               {...register("ingredients", {
//                 required: "Ingredients is required",
//                 minLength: {
//                   value: 2,
//                   message: "Title must be at least 2 characters",
//                 },
//               })}
//               className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
//             />
//             {errors.ingredients && (
//               <span className="text-red-500 absolute bottom-[-25px] left-0">
//                 {errors.ingredients.message}
//               </span>
//             )}
//           </div>

//           {/* Meal Price */}
//           <div className="relative mb-8 lg:mb-0 lg:mt-[-40px] ">
//             <label className="block mb-2  font-medium">Meal Price</label>
//             <input
//               type="number"
//               placeholder="Enter meal price "
//               {...register("price", {
//                 required: "Meal Price is required",
//                 // min: {
//                 //   value: 60,
//                 //   message: "Must be greater than 60 minutes",
//                 // },
//               })}
//               className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
//             />
//             {errors.price && (
//               <span className="text-red-500 absolute bottom-[-25px] left-0">
//                 {errors.price.message}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Meal image and post time*/}
//         <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px]  text-gray-600">
//           {/*TODO: autofetch time meal post time */}
//           <div className="relative mb-8">
//             <label className="block mb-2 font-medium">Post Time</label>
//             <input
//               disabled
//               type="text"
//               placeholder="Enter meal post time"
//               {...register("postTime", {
//                 required: "post time is required",
//               })}
//               className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
//             />
//             {errors.ingredients && (
//               <span className="text-red-500 absolute bottom-[-25px] left-0">
//                 {errors.ingredients.message}
//               </span>
//             )}
//           </div>

//           {/* TODO file upload*/}
//           <div className="relative mb-8 ">
//             <label className="block mb-2 font-medium">Select Image</label>
//             <input
//               {...register("image", {
//                 required: "Image is required",
//               })}
//               type="file"
//               className="file-input w-[265px] max-w-xs bg-gray-200"
//             />
//             {errors.image && (
//               <span className="text-red-500 absolute bottom-[-25px] left-0">
//                 {errors.image.message}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Description */}
//         <div className="relative  mb-10 ">
//           <label className="block mb-2 font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             placeholder="Enter a short description"
//             {...register("description", {
//               required: "Description is required",
//               minLength: {
//                 value: 10,
//                 message: "Description must be at least 10 characters",
//               },
//             })}
//             className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-20 lg:h-28 lg:w-[700px] px-2 text-gray-700"
//           />
//           {errors.description && (
//             <span className="text-red-500 absolute bottom-[-25px] left-0">
//               {errors.description.message}
//             </span>
//           )}
//         </div>

//         <div className="my-8">
//           <button
//             type="submit"
//             className="mt-6 px-4 w-[310px] lg:w-[700px] py-2 bg-cyan-600  text-white rounded hover:bg-cyan-700"
//           >
//             Add Meal
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMeal;
