import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/ui/Loader/Loader";

const AddScholarship = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      postDate: new Date().toISOString().split("T")[0], // Set current date for postDate
    });
  }, []);

  // Upload image to imgbb
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;

  const onSubmit = async (data) => {
    setIsLoading(true);

    // Upload image to ImgBB
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!res.data.success) {
      setIsLoading(false);
      return toast.error("Image upload failed. Please try again.");
    }

    const universityLogo = res.data.data.display_url;

    // Prepare scholarship data
    const scholarshipData = {
      ...data,
      universityLogo,

      postDate: new Date().toISOString(),
      postedUserEmail: user?.email,
    };

    // Send data to backend
    axiosSecure
      .post("/university/add-university", scholarshipData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Scholarship added successfully!");
          reset(); // Reset the form
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to add scholarship. Try again.");
        setIsLoading(false);
      });
  };

  return (
    <div className="sm:p-6 p-2 mx-auto mb-5">
      {isLoading && (
        <div className="z-50 fixed top-1/2 left-1/2">
          <Loader />
        </div>
      )}

      <h2 className="text-2xl text-blue-500 font-semibold text-center mb-8 border-b-2 border-blue-500 w-[200px] mx-auto">
        Add Scholarship
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col items-center"
      >
        {/* Scholarship & University Name */}
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-[700px]">
          {/* Scholarship Name */}
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">Scholarship Name</label>
            <input
              type="text"
              placeholder="Enter Scholarship Name"
              {...register("scholarshipName", {
                required: "This field is required",
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>

          {/* University Name */}
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">University Name</label>
            <input
              type="text"
              placeholder="Enter University Name"
              {...register("universityName", {
                required: "This field is required",
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>
        </div>

        {/* University Country & City */}
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-[700px]">
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">University Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              {...register("universityCountry", {
                required: "This field is required",
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>

          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">University City</label>
            <input
              type="text"
              placeholder="Enter City"
              {...register("universityCity", {
                required: "This field is required",
              })}
              className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>
        </div>

        {/* Subject Category & Scholarship Category */}
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-[700px]">
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">Subject Category</label>
            <select
              {...register("subjectCategory", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full bg-white"
            >
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">
              Scholarship Category
            </label>
            <select
              {...register("scholarshipCategory", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full bg-white"
            >
              <option value="Full fund">Full fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </div>
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

        {/* World rank, Degree */}
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-[700px]">
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">World rank</label>
            <input
              type="number"
              placeholder="Enter World rank"
              {...register("rank", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>

          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">Degree</label>
            <input
              type="text"
              {...register("degree", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>
        </div>

        {/* Tution Fees & Service Charge */}
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-[700px]">
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">Tution Fees</label>
            <input
              type="number"
              placeholder="Enter Tution Fees"
              {...register("tutionFees", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>

          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">Service Charge</label>
            <input
              type="text"
              {...register("serviceCharge", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>
        </div>

        {/* Fees & Deadline */}
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-[700px]">
          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">Application Fees</label>
            <input
              type="number"
              placeholder="Enter Application Fees"
              {...register("applicationFees", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>

          <div className="relative mb-6 w-full">
            <label className="block mb-2 font-medium">
              Application Deadline
            </label>
            <input
              type="date"
              {...register("applicationDeadline", { required: "Required" })}
              className="border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2 w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 px-4 w-[310px] lg:w-[700px] py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Scholarship
        </button>
      </form>
    </div>
  );
};

export default AddScholarship;
