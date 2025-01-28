import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";
import { AiFillLike, AiFillProduct, AiOutlineLike } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import Button from "../components/ui/Button";
import { useUniversityDetails } from "../utils/fetchUniversity";
import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useFetchSingleUser } from "../utils/fetchUsers";
import { useFetchAllReview } from "../utils/fetchReview";
import ReviewCard from "../components/scholarship-details/ReviewCard";
// import RequestModal from "../components/food-details/RequestModal";

const ScholarshipDetails = () => {
  const [review, setReview] = useState("");
  const { user, setPackagePrice, setScholarshipDetails } =
    useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, universityDetails, error, refetch } =
    useUniversityDetails(id);
  const { singleUser, refetch: refetchLikedscholarship } = useFetchSingleUser(
    user?.email
  );
  //fetch all reviews
  const {
    isLoading: isLoadingReview,
    allReview,
    error: errorReview,
    refetch: refetchReview,
  } = useFetchAllReview();

  //handle review post
  const handleReview = async () => {
    try {
      const [res, resLikedscholarship, resReviewedscholarship] =
        await Promise.all([
          //   axiosSecure.patch(`scholarship/increase-review/${id}`),
          axiosSecure.post(
            `/user/insert-reviewed-scholarships/${user?.email}`,
            {
              reviewedScholarship: [{ id: id, review: review }],
            }
          ),
          axiosSecure.post(`/review/add-review/678ca678c4c2ef19970bc09f`, {
            review: [
              {
                user_id: user?.email,
                scholarship_id: id,
                review: review,
              },
            ],
          }),
        ]).then((res) => {
          if (
            res[0].data.modifiedCount === 1 &&
            res[1].data.acknowledged === true
          ) {
            toast.success("Review posted successfully!");
            refetch();
            refetchReview();
            setReview("");
          }
        });
      // const response = await axiosSecure.post(`/scholarship/post-review/${id}`, {
      //   review,
      //   email: user?.email,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  //handle scholarship Request
  const handleScholarshipRequest = async () => {
    setPackagePrice(universityDetails?.applicationFees);
    setScholarshipDetails(universityDetails);
    navigate(`/checkout`);
  };

  if (isLoading) {
    return (
      <div className="min-w-screen h-[70dvh]">
        <div className="z-50 fixed top-1/2 left-1/2">
          <Loader />{" "}
        </div>
      </div>
    );
  }

  return (
    <div className=" min-w-screen flex md:flex-row flex-col md:gap-x-16 md:justify-center md:mt-16 md:mb-32 mb-16">
      <div>
        <img
          className="w-full h-80 object-cover
            md:w-[600px] md:h-[400px] md:rounded-lg"
          src={universityDetails?.universityLogo}
          alt="movie-poster"
        />
      </div>

      {/* uni details */}
      <div className="flex flex-col gap-y-4 md:w-[40%] px-2 mt-5 md:mt-0">
        <h1 className="text-3xl font-semibold">
          {universityDetails?.universityName}
        </h1>
        <div className="flex gap-x-4">
          <div className="badge badge-secondary bg-green-200 border-transparent text-gray-800">
            {universityDetails?.scholarshipCategory}
          </div>
        </div>
        {/* price, distributor, post time */}
        <div className="flex flex-wrap items-center gap-x-4 my-2 gap-y-2">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">Application Fees: </span>
            <p className="text-gray-600">
              {universityDetails?.applicationFees}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            {/* <AiFillProduct className="text-xl" /> */}
            <p className="text-gray-600">
              {" "}
              <span className="font-semibold">Subject Category: </span>
              {universityDetails?.subjectCategory}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <CiCalendarDate className="text-2xl font-bold" />
            <p className="text-gray-600">{universityDetails?.postDate}</p>
          </div>
        </div>
        {/* charges */}
        <div className="flex items-center gap-x-6 mt-1">
          <div className="flex items-center gap-x-2">
            <FaStarHalfStroke className="text-2xl font-bold" />
            <p className="text-gray-600">{universityDetails?.rating}</p>
          </div>
          {/* review count */}
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">Service Charge: </span>
            <p className="text-gray-600">{universityDetails?.service_charge}</p>
          </div>
          {/* like button */}
          <div className="flex flex-wrap gap-y-2 items-center gap-x-2">
            <span className="font-semibold">Stipend: </span>
            <p className="text-gray-600">{universityDetails?.stipend}</p>
          </div>
          {/* request scholarship */}
        </div>
        {/* details */}
        <p className="line-clamp-5 ">
          {universityDetails?.scholarshipDescription}
        </p>

        {/*  button */}
        <button
          //   disabled={singleUser?.plan === "Bronze"}
          onClick={() => handleScholarshipRequest()}
          className="cursor-pointer w-48  h-12 bg-red-400 hover:bg-red-500 rounded-lg text-gray-100 font-medium"
        >
          Apply Scholarship
        </button>
        {/* ingredients */}
        {/* <div className="mb-4">
          <h1 className="text-xl font-semibold">Ingredients:</h1>
          <ul className="list-disc list-inside">
            {Array.isArray(universityDetails?.ingredients)
              ? universityDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    {ingredient}
                  </li>
                ))
              : universityDetails?.ingredients
                  ?.split(",")
                  .map((ingredient, index) => (
                    <li key={index} className="text-gray-600">
                      {ingredient.trim()}
                    </li>
                  ))}
          </ul>
        </div> */}

        {/* post review section */}
        <div className="flex flex-col items-start gap-y-2">
          <input
            type="text"
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review"
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg px-2 h-[80px] w-[300px]"
          />
          <Button
            onClick={() => handleReview()}
            label={"Post Review"}
            type={"small"}
          />
        </div>

        {/* reviews */}
        {allReview.map((reviewObj) =>
          reviewObj.reviews.map((nestedReview, index) =>
            nestedReview.review.map((singleReview) => (
              <ReviewCard
                key={singleReview.meal_id + index}
                review={singleReview.review}
                userMail={singleReview.user_id}
                scholarshipId={singleReview.scholarship_id}
                id={id}
                refetch={refetch}
              />
            ))
          )
        )}
      </div>
    </div>
  );
};

export default ScholarshipDetails;
