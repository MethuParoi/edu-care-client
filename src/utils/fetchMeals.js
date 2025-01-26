import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

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

//---------------------------------------
export function useUpcomingMeal() {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    data: upcomingMeal,
    error,
    refetch,
  } = useQuery({
    queryKey: ["upcomingMeal"],
    queryFn: async () => {
      const response = await axiosPublic.get("/meal/get-upcoming-meals");
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, upcomingMeal, error, refetch };
}

//--------------------------------------Requested Meal
export function useRequestedMeal() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    data: requestedMeal,
    error,
    refetch,
  } = useQuery({
    queryKey: ["requestedMeal"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/user/get-requested-meals/${user.email}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, requestedMeal, error, refetch };
}

export function useAllRequestedMeal() {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    data: allRequestedMeal,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allRequestedMeal"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/requested-meal/get-requested-meal`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, allRequestedMeal, error, refetch };
}