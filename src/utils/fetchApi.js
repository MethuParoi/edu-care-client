import { useQuery } from "@tanstack/react-query";
import useAxiosSecure, { axiosSecure } from "../hooks/useAxiosSecure";

export function useFeaturedMeal(mealType) {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: featuredMeal,
    error,
    refetch,
  } = useQuery({
    queryKey: ["featuredMeal", mealType],
    queryFn: async () => {
      const response = await axiosSecure.get("/get-featured-meal", {
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
  const {
    isLoading,
    data: mealDetails,
    error,
  } = useQuery({
    queryKey: ["mealDetails", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/get-meal-details/${id}`);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, mealDetails, error };
}
