import { useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { GET_OPTIONS } from "../utils/constants";
import Shimmer from "./Shimmer";
import TvShowSearchCard from "./TvShowSearchCard";

const TvShow = ()=>{
    const searchValue = useRef("");
    const [movieData, setMovieData] = useState(null);

    const handleButtonClick = async()=>{
        const value = searchValue.current.value
        const data = await fetch('https://api.themoviedb.org/3/search/tv?query='+value+'&include_adult=false&language=en-US&page=1', GET_OPTIONS)
        const json = await data.json();
        setMovieData(json.results)
    }
    console.log(movieData);

    return (<div className="w-screen">
            <div className="absolute -z-10">
                <img className=" opacity-90 blur-[1px] " src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg" alt="back-img" />
            </div>
            <div className="pt-[6%] flex justify-center">
            <form className="w-1/2 bg-transparent bg-slate-900 rounded-lg bg-opacity-70 
            m-4 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchValue} type="text" className="col-span-9  font-bold border-2 shadow-2xl shadow-stone-100 rounded-lg px-3 py-2 m-3" 
                placeholder="Search Movie By Name...!"/>
                <button className="font-bold text-lg col-span-3 pl-10 py-2 m-3 shadow-2xl shadow-stone-100 flex gap-4 bg-red-700 rounded-lg text-white"
                onClick={handleButtonClick}>Search <FaSearchengin className="text-3xl text-black animate-pulse"/></button>
            </form>
            </div>
            {movieData ? <div className="flex w-11/12 flex-wrap justify-center mx-auto">{movieData.slice(0,1).map((tvShow,index)=> <TvShowSearchCard key={index} show={tvShow}/> )}</div>:<Shimmer />}
        </div>)
}
export default TvShow;