import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieTrailer = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",GET_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const filteredData = json.results.filter((vedio) => vedio.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
        // console.log(trailer);
    }

    useEffect(()=>{
        getMovieTrailer();
    },[])

}
export default useMovieTrailer;