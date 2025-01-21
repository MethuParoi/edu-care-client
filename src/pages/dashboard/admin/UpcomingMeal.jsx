import AddUpcomingMeal from "../../../components/admin-dashboard/upcoming-meal/AddUpcomingMeal";
import { useUpcomingMeal } from "../../../utils/fetchMeals";
import UpcomingMealRow from "../../../components/admin-dashboard/upcoming-meal/UpcomingMealRow";

const UpcomingMeal = () => {
  const { isLoading, upcomingMeal, error, refetch } = useUpcomingMeal();
  return (
    <div className="mt-20 flex flex-col items-start">
      <h1 className="text-2xl text-red-300 font-semibold mx-auto mb-6 border-b-2 border-red-300">
        Upcoming Meals
      </h1>
      {!isLoading && upcomingMeal?.length === 0 && (
        <h2 className="text-3xl font-semibold text-center text-gray-600 mt-16 mb-32">
          No User found!
        </h2>
      )}
      {/* table */}
      {upcomingMeal?.length > 0 && (
        <div className="w-[90%] xl:max-w-[1150px] mx-auto  overflow-x-scroll max-h-[600px] overflow-y-auto mb-20 relative">
          <div className="grid grid-cols-6 gap-y-16 justify-items-center  w-[1100px] md:w-[90%] xl:w-[1100px]  overflow-x-scroll mx-auto bg-[#3282B8] p-4 rounded-xl top-0 sticky z-10">
            <div>{/* image */}</div>
            <p className="text-lg xl:text-xl  font-semibold text-gray-300">
              Title
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Price
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Meal Type
            </p>
            <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Distributor
            </p>
            {/* <p className="text-lg xl:text-xl font-semibold text-gray-300">
              Rating
            </p> */}
          </div>

          <div className="">
            {upcomingMeal.map((meal) => (
              <UpcomingMealRow
                key={meal._id}
                title={meal.title}
                price={meal.price}
                mealType={meal.mealType}
                mealImage={meal.mealImage}
                distributorName={meal.distributorName}
                rating={meal.rating}
                description={meal.description}
                likes={meal.likes}
                reviews_count={meal.reviewsCount}
                meal_id={meal._id}
                refetch={refetch}
                // refetchDetail={refetchDetail}
                // setMeal_id={setMeal_id}
              />
            ))}
          </div>
        </div>
      )}

      {/* upcoming meal modal */}
      <AddUpcomingMeal refetch={refetch} />
    </div>
  );
};

export default UpcomingMeal;
