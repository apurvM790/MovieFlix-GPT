import { HashRouter, Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";


const Body =()=>{
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