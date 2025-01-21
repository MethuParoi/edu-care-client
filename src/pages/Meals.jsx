import { IoSearch } from "react-icons/io5";
import { useFeaturedMeal } from "../utils/fetchMeals";
import Loader from "../components/ui/Loader/Loader";
import { useState } from "react";
import MealCard from "../components/home/MealCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Meals = () => {
  const [filteredMeal, setFilteredMeal] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  //implement server side search by user name amd email
  const handleSearch = () => {
    setLoading(true);
    axiosSecure
      .get("/meal/search-meals", { params: { query: search } })
      .then((res) => {
        setFilteredMeal(res.data.meals);
        setLoading(false);
      });
  };
  const { isLoading, featuredMeal, error, refetch } = useFeaturedMeal("all");
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto pb-10 px-5">
      <p className=" text-primary dark:text-gray-400 text-3xl sm:text-5xl  font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 w-[300px] sm:w-[350px] mx-auto mt-5 mb-10">
        {filteredMeal?.length != 0 ? "Searched Meals" : "All Meals"}
      </p>
      {/* search  */}
      <div className="self-center flex items-center justify-center mb-8">
        <input
          className="border-2 border-gray-400 rounded-lg shadow-lg h-10 w-[250px] sm:w-[350px] px-2"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for meal"
        />
        <button
          onClick={handleSearch}
          className="h-10 w-14 bg-cyan-600 flex items-center justify-center ml-[-5px] rounded-r-lg hover:bg-cyan-700"
        >
          <IoSearch className="text-2xl text-gray-200" />
        </button>
      </div>
      {/* loading state */}
      {loading && (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      )}
      {!isLoading && featuredMeal?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
          No Meal found!
        </h2>
      )}

      {/* grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
        {filteredMeal?.length != 0 &&
          filteredMeal?.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        {filteredMeal?.length === 0 &&
          featuredMeal?.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
      </div>
    </div>
  );
};

export default Meals;
