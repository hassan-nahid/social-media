import React, { useState, useEffect } from 'react';
import './Login.css';
import loginImage from '../../assets/login.png';
import logoImage from '../../assets/icon.svg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import { updateProfile, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import LoginWithGoogle from '../../components/LoginWithGoogle/LoginWithGoogle';
import useUser from '../../hooks/useUser';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [localError, setLocalError] = useState("");
    const [isBouncing, setIsBouncing] = useState(false);
    const navigate = useNavigate();
    const { user } = useUser();

    const [
        createUserWithEmailAndPassword,
        ,
        ,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (createError) {
            setLocalError(createError.message.replace("Firebase:", "").trim());
        } else {
            setLocalError("");
        }
    }, [createError]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 500);
        setLocalError("");

        if (password !== confirmPassword) {
            setLocalError("Passwords do not match");
            return;
        }

        try {
            const createdUser = await createUserWithEmailAndPassword(email, password);
            if (createdUser) {
                await updateProfile(auth.currentUser, { displayName: name });
                await sendEmailVerification(auth.currentUser);
                toast.success("Verification email sent. Please verify your email.", {
                    duration: 5000,
                });

                await auth.signOut();
                navigate("/login");
            }
        } catch (error) {
            console.error("Auth Error:", error);
            setLocalError(error.message || "Something went wrong");
            toast.error(error.message || "Something went wrong");
        }
    };

    useEffect(() => {
        if (user && !user.emailVerified) return;
        if (user && user.emailVerified) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className='w-full mx-auto bg-login-gradient rounded-b-xl'>
            <div className='flex p-3.5 gap-4'>
                <div style={{ height: 'calc(100vh - 28px)' }} className='w-full md:w-[55%]'>
                    <div className='flex items-center m-9 gap-2'>
                        <img className='h-10 w-10' src={logoImage} alt="logo" />
                        <h1 className='text-[30px] font-extrabold login-logo-text'>Zomiraq</h1>
                    </div>
                    <h2 className='login-middle-text mt-[30px] text-center'>CREATE ACCOUNT</h2>

                    <form onSubmit={handleRegister} className="max-w-[700px] mx-auto mt-0">
                        <div className="flex flex-col mb-2">
                            <label htmlFor="name" className="text-white">Full Name</label>
                            <input onChange={(e) => setName(e.target.value)} className="h-[40px] px-2 login-input text-white" type="text" id="name" name="name" required />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="h-[40px] px-2 login-input text-white" type="email" id="email" name="email" required />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="password" className="text-white">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="h-[40px] px-2 login-input text-white" type="password" id="password" name="password" required />
                        </div>

                        <div className="flex flex-col mb-2">
                            <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} className="h-[40px] px-2 login-input text-white" type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>

                        {localError && (
                            <p className="text-sm text-red-500 mt-2">{localError}</p>
                        )}

                        <button className={`h-[55px] cursor-pointer bg-black text-white w-full mt-4 text-2xl font-light ${isBouncing ? "bounce-once" : ""}`} type="submit">
                            Sign Up
                        </button>

                        <LoginWithGoogle />

                        <div className="text-center mt-5">
                            Already have an account?{" "}
                            <span onClick={() => navigate("/login")} className="login-logo-text font-bold cursor-pointer">Login</span>
                        </div>
                    </form>
                </div>

                <div className='w-[45%] hidden md:block'>
                    <img style={{ height: 'calc(100vh - 28px)' }} className='w-full rounded-xl' src={loginImage} alt="register" />
                </div>
            </div>
        </div>
    );
};

export default Register;
