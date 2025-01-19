// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// export const useFetchAllReview = () => {
//   const axiosSecure = useAxiosSecure();

//   const {
//     isLoading,
//     data: allReview,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["allReview,"],
//     queryFn: async () => {
//       const response = await axiosSecure.get("/review/get-reviews");
//       if (response.status !== 200) {
//         throw new Error("Network response was not ok");
//       }
//       return response.data;
//     },
//   });

//   return { isLoading, allReview, error, refetch };
// };

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

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
