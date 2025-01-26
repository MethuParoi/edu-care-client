import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Loader from "../components/ui/Loader/Loader";
import { AiFillLike, AiFillProduct, AiOutlineLike } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import Button from "../components/ui/Button";
import { useMealDetails } from "../utils/fetchMeals";
import { FaBangladeshiTakaSign, FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useFetchSingleUser } from "../utils/fetchUsers";
// import RequestModal from "../components/food-details/RequestModal";

const MealDetails = () => {
  const [review, setReview] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, mealDetails, error, refetch } = useMealDetails(id);
  const { singleUser, refetch: refetchLikedMeal } = useFetchSingleUser(
    user?.email
  );

  //disble like button if user already liked the meal
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (singleUser?.likedMeals === 0) return;
    if (singleUser?.likedMeals?.includes(id)) {
      setIsLiked(true);
    }
  }, [singleUser, id]);

  //handle like button
  const handleLike = async () => {
    try {
      const [res, resLikedMeal] = await Promise.all([
        axiosSecure.patch(`meal/increase-like/${id}`),
        axiosSecure.post(`/user/insert-liked-meals/${user?.email}`, {
          likedMeals: [id],
        }),
      ]).then((res) => {
        if (
          res[0].data.modifiedCount === 1 &&
          res[1].data.modifiedCount === 1
        ) {
          toast.success("Meal liked successfully!");
          refetch();
          refetchLikedMeal();
        }
      });
      // Handle the responses if needed
    } catch (error) {
      console.log(error);
    }
  };

  //handle review post
  const handleReview = async () => {
    try {
      const [res, resLikedMeal, resReviewedMeal] = await Promise.all([
        axiosSecure.patch(`meal/increase-review/${id}`),
        axiosSecure.post(`/user/insert-reviewed-meals/${user?.email}`, {
          reviewedMeal: [{ id: id, review: review }],
        }),
        axiosSecure.post(`/review/add-review/678ca678c4c2ef19970bc09f`, {
          review: [
            {
              user_id: user?.email,
              meal_id: id,
              review: review,
            },
          ],
        }),
      ]).then((res) => {
        if (
          res[0].data.modifiedCount === 1 &&
          res[1].data.modifiedCount === 1 &&
          res[2].data.acknowledged === true
        ) {
          toast.success("Review posted successfully!");
          refetch();
          setReview("");
        }
      });
      // const response = await axiosSecure.post(`/meal/post-review/${id}`, {
      //   review,
      //   email: user?.email,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  //handle Meal Request
  const handleMealRequest = async () => {
    console.log("name:", user?.displayName);
    try {
      const [res1, res2] = await Promise.all([
        axiosSecure.post(`/user/insert-requested-meals/${user?.email}`, {
          requestedMeal: [{ id: id, status: "pending" }],
        }),
        axiosSecure.post(`/requested-meal/add-requested-meal`, {
          id: id,
          user: user?.email,
          name: user?.displayName,
          status: "pending",
        }),
      ]).then((res) => {
        if (
          res[0].data.acknowledged === true &&
          res[1].data.result.acknowledged === true
        ) {
          toast.success("Meal Requested successfully!");
        }
      });
    } catch (error) {
      console.log(error);
    }
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
          src={mealDetails?.mealImage}
          alt="movie-poster"
        />
      </div>

      {/* food details */}
      <div className="flex flex-col gap-y-4 md:w-[40%] px-2 mt-5 md:mt-0">
        <h1 className="text-3xl font-semibold">{mealDetails?.title}</h1>
        <div className="flex gap-x-4">
          <div className="badge badge-secondary bg-green-200 border-transparent text-gray-800">
            {mealDetails?.mealType}
          </div>
        </div>
        {/* price, distributor, post time */}
        <div className="flex flex-wrap items-center gap-x-4 my-2 gap-y-2">
          <div className="flex items-center gap-x-2">
            <FaBangladeshiTakaSign className="text-xl" />
            <p className="text-gray-600">{mealDetails?.price}</p>
          </div>
          <div className="flex items-center gap-x-2">
            {/* <AiFillProduct className="text-xl" /> */}
            <p className="text-gray-600">
              {" "}
              <span className="font-semibold">Distributor: </span>
              {mealDetails?.distributorName}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <CiCalendarDate className="text-2xl font-bold" />
            <p className="text-gray-600">{mealDetails?.postTime}</p>
          </div>
        </div>
        {/* rating, review, request and like button */}
        <div className="flex items-center gap-x-6 mt-1">
          <div className="flex items-center gap-x-2">
            <FaStarHalfStroke className="text-2xl font-bold" />
            <p className="text-gray-600">{mealDetails?.rating}</p>
          </div>
          {/* review count */}
          <div className="flex items-center gap-x-2">
            <MdOutlineRateReview className="text-2xl font-bold" />
            <p className="text-gray-600">{mealDetails?.reviewsCount}</p>
          </div>
          {/* like button */}
          <div className="flex flex-wrap gap-y-2 items-center gap-x-2">
            <button
              disabled={isLiked}
              onClick={() => handleLike()}
              className="cursor-pointer px-2 py-1 bg-red-300 hover:bg-red-400 rounded-lg"
            >
              <AiOutlineLike className="text-2xl font-bold" />
            </button>
            <p className="text-gray-600">{mealDetails?.likes}</p>
          </div>
          {/* request meal */}
          <button
            disabled={singleUser?.plan === "Bronze"}
            onClick={() => handleMealRequest()}
            className="cursor-pointer px-2 py-1 bg-red-300 hover:bg-red-400 rounded-lg text-gray-600 font-medium"
          >
            Request Meal
          </button>
        </div>
        {/* details */}
        <p className="line-clamp-5 ">{mealDetails?.description}</p>
        {/* ingredients */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold">Ingredients:</h1>
          <ul className="list-disc list-inside">
            {Array.isArray(mealDetails?.ingredients)
              ? mealDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    {ingredient}
                  </li>
                ))
              : mealDetails?.ingredients
                  ?.split(",")
                  .map((ingredient, index) => (
                    <li key={index} className="text-gray-600">
                      {ingredient.trim()}
                    </li>
                  ))}
          </ul>
        </div>

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

        {/* <div className="flex items-center sm:justify-start justify-center mt-4 mb-5 md:mb-0">
          <Button
            onClick={() => {
              if (user?.email) {
                document.getElementById("req_food_modal").showModal();
              } else {
                navigate("/login");
              }
            }}
            label={"Request Food"}
            type={"standard"}
          />
        </div> */}

        {/* donator details */}
        {/* <div className="flex items-center gap-x-4 mb-10 md:mt-5">
          <h1 className="text-xl font-semibold">Donated By:</h1>
          <div className="flex items-center gap-x-2">
            <img
              className="w-14 h-14 rounded-full border-2 border-secondary"
              src={details?.donator_image}
              alt="user"
            />
            <p className="text-gray-600 text-lg font-medium">
              {details?.donator_name}
            </p>
          </div>
        </div>*/}
      </div>

      {/* <RequestModal foodDetail={details} /> */}
    </div>
  );
};

export default MealDetails;
