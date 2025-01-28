import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export function useFeaturedUniversity(universityType) {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    data: featuredUniversity,
    error,
    refetch,
  } = useQuery({
    queryKey: ["featuredUniversity", universityType],
    queryFn: async () => {
      const response = await axiosPublic.get(
        "/university/get-featured-university",
        {
          params: { universityType },
        }
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, featuredUniversity, error, refetch };
}

export function useUniversityDetails(id) {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: universityDetails,
    error,
    refetch,
  } = useQuery({
    queryKey: ["universityDetails", id],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/university/get-university-details/${id}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, universityDetails, error, refetch };
}

//------------------Upcoming---------------------
export function useUpcominguniversity() {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    data: upcominguniversity,
    error,
    refetch,
  } = useQuery({
    queryKey: ["upcominguniversity"],
    queryFn: async () => {
      const response = await axiosPublic.get(
        "/university/get-upcoming-universitys"
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, upcominguniversity, error, refetch };
}

//upcoming university details
export function useUpcominguniversityDetails(id) {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: upcominguniversityDetails,
    error,
    refetch,
  } = useQuery({
    queryKey: ["upcominguniversityDetails", id],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/university/get-upcoming-university-details/${id}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, upcominguniversityDetails, error, refetch };
}

//--------------------------------------Requested university
export function useRequesteduniversity() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    data: requesteduniversity,
    error,
    refetch,
  } = useQuery({
    queryKey: ["requesteduniversity"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/user/get-requested-universitys/${user.email}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, requesteduniversity, error, refetch };
}

export function useAllRequesteduniversity() {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    data: allRequesteduniversity,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allRequesteduniversity"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/requested-university/get-requested-university`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });

  return { isLoading, allRequesteduniversity, error, refetch };
}
