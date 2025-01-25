import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

export const useFetchAllReview = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: allReview = [], // Initialize allReview as an empty array
    error,
    refetch,
  } = useQuery({
    queryKey: ["allReview"],
    queryFn: async () => {
      const response = await axiosSecure.get("/review/get-reviews");
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, allReview, error, refetch };
};

export const useFetchReview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: Review = [], // Initialize allReview as an empty array
    error,
    refetch,
  } = useQuery({
    queryKey: ["Review"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/user/get-review/${user.email}`);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, Review, error, refetch };
};
