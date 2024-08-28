import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { GET_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getPlayingMovie = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', GET_OPTIONS);
        const json = await data.json();
        console.log(json);
        if(json?.results)
        {
            console.log(json?.results);
            dispatch(addNowPlayingMovies(json?.results));
        }
    }


    useEffect(()=>{
        getPlayingMovie();
        console.log("useEffect is running");
    },[])
}

export default useNowPlayingMovies;