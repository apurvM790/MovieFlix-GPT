import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    return <div className="min-w-[200px] h-[300px]  bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
        <img className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" alt="MovieCard" src={IMG_CDN_URL + posterPath}/>
    </div>
}
export default MovieCard;