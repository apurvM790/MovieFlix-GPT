import { useState } from "react";
import Header from "./Header"

const Login = ()=> {

    const [isSignIN , setIsSignIn] = useState(true);

    const handleSignUp = (event)=> {
        event.preventDefault();
        setIsSignIn(!isSignIN);
    };

    return (
        <div className="">
            <Header />
            <div className="absolute">
                <img className=" opacity-90 blur-[1px] " src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg" alt="back-img" />
            </div>
            <form className=" flex flex-col w-4/12 mx-auto bg-black my-44 absolute opacity-80 rounded-md left-0 right-0 px-16 py-3">
                <h1 className="font-bold text-4xl py-2 text-white">{isSignIN ? "Sign In" : "Sign Up"}</h1>

                {!isSignIN && 
                <input className="py-3 my-3 pl-3 rounded-lg bg-black opacity-90 text-white border-[1px] border-white" 
                type="text" placeholder="Full Name"/>}
                
                <input className="py-3 my-3 pl-3 rounded-lg bg-black opacity-90 text-white border-[1px] border-white" 
                type="text" placeholder="Email or mobile number"/>

                <input className="py-3 my-3 pl-3 rounded-lg bg-black opacity-90 text-white border-[1px] border-white" 
                type="password" placeholder="Password"/>

                <button className="my-4 border-0 shadow-xl bg-red-700 text-lg text-white py-2 rounded-lg">
                    {isSignIN? "Sign in" : "Sign Up"}</button>

                <h3 className="text-white ml-44">OR</h3>

                <button className="my-4 border-0 shadow-xl bg-gray-600 opacity-85 text-lg font-bold text-white py-2 rounded-lg" 
                onClick={handleSignUp}>{isSignIN ? "Sign Up now" : "Sign in"}</button>
            </form>


        </div>
    )
}
export default Login;