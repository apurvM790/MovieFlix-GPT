import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useSelector } from "react-redux";
const HeaderBrowse = ()=> {
    const user =  useSelector((store)=>store.user);
    const navigate = useNavigate();
    const handleSignOut = ()=>{

    signOut(auth).then(()=>{
        navigate("/");
    })
    .catch((error)=>{
        navigate("/error");
    });
}

    return (
        <div className="absolute flex flex-wrap w-screen justify-between bg-gradient-to-b from-slate-700 to-white">
            <div className="mx-10 my-2 z-10 flex flex-wrap">
                <img className="w-32" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
                <button className="w-20 font-bold text-lg mx-2 text-white">Home</button>
                <button className="w-28 font-bold text-lg text-white">TV Shows</button>
                <button className="w-28 font-bold text-lg text-white">Movies</button>
                <button className="w-40 font-bold text-lg text-white">New & Popular</button>
                <button className="w-28 font-bold text-lg text-white">My List</button>
            </div>
            <div className="my-6 mx-6 z-10 flex flex-wrap">
                <img className="w-10 mx-3" src={user?.photoURL} alt="userLogo"/>
                <button className="font-bold text-lg text-white" onClick={handleSignOut}>Sign Out</button>
            </div>
            
        </div>

    )
}
export default HeaderBrowse;