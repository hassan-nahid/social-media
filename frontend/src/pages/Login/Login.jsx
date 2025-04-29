import React, { useState, useEffect } from 'react';
import './Login.css';
import loginImage from '../../assets/login.png';
import logoImage from '../../assets/icon.svg';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import LoginWithGoogle from '../../components/LoginWithGoogle/LoginWithGoogle';
import useUser from '../../hooks/useUser';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localError, setLocalError] = useState("");
    const [isBouncing, setIsBouncing] = useState(false);
    const navigate = useNavigate();
    const { user } = useUser();

    const [
        signInWithEmailAndPassword,
        ,
        ,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (signInError) {
            setLocalError(signInError.message.replace("Firebase:", "").trim());
        } else {
            setLocalError("");
        }
    }, [signInError]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 500);

        setLocalError("");

        try {
            const loggedInUser = await signInWithEmailAndPassword(email, password);
            if (loggedInUser) {
                if (!loggedInUser.user.emailVerified) {
                    await signOut(auth);
                    toast.error("Please verify your email before logging in.");
                } else {
                    toast.success("Logged in successfully");
                    navigate("/");
                }
            }
        } catch (error) {
            console.error("Auth Error:", error);
            setLocalError(error.message || "Something went wrong");
            toast.error(error.message || "Something went wrong");
        }
    };
    useEffect(() => {
        if (user) {
          navigate("/");
        }
      }, [user,navigate]);

    return (
        <div className='w-full mx-auto bg-login-gradient rounded-b-xl'>
            <div className='flex p-3.5 gap-4'>
                <div style={{ height: 'calc(100vh - 28px)' }} className='w-full md:w-[55%]'>
                    <div className='flex items-center m-9 gap-2'>
                        <img className='h-10 w-10' src={logoImage} alt="logo" />
                        <h1 className='text-[30px] font-extrabold login-logo-text'>Zomiraq</h1>
                    </div>
                    <h2 className='login-middle-text mt-[30px] text-center'>WELCOME BACK</h2>
                    
                    <form onSubmit={handleLogin} className="max-w-[700px] mx-auto mt-10">
                        <div className="flex flex-col mb-7">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="h-[40px] px-2 login-input text-white" type="email" id="email" name="email" required />
                        </div>

                        <div className="flex flex-col mb-7">
                            <label htmlFor="password" className="text-white">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="h-[40px] px-2 login-input text-white" type="password" id="password" name="password" required />
                        </div>

                        {localError && (
                            <p className="text-sm text-red-500 mt-2">{localError}</p>
                        )}

                        <button className={`h-[55px] cursor-pointer bg-black text-white w-full mt-7 text-2xl font-light ${isBouncing ? "bounce-once" : ""}`} type="submit">
                            Sign In
                        </button>

                        <LoginWithGoogle/>

                        <div className="text-center mt-5">
                            Don't have an account?{" "}
                            <span onClick={() => navigate("/register")} className="login-logo-text font-bold cursor-pointer">Sign Up</span>
                        </div>
                    </form>
                </div>

                <div className='w-[45%] hidden md:block'>
                    <img style={{ height: 'calc(100vh - 28px)' }} className='w-full rounded-xl' src={loginImage} alt="login" />
                </div>
            </div>
        </div>
    );
};

export default Login;
