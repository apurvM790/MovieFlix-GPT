import { useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { GET_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiShootingStarDuotone } from "react-icons/pi";
import Shimmer from "./Shimmer";



const MoviesSearch = ()=>{

    const searchValue = useRef(null);
    const [movieData, setMovieData] = useState(null);
    const [originalLanguage, setOriginalLanguage] = useState("");
    const [overview, setOverview] = useState("");
    const [popularity, setPopularity] = useState(null);
    const [posterPath, setPosterPath] = useState(null);
    const [releaseDate, setReleaseDate] = useState("");
    const [title, setTitle] = useState("");
    const [voteAverage, setVoteAverage] = useState(null);


    const handleButtonClick =async ()=>{
        const value = searchValue.current.value
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+value+'&include_adult=false&language=en-US&page=1', GET_OPTIONS)
        const json = await data.json();
        console.log(json?.results);
        setMovieData(json.results[0])
        console.log(movieData);
        setOriginalLanguage(json?.results[0]?.original_language);
        setOverview(json?.results[0]?.overview);
        setPopularity(json?.results[0]?.popularity);
        setPosterPath(json?.results[0]?.poster_path);
        setReleaseDate(json?.results[0]?.release_date);
        setTitle(json?.results[0]?.title);
        setVoteAverage(json?.results[0]?.vote_average);
        console.log(title);
    }

    // const { original_language, overview, popularity, poster_path, release_date, title, vote_average, vote_count} = movieData?.results[0];
    

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
        {movieData ? (<div className="w-8/12 flex gap-20 bg-gradient-to-br from-lime-50 from-40% via-pink-100 via-40% to-cyan-100 to-20% opacity-80 rounded-2xl shadow-2xl  absolute -z-10 h-5/6 mx-auto left-1/2 transform -translate-x-1/2">
            <div className="mx-10 mt-14 ">
                <img className="w-auto h-[90%] rounded-xl shadow-xl border-2 border-red-200 border-b-8" src={IMG_CDN_URL+posterPath}/>
            </div>
            <div className="bg-transparent opacity-90 mt-4 mb-1 mx-2 rounded-xl shadow-2xl">
                <div className="flex px-3 py-5">
                    <h1 className="text-4xl font-semibold w-64 italic">{title}</h1>
                    <h1 className="text-3xl mx-3 font-normal text-gray-800 italic py-6">({releaseDate.slice(0,4)})</h1>
                </div>
                <div className="mx-4 my-4 w-[400px]">
                    <p className="text-xl font-light italic">Language: {originalLanguage}</p>
                    <p className="text-l font-light py-4">{overview}</p>
                </div>
                <div className="mx-4 flex justify-between">
                    <div>
                    <p className="text-3xl mx-2"><FaPeopleGroup /></p>
                    <p>Pop: {popularity}</p>
                    </div>
                    <div>
                        <p className="text-3xl "><PiShootingStarDuotone /></p>
                        <p>{voteAverage}</p>
                    </div>
                </div>
            </div>
        </div>): <Shimmer/>}
    </div>)
}
export default MoviesSearch;