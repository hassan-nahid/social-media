import { useState, useEffect, useCallback } from "react";
import useUser from "./useUser";

const useUserData = () => {
    const { user } = useUser();
    const userId = user?.uid;
    const [userData, setUserData] = useState(null);

    const fetchUserData = useCallback(async () => {
        if (userId) {
            try {
                const response = await fetch(`${import.meta.env.VITE_LINK}/api/user/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
    }, [userId]);

    // Auto-fetch on mount or when userId changes
    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    return { userData, refetch: fetchUserData };
};

export default useUserData;
