import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";

export function useFeaturedMeal(mealType) {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    data: featuredMeal,
    error,
    refetch,
  } = useQuery({
    queryKey: ["featuredMeal", mealType],
    queryFn: async () => {
      const response = await axiosPublic.get("/meal/get-featured-meal", {
        params: { mealType },
      });
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, featuredMeal, error, refetch };
}

export function useMealDetails(id) {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: mealDetails,
    error,
    refetch,
  } = useQuery({
    queryKey: ["mealDetails", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/meal/get-meal-details/${id}`);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, mealDetails, error, refetch };
}
