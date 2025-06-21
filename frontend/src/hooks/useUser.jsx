import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const useUser = () => {
    const [firebaseUser, loading, error] = useAuthState(auth);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (firebaseUser?.emailVerified) {
            setUser(firebaseUser);
        } else {
            setUser(null);
        }
    }, [firebaseUser]);

    return { user, loading, error, auth };
};

export default useUser;
