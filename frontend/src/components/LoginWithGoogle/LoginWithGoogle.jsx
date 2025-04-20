import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { useState } from "react";

const LoginWithGoogle = () => {

const [signInWithGoogle] = useSignInWithGoogle(auth);

const [isBouncing, setIsBouncing] = useState(false);

const handleGoogleSignIn = async () => {
    setIsBouncing(true); // Trigger bounce animation
          setTimeout(() => setIsBouncing(false), 500);
    try {
        const result = await signInWithGoogle();
        if (result) {
            console.log(result.user);
            toast.success("User Signed In with Google");
            
        }
    } catch (error) {
        toast.error("Google Sign-In Error:", error);
        // Handle error here (e.g., show error message)
    }
}
    return (
        <div className="max-w-[700px] mx-auto">
            <button onClick={handleGoogleSignIn} className={`h-[55px] cursor-pointer bg-black text-white w-full mt-7 text-2xl font-light ${isBouncing ? "bounce-once" : ""
  }`}>Sign In With Google</button>
        </div>
    )
}

export default LoginWithGoogle