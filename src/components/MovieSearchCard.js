import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiShootingStarDuotone } from "react-icons/pi";


const MovieSearchCard = ({movie})=>{
    const [detail, setDetail] = useState(false);

    const handleClickDetail = ()=>{
        setDetail(true);
    };

    const closeModal = ()=>{
        setDetail(false);
    };



    return <> 
    <div className="transition-all hover:scale-110">
        <div onClick={handleClickDetail}>
            <img className="w-56 border-2 border-purple-400 shadow-lg shadow-gray-200 mx-2 my-2 rounded-lg" src={IMG_CDN_URL + movie?.poster_path} alt="Movie Frame"/>
        </div>
        <div className="">
        <h4 className="bg-gradient-to-b from-black  font-semibold animate-pulse text-gray-300 text-xl absolute z-20 truncate -mt-10 w-56 ml-[9px] ">{movie?.title}</h4>
        </div>
    </div>
    {detail && (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30" >
        </div>
            <div className="fixed inset-0   flex  justify-center items-center z-40 " onClick={closeModal}>
                <div className="w-8/12 flex    gap-20 bg-gradient-to-br from-lime-50 from-40% via-pink-100 via-40% to-cyan-100 to-20% opacity-80 rounded-2xl shadow-2xl  relative -z-10 h-5/6  " onClick={(e)=>e.stopPropagation()}>
                <div className="mx-10 mt-14 ">
                    <img className="w-auto h-[90%] rounded-xl  shadow-xl border-2 border-red-200 border-b-8" src={IMG_CDN_URL+movie?.poster_path}/>
                </div>
                <div className="bg-transparent opacity-90 mt-4 mb-1 mx-2 rounded-xl shadow-2xl">
                    <div className="flex px-3 py-5">
                        <h1 className="text-4xl font-semibold w-64 italic">{movie?.title}</h1>
                        <h1 className="text-3xl mx-3 font-normal text-gray-800 italic py-6">({movie?.release_date.slice(0,4)})</h1>
                    </div>
                    <div className="mx-4 my-4 w-[400px]">
                        <p className="text-xl font-light italic">Language: {movie?.original_language}</p>
                        <p className="text-l font-light py-4">{movie?.overview}</p>
                    </div>
                    <div className="mx-4 flex justify-between">
                        <div>
                            <p className="text-3xl mx-2"><FaPeopleGroup /></p>
                            <p>Pop: {movie?.popularity}</p>
                        </div>
                        <div>
                            <p className="text-3xl "><PiShootingStarDuotone /></p>
                            <p>{movie?.vote_average}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
    </>
    )}
    </>
}
export default MovieSearchCard;



