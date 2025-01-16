import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddMeal = () => {
  const { user } = useContext(AuthContext);
  const user_email = user?.email;
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: add distributor name, admin name, and admin email
    const mealData = {
      ...data,
      user_email,
    };
    // console.log(movieData);
    axiosSecure
      .post("/add-meal", mealData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Meal added successfully!");
        }
      })
      .catch((err) => {
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="sm:p-6 p-2  mx-auto mb-5">
      <h2 className="text-2xl text-red-300 font-semibold text-center  my-8 border-b-2 border-red-300 w-[150px] mx-auto">
        Add Meal
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col items-center"
      >
        {/* Movie Poster and title */}
        <div className="flex lg:flex-row flex-col items-center justify-between lg:w-[700px] text-gray-600">
          {/* meal Title */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Meal Title</label>
            <input
              type="text"
              placeholder="Enter meal title"
              {...register("meal_title", {
                required: "Title is required",
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters",
                },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.meal_title && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.meal_title.message}
              </span>
            )}
          </div>
          {/* Meal Category */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Meal Category</label>
            <input
              type="text"
              placeholder="Enter meal category"
              {...register("meal_category", {
                required: "Meal Category is required",
                // pattern: {
                //   value: /^(https?:\/\/)/,
                //   message: "Please provide a valid image URL",
                // },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.meal_category && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.meal_category.message}
              </span>
            )}
          </div>
        </div>

        {/* Meal ingredient and price */}
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px] text-gray-700">
          {/* Genre
          <div className="relative mt-[-15px] lg:mt-0 mb-8 lg:mb-0">
            <label className="block mb-2 font-medium">Genre</label>
            <select
              {...register("genre", { required: "Please select a genre" })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            >
              <option value="">Select Genre</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="History">History</option>
            </select>
            {errors.genre && (
              <span className="text-red-500  absolute bottom-[-25px] lg:w-[300px] left-0">
                {errors.genre.message}
              </span>
            )}
          </div> */}

          {/* meal Ingredients */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Meal Ingredients</label>
            <input
              type="text"
              placeholder="Enter meal ingredients"
              {...register("meal_ingredients", {
                required: "Ingredients is required",
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters",
                },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.meal_ingredients && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.meal_ingredients.message}
              </span>
            )}
          </div>

          {/* Meal Price */}
          <div className="relative mb-8 lg:mb-0">
            <label className="block mb-2 font-medium">Meal Price</label>
            <input
              type="number"
              placeholder="Enter meal price "
              {...register("meal_price", {
                required: "Meal Price is required",
                // min: {
                //   value: 60,
                //   message: "Must be greater than 60 minutes",
                // },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.meal_price && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.meal_price.message}
              </span>
            )}
          </div>
        </div>

        {/* Meal image and post time*/}
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px] lg:pt-8 text-gray-600">
          {/*TODO: autofetch time meal post time */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Post Time</label>
            <input
              type="text"
              placeholder="Enter meal ingredients"
              {...register("meal_ingredients", {
                required: "Ingredients is required",
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters",
                },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.meal_ingredients && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.meal_ingredients.message}
              </span>
            )}
          </div>

          {/* TODO file upload*/}
        </div>

        {/* Summary */}
        <div className="relative  mb-10">
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter a short description"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-20 lg:h-28 lg:w-[700px] px-2"
          />
          {errors.description && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="my-8">
          <button
            type="submit"
            className="mt-6 px-4 w-[310px] lg:w-[700px] py-2 bg-cyan-600  text-white rounded hover:bg-cyan-700"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
