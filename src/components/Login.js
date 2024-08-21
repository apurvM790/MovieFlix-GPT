import { useRef, useState } from "react";
import HeaderSignIn from "./HeaderSignIn";
import { CheckValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = ()=> {

    const [isSignIN , setIsSignIn] = useState(true);
    const [isValidInfo, setIsValidInfo] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const Name = useRef(null);

    const handleSignIn = (event)=>{
        event.preventDefault();
        const isValid = CheckValidation(email.current.value,password.current.value);
        setIsValidInfo(isValid);
        
        if(isValid) return;

        if(!isSignIN){
            // sign Up (create user)
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential)=>{
                const user = userCredential.user;
                updateProfile(user, {
                    displayName : Name.current.value,
                    photoURL : USER_AVATAR,
                })
                .then(()=>{
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL,
                    }));
                })
                
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsValidInfo(errorCode+" - "+errorMessage);

            });
        }
        else{
            // sign in (authenticate) 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential)=>{
                const user = userCredential.user;
                
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL,
                    }));
                // console.log(user);
                navigate('browse');
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsValidInfo(errorCode+" - "+errorMessage);
            });
        }

    }

    const toggleSignInSignUp = (event)=> {
        event.preventDefault();
        setIsSignIn(!isSignIN);
    };

    return (
        <div className="">
            <HeaderSignIn />
            <div className="absolute">
                <img className=" opacity-90 blur-[1px] " src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg" alt="back-img" />
            </div>
            <form className=" flex flex-col w-4/12 mx-auto bg-black my-44 absolute opacity-80 rounded-md left-0 right-0 px-16 py-3">
                <h1 className="font-bold text-4xl py-2 text-white">{isSignIN ? "Sign In" : "Sign Up"}</h1>

                {!isSignIN && 
                <input ref={Name} className="py-3 my-3 pl-3 rounded-lg bg-black opacity-90 text-white border-[1px] border-white" 
                type="text" placeholder="Full Name"/>}
                
                <input ref={email} className="py-3 my-3 pl-3 rounded-lg bg-black opacity-90 text-white border-[1px] border-white" 
                type="text" placeholder="Email or mobile number"/>

                <input ref={password} className="py-3 my-3 pl-3 rounded-lg bg-black opacity-90 text-white border-[1px] border-white" 
                type="password" placeholder="Password"/>
                <p className="font-bold text-lg text-red-600 ">{isValidInfo}</p>
                <button className="my-4 border-0 shadow-xl bg-red-700 text-lg text-white py-2 rounded-lg" onClick={handleSignIn}>
                    {isSignIN? "Sign in" : "Sign Up"}</button>

                <h3 className="text-white ml-44">OR</h3>

                <button className="my-4 border-0 shadow-xl bg-gray-600 opacity-85 text-lg font-bold text-white py-2 rounded-lg" 
                onClick={toggleSignInSignUp}>{isSignIN ? "Sign Up now" : "Sign in"}</button>
            </form>


        </div>
    )
}
export default Login;