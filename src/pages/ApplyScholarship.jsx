import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "../components/ui/Loader/Loader";
import { useFetchSingleUser } from "../utils/fetchUsers";

const ApplyScholarship = () => {
  const { user, scholarshipDetails } = useContext(AuthContext);
  const { singleUser, error, refetch } = useFetchSingleUser(user?.email);
  const [isLoading, setIsLoading] = useState(false);
  const food_id = Math.floor(Math.random() * 10000); //random 4 digit id
  const userName = user?.displayName;
  const userEmail = user?.email;
  const user_id = singleUser?._id;
  const scholarship_id = scholarshipDetails?._id;
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  //   console.log("details", scholarshipDetails);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //Post Time
  const postTime = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  //upload image to imagebb
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const mealImage = res.data.data.display_url;
    // console.log(res.data);

    if (!res.data.success) {
      setIsLoading(false);
      return toast.error("An error occurred. Please try again.");
    }
    const applicationData = {
      ...data,
      scholarship_id,
      mealImage,
      userName,
      userEmail,
      user_id,
      postTime,
      address: scholarshipDetails?.location,
      application_fee: scholarshipDetails?.applicationFees,
      service_charge: scholarshipDetails?.service_charge,
      application_status: "pending",
    };

    const [res1, res2] = await Promise.all([
      axiosSecure.post(`/user/insert-user-application/${user?.email}`, {
        userApplication: applicationData,
      }),
      axiosSecure.post("/application/add-application", applicationData),
    ]).then((res) => {
      if (
        res[0].data.acknowledged === true &&
        res[1].data.acknowledged === true
      ) {
        setIsLoading(false);
        toast.success("Application submitted successfully");
        reset();
      }
    });
  };

  return (
    <div className="sm:p-6 p-2  mx-auto mb-5">
      {isLoading && (
        <div className="z-50 fixed top-1/2 left-1/2">
          <Loader />
        </div>
      )}

      <h2 className="text-2xl text-red-300 font-semibold text-center mb-8 border-b-2 border-red-300 w-[250px] mx-auto">
        Apply Scholarship
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col items-center"
      >
        {/* Movie Poster and title */}
        <div className="flex lg:flex-row flex-col items-center justify-between lg:w-[700px] text-gray-600">
          {/* meal Title */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="number"
              placeholder="Enter phone number"
              {...register("contact", {
                required: "phone number is required",
                minLength: {
                  value: 11,
                  message: "contact must be at least 11 characters",
                },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.contact && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.contact.message}
              </span>
            )}
          </div>
          {/* Meal Category */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              {...register("address", {
                required: "address is required",
                // pattern: {
                //   value: /^(https?:\/\/)/,
                //   message: "Please provide a valid image URL",
                // },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.address && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>

        {/* ssc, hsc*/}
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px] text-gray-700">
          {/* ssc */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">SSC Result</label>
            <input
              type="text"
              placeholder="Enter SSC result"
              {...register("ssc", {
                required: "ssc result is required",
                minLength: {
                  value: 2,
                  message: "ssc result must be at least 2 characters",
                },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.ssc && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.ssc.message}
              </span>
            )}
          </div>

          {/* hsc */}
          <div className="relative mb-8 lg:mb-0 lg:mt-[-40px] ">
            <label className="block mb-2  font-medium">HSC Result</label>
            <input
              type="text"
              placeholder="Enter HSC result "
              {...register("hsc", {
                required: "HSC result is required",
                // min: {
                //   value: 60,
                //   message: "Must be greater than 60 minutes",
                // },
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
            />
            {errors.hsc && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.hsc.message}
              </span>
            )}
          </div>
        </div>

        {/* new fields */}

        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px] text-gray-700">
          {/* Gender */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Applicant Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 bg-white"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.gender.message}
              </span>
            )}
          </div>

          {/* Applying Degree */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Applying Degree</label>
            <select
              {...register("degree", {
                required: "Degree selection is required",
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 bg-white"
            >
              <option value="" disabled>
                Select Degree
              </option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor</option>
              <option value="masters">Masters</option>
            </select>
            {errors.degree && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.degree.message}
              </span>
            )}
          </div>

          {/* Study Gap */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Study Gap (if any)</label>
            <select
              {...register("studyGap")}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 bg-white"
            >
              <option value="">No Gap</option>
              <option value="1-year">1 Year</option>
              <option value="2-years">2 Years</option>
              <option value="3-years">3 Years</option>
              <option value="more">More than 3 Years</option>
            </select>
          </div>
        </div>

        {/* Read-Only Fields */}
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px] text-gray-700">
          {/* University Name */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">University Name</label>
            <input
              {...register("universityName")}
              value={scholarshipDetails?.universityName}
              type="text"
              readOnly
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Scholarship Category */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">
              Scholarship Category
            </label>
            <input
              {...register("scholarshipCategory")}
              value={scholarshipDetails?.scholarshipCategory}
              type="text"
              readOnly
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* new fields */}

        {/* image and post time*/}
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:w-[700px]  text-gray-600">
          {/* Subject Category */}
          <div className="relative mb-8">
            <label className="block mb-2 font-medium">Subject Category</label>
            <input
              {...register("subjectCategory")}
              value={scholarshipDetails?.subjectCategory}
              type="text"
              readOnly
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* TODO file upload*/}
          <div className="relative mb-8 ">
            <label className="block mb-2 font-medium">Select Image</label>
            <input
              {...register("image", {
                required: "Image is required",
              })}
              type="file"
              className="file-input w-[265px] max-w-xs bg-gray-200"
            />
            {errors.image && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.image.message}
              </span>
            )}
          </div>
        </div>

        <div className="my-8">
          <button
            type="submit"
            className="mt-6 px-4 w-[310px] lg:w-[700px] py-2 bg-cyan-600  text-white rounded hover:bg-cyan-700"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyScholarship;
