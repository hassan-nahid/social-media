import { useEffect, useState } from "react";
import "../../pages/Login/Login.css";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase/firebase.config";
import { updateProfile, sendEmailVerification, signOut } from "firebase/auth"; // ✨ নতুন যুক্ত করলাম
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginForm = ({ isSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBouncing, setIsBouncing] = useState(false);
  const [localError, setLocalError] = useState("");
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    ,
    ,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    ,
    ,
    signInError,
  ] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (createError) {
      setLocalError(createError.message.replace("Firebase:", "").trim());
    } else if (signInError) {
      setLocalError(signInError.message.replace("Firebase:", "").trim());
    } else {
      setLocalError("");
    }
  }, [createError, signInError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);

    setLocalError("");

    try {
      if (isSignup) {
        const createdUser = await createUserWithEmailAndPassword(email, password);
        if (createdUser) {
          await updateProfile(auth.currentUser, { displayName: name });

          // ✨ Send Email Verification
          navigate("/login");
          await sendEmailVerification(auth.currentUser);
          toast.success("Verification Email Sent. Please verify your email.");

          // ✨ Sign Out after sending verification
          await signOut(auth);

          toast.success("Logged out. Please verify your email before logging in.");
        }
      } else {
        const loggedInUser = await signInWithEmailAndPassword(email, password);
        if (loggedInUser) {
          // ✨ Check if email verified
          if (!loggedInUser.user.emailVerified) {
            await signOut(auth);
            toast.error("Please verify your email before logging in.");
          } else {
            toast.success("User Signed In");
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      setLocalError(error.message || "Something went wrong");
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto">
      {isSignup && (
        <div className="flex flex-col mb-7">
          <label htmlFor="name" className="text-white">Full Name</label>
          <input onChange={(e) => setName(e.target.value)} className="h-[40px] px-2 login-input text-white" type="text" id="name" name="name" required />
        </div>
      )}

      <div className="flex flex-col mb-7">
        <label htmlFor="email" className="text-white">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} className="h-[40px] px-2 login-input text-white" type="email" id="email" name="email" required />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-white">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="h-[40px] px-2 login-input text-white" type="password" id="password" name="password" required />
      </div>

      {!isSignup && (
        <div className="flex justify-between mt-5">
          <div className="flex items-center gap-2">
            <input className="login-text-color" type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="login-text-color">Remember me</label>
          </div>
          <a href="#" className="hover:text-white">Forgot Password?</a>
        </div>
      )}
      {localError && (
        <p className="text-sm text-red-500 mt-2">
          {localError}
        </p>
      )}

      <button className={`h-[55px] cursor-pointer bg-black text-white w-full mt-7 text-2xl font-light ${isBouncing ? "bounce-once" : ""}`} type="submit">
        {isSignup ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
