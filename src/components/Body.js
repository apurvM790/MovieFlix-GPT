import { HashRouter, Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";


const Body =()=>{

    const dispatch = useDispatch();
    
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            }
            else{
                dispatch(removeUser());
            }
        })
    })

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/browse" element={<Browse />}/>
            </Routes>
        </HashRouter>
    )
}
export default Body;