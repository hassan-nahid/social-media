import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";

const fetchUserData = async (userId) => {
  const response = await fetch(`${import.meta.env.VITE_LINK}/api/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useUserData = () => {
  const [user] = useAuthState(auth);
  const userId = user?.uid;

  const { data: userData, isLoading, error, refetch } = useQuery({
    queryKey: ["userData", userId],
    queryFn: () => fetchUserData(userId),
    enabled: !!userId, // Only run query if userId exists
    staleTime: 5 * 60 * 1000, // 5 minutes cache (optional)
    cacheTime: 10 * 60 * 1000, // 10 minutes (optional)
  });

  return { userData, isLoading, error, refetch };
};

export default useUserData;
