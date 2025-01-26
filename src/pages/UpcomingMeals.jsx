import React from "react";
import { useUpcomingMeal } from "../utils/fetchMeals";
import MealCard from "../components/home/MealCard";
import UpcomingMealCard from "../components/upcoming-meal/UpcomingMealCard";

const UpcomingMeals = () => {
  const { isLoading, upcomingMeal, error, refetch } = useUpcomingMeal();
  return (
    <div className="md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto pb-10 px-5">
      <p className=" text-primary dark:text-gray-400 text-3xl sm:text-5xl  font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 w-[300px] sm:w-[400px] mx-auto mb-10 mt-5">
        Upcoming Meals
      </p>
      {/* grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
        {upcomingMeal?.map((meal, index) => (
          <UpcomingMealCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
