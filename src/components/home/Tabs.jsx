import { act, useEffect, useState } from "react";
import { useFeaturedMeal } from "../../utils/fetchMeals";
import TabRow from "./TabRow";
import Loader from "../ui/Loader/Loader";
import { use } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Breakfast");
  const { isLoading, featuredMeal, error, refetch } =
    useFeaturedMeal(activeTab);

  return (
    <div role="tablist" className="tabs tabs-lifted ">
      {/* breakfast tab */}
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Breakfast"
        defaultChecked
        onClick={() => setActiveTab("Breakfast")}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6 min-h-[300px]"
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <TabRow mealData={featuredMeal} />
        )}
      </div>
      {/* lunch tab */}
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Lunch"
        onClick={() => setActiveTab("Lunch")}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <TabRow mealData={featuredMeal} />
        )}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Dinner"
        onClick={() => setActiveTab("Dinner")}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <TabRow mealData={featuredMeal} />
        )}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="All Meals"
        onClick={() => setActiveTab("all")}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <TabRow mealData={featuredMeal} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
