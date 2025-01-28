import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export const useFetchAllPayment = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: allPayment, // Initialize allReview as an empty array
    error,
    refetch,
  } = useQuery({
    queryKey: ["allPayment"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/user/get-payment-history/${user.email}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, allPayment, error, refetch };
};

//application for single user
export const useFetchMyApplication = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: myApplication, // Initialize allReview as an empty array
    error,
    refetch,
  } = useQuery({
    queryKey: ["myApplication"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/user/get-my-application/${user.email}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, myApplication, error, refetch };
};
