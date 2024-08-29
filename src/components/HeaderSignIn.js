import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView, toggleMovieSearchView, toggleTvShowView } from "../utils/gptSlice";
import { Link } from "react-router-dom";

const HeaderSignIn = ()=> {
    // useNowPlayingMovies();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store=> store.user);
    const handleSignOut = ()=>{
        signOut(auth).then(()=>{
            navigate("/");
        })
        .catch(()=>{
            navigate("/error");
        })
    };

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                
                navigate("/browse");
            }
            else{
                dispatch(removeUser());
                navigate("/");
            }
        })
    },[])
    
    const handleToggleGptSearch = ()=>{ 
        dispatch(toggleGptSearchView());
    }

    const handleToggleTvShow = ()=>{
        dispatch(toggleTvShowView());
        
    }
    
    const handleToggleMovieSearch = ()=>{
        dispatch(toggleMovieSearchView());
        
    }
    
    return (
        <div className="absolute w-screen mx-auto py-2 z-10 flex grid-cols-12 bg-gradient-to-b from-black ">
            <img className="w-32 mx-10 col-span-3" src={LOGO} />
            {user && (
                <div className="w-screen flex  justify-between ">
                <div className="my-3 animate-pulse ">
                <button className="my-2 w-28 font-bold text-lg text-gray-300" onClick={handleToggleTvShow}>TV Shows</button>
                <button className="my-2 w-28 font-bold text-lg text-gray-300" onClick={handleToggleMovieSearch}>Movies</button>
                
                </div>
                <div className="flex mx-5">
                    <button className="py-2 px-2 mx-4 my-2 bg-purple-400 text-lg font-semibold transition-all hover:scale-110 rounded-xl shadow-lg  " 
                    onClick={handleToggleGptSearch}>Gpt Search</button>
                <img className="size-12 my-2" src={user?.photoURL} alt="usericon"/>
                <button className="mx-1 py-2 my-2 rounded-lg shadow-xl px-2 bg-gray-400 text-lg text-slate-700 font-bold" onClick={handleSignOut}>Sign-Out</button>    
            </div>
            </div>
        )}      
            </div>
    )
}
export default HeaderSignIn;