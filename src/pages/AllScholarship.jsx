import { IoSearch } from "react-icons/io5";
import { useFeaturedUniversity } from "../utils/fetchUniversity";
import Loader from "../components/ui/Loader/Loader";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { set } from "react-hook-form";
import ScholarshipCard from "../components/home/ScholarshipCard";

const AllScholarship = () => {
  const [filteredUniversity, setFilteredUniversity] = useState([]);
  const [sortedMeal, setSortedMeal] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  //implement server side search by user name amd email
  const handleSearch = () => {
    setLoading(true);
    axiosSecure
      .get("/university/search-university", { params: { query: search } })
      .then((res) => {
        setFilteredUniversity(res?.data?.universitys);
        setLoading(false);
      });
  };

  //implement server side sort by category
  const handleSortByCategory = (category) => {
    setLoading(true);
    axiosSecure.get(`/meal/filter-meals?category=${category}`).then((res) => {
      setSortedMeal(res.data.meals);
      setLoading(false);
    });
  };

  //implement server side sort by category
  const handleSortByPrice = (min, max) => {
    setLoading(true);
    axiosSecure
      .get(`/meal/filter-meals-by-price?minPrice=${min}&maxPrice=${max}`)
      .then((res) => {
        setSortedMeal(res.data.meals);
        setLoading(false);
      });
  };

  const { isLoading, featuredUniversity, error, refetch } =
    useFeaturedUniversity("all");
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto pb-10 px-5">
      <p className=" text-primary dark:text-gray-400 text-3xl sm:text-5xl  font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 w-[300px] sm:w-[350px] mx-auto mt-5 mb-10">
        {filteredUniversity?.length != 0 ? "Searched Meals" : "All Meals"}
      </p>
      {/* sorting and search */}
      <div className="flex items-center justify-center">
        {/* search */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <input
            className="border-2 border-gray-400 rounded-lg shadow-lg h-10 w-[250px] sm:w-[350px] px-2"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              setSortedMeal([]);
            }}
            placeholder="Search for university"
          />
          <button
            onClick={handleSearch}
            className="h-10 w-14 bg-cyan-600 flex items-center justify-center ml-[-5px] rounded-r-lg hover:bg-cyan-700"
          >
            <IoSearch className="text-2xl text-gray-200" />
          </button>
        </div>
      </div>

      {/* sorting buttons */}
      {/* <div className="flex justify-start mb-4">
        {/* sort by category }
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-red-400 hover:bg-red-500 text-gray-100"
          >
            Sort By Category
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={() => {
                  setFilteredMeal([]);
                  handleSortByCategory("Breakfast");
                }}
              >
                Breakfast
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setFilteredMeal([]);
                  handleSortByCategory("Lunch");
                }}
              >
                Lunch
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setFilteredMeal([]);
                  handleSortByCategory("Dinner");
                }}
              >
                Dinner
              </button>
            </li>
          </ul>
        </div>
        {/* sort by price }
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-red-400 hover:bg-red-500 text-gray-100"
          >
            Sort By Price
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={() => {
                  setFilteredMeal([]);
                  handleSortByPrice(0, 100);
                }}
              >
                Less than 100
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setFilteredMeal([]);
                  handleSortByPrice(100, 200);
                }}
              >
                100 to 200
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setFilteredMeal([]);
                  handleSortByPrice(201, 10000);
                }}
              >
                Greater than 200
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      {/* loading state */}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      )}
      {!isLoading && featuredUniversity?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
          No Meal found!
        </h2>
      )}

      {/* grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
        {/* {sortedMeal?.length != 0 &&
          filteredUniversity?.length === 0 &&
          sortedMeal?.map((university, index) => (
            <ScholarshipCard key={index} university={university} />
          ))} */}
        {filteredUniversity?.length != 0 &&
          filteredUniversity?.map((university, index) => (
            <ScholarshipCard key={index} university={university} />
          ))}
        {filteredUniversity?.length === 0 &&
          featuredUniversity?.map((university, index) => (
            <ScholarshipCard key={index} university={university} />
          ))}
      </div>
    </div>
  );
};

export default AllScholarship;
