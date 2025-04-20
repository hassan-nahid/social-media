import "../../pages/Login/Login.css"; 

const LoginForm = () => {
  return (
    <form className=" max-w-[700px] mx-auto">
        <div className="flex flex-col mb-7">
            <label htmlFor="Email" className="text-white">Email</label>
            <input className=" h-[40px] login-input text-white" type="email" id="email" name="email" required />
        </div>
        <div className="flex flex-col">
            <label htmlFor="Password" className="text-white">Password</label>
            <input className=" h-[40px] login-input text-white" type="password" id="password" name="password" required />
        </div>
        <div className="flex justify-between mt-5">
            <div className="flex items-center gap-2">
                <input className="login-text-color" type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className="login-text-color">Remember me</label>
            </div>
            <a href="#" className="login-text-color">Forgot Password?</a>
        </div>

        <button className="h-[55px] bg-black text-white w-full mt-7 text-2xl font-light" type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm