import React, { useState } from 'react';
import './Login.css';
import loginImage from '../../assets/login.png'
import logoImage from '../../assets/icon.svg'
import LoginForm from '../../components/Login/LoginForm';
import LoginWithGoogle from '../../components/LoginWithGoogle/LoginWithGoogle';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const {user} = useUser();
    const navigate = useNavigate();

    if(user) {
        navigate("/");
    }
   
    return (
        <div className='w-full mx-auto bg-login-gradient rounded-b-xl'>
            <div className='flex p-3.5'>
                <div className='w-full h-full md:w-[55%] lg:w-[55%]'>
                    <div className='flex items-center m-9 gap-2'>
                        <img className='h-10 w-10' src={logoImage} alt="logo" />
                        <h1 className='text-[30px] font-extrabold login-logo-text'>Zomiraq</h1>
                    </div>
                    <h2 className='login-middle-text mt-[30px] text-center'>
                        {isSignup ? "CREATE ACCOUNT" : "WELCOME BACK"}
                    </h2>
                    <div className='mt-10'>
                        <LoginForm isSignup={isSignup} />
                    </div>
                    <LoginWithGoogle />
                    <div className='text-center mt-5'>
                        {isSignup ? (
                            <>
                                Already have an account?{" "}
                                <span onClick={()=>setIsSignup(!isSignup)} className='login-logo-text font-bold cursor-pointer'>Login</span>
                            </>
                        ) : (
                            <>
                                Don't have an account?{" "}
                                <span onClick={()=>setIsSignup(!isSignup)} className='login-logo-text font-bold cursor-pointer'>Sign Up</span>
                            </>
                        )}
                    </div>
                </div>
                <div className='w-[45%] hidden md:block lg:block xl:block 2xl:block'>
                    <img style={{ height: 'calc(100vh - 28px)' }} className='w-full rounded-xl' src={loginImage} alt="login in image" />
                </div>
            </div>
        </div>
    );
};

export default Login;
