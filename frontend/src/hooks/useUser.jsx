import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const useUser = () => {
    const [user, loading, error] = useAuthState(auth);
  return { user, loading, error, auth  } 
  
}

export default useUser