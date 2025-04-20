import { useState } from "react";
import "../../pages/Login/Login.css"; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase/firebase.config";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";


const LoginForm = ({ isSignup }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        createUserWithEmailAndPassword,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [
        signInWithEmailAndPassword,
   
      ] = useSignInWithEmailAndPassword(auth);


      const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
              if (isSignup) {
                  const createdUser = await createUserWithEmailAndPassword(email, password);
                  if (createdUser) {
                      await updateProfile(auth.currentUser, {
                          displayName: name,
                      });
                      toast.success("User Profile Created");
                  }
              } else {
                  const loggedInUser = await signInWithEmailAndPassword(email, password);
                  if (loggedInUser) {
                      console.log(loggedInUser.user);
                      toast.success("User Signed In");
                  }
              }
          } catch (error) {
              console.error("Auth Error:", error);
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
            <a href="#" className="login-text-color">Forgot Password?</a>
          </div>
        )}
  
        <button className="h-[55px] bg-black text-white w-full mt-7 text-2xl font-light" type="submit">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
      </form>
    );
  };
  
  export default LoginForm;
  