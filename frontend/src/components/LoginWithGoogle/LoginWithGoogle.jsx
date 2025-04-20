import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";

const LoginWithGoogle = () => {

const [signInWithGoogle] = useSignInWithGoogle(auth);

const handleGoogleSignIn = async () => {
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
            <button onClick={handleGoogleSignIn} className="h-[55px] bg-black text-white w-full mt-7 text-2xl font-light">Sign In With Google</button>
        </div>
    )
}

export default LoginWithGoogle