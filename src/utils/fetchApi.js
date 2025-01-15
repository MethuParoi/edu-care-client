import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

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

// export function useAllFood() {
//   const {
//     isLoading,
//     data: allFood,
//     error,
//   } = useQuery({
//     queryKey: ["allFood"],
//     queryFn: async () => {
//       const response = await axios.get(
//         "https://assignment-11-server-orpin-beta.vercel.app/get-food"
//       );
//       if (response.status !== 200) {
//         throw new Error("Network response was not ok");
//       }
//       return response.data;
//     },
//   });

//   return { isLoading, allFood, error };
// }
