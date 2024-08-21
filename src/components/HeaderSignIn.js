import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const HeaderSignIn = ()=> {
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
    
    return (
        <div className="absolute w-screen mx-auto py-2 z-10 flex bg-gradient-to-b from-black ">
            <img className="w-32 mx-10" src={LOGO} />
            {user && (
                <div className="flex justify-between ">
                <div>
                <button className="my-2 w-20 font-bold text-lg mx-2 text-white ">Home</button>
                <button className="my-2 w-28 font-bold text-lg text-white">TV Shows</button>
                <button className="my-2 w-28 font-bold text-lg text-white">Movies</button>
                <button className="my-2 w-40 font-bold text-lg text-white">New & Popular</button>
                <button className="my-2 w-28 font-bold text-lg text-white">My List</button>
                </div>
                <div className="flex ml-[580px]">
                <img className="size-12 my-2" src={user?.photoURL} alt="usericon"/>
                <button className="mx-1 py-2 my-2 rounded-lg shadow-xl px-2 bg-lime-200 text-lg text-slate-700 font-bold" onClick={handleSignOut}>Sign-Out</button>    
            </div>
            </div>
        )}      
            </div>
    )
}
export default HeaderSignIn;

// "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1lZLqlmNfKt4L1VleV1DY00JhLo_LMVEp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-Oqw.png?r=e6e"