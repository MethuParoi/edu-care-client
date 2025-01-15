import MealCard from "./MealCard";

const TabRow = ({ mealData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mealData?.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </div>
  );
};

export default TabRow;
