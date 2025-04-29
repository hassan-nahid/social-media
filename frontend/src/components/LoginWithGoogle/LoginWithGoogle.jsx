import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useUser from "../../hooks/useUser";

const LoginWithGoogle = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [isBouncing, setIsBouncing] = useState(false);
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleGoogleSignIn = async () => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 500);
        try {
            const result = await signInWithGoogle();
            if (result) {
                toast.success("User Signed In with Google", { duration: 5000 });
            }
        } catch (error) {
            toast.error("Google Sign-In Error: " + error.message);
        }
    };

    return (
        <div className="max-w-[700px] mx-auto">
            <button onClick={handleGoogleSignIn} className={`h-[55px] cursor-pointer bg-black text-white w-full mt-7 text-2xl font-light ${isBouncing ? "bounce-once" : ""}`}>
                Sign In With Google
            </button>
        </div>
    );
};

export default LoginWithGoogle;
