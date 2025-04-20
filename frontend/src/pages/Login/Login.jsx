import React from 'react'
import './Login.css';
import loginImage from '../../assets/login.png'
import logoImage from '../../assets/icon.svg'
import LoginForm from '../../components/Login/LoginForm';
import LoginWithGoogle from '../../components/LoginWithGoogle/LoginWithGoogle';

const Login = () => {
    return (
        <div className='w-[100%] mx-auto bg-login-gradient  rounded-b-xl'>
            <div className='flex p-3.5'>
                <div className='w-full h-full md:w-[55%] lg:w-[55%]'>
                    <div className='flex items-center m-9 gap-2'>
                        <img className='h-10 w-10' src={logoImage} alt="logo" />
                        <h1 className='text-[30px] font-extrabold login-logo-text '>Zomiraq</h1>
                    </div>
                    <h2 className='login-middle-text mt-[30px] text-center'>WELCOME BACK</h2>
                   <div className='mt-10'>
                   <LoginForm />
                   </div>
                   <LoginWithGoogle />
                </div>
                <div className='w-[45%] hidden md:block lg:block xl:block 2xl:block'>
                    <img style={{ height: 'calc(100vh - 28px)' }} className=' w-full rounded-xl' src={loginImage} alt="login in image" />
                </div>
            </div>

        </div>
    )
}

export default Login