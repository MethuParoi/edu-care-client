import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

export function useFetchAllUser() {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    data: allUser,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allUser,"],
    queryFn: async () => {
      const response = await axiosPublic.get("/user/get-all-users");
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, allUser, error, refetch };
}

//get single user
export function useFetchSingleUser(email) {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    data: singleUser,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleUser", email],
    queryFn: async () => {
      const response = await axiosPublic.get(`/user/get-user/${email}`);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, singleUser, error, refetch };
}

