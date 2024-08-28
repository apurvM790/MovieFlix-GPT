import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";



const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const getTopRatedMovie = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', GET_OPTIONS);
        const json = await data.json();
        console.log(json);
        if(json?.results)
        {
            console.log(json?.results);
            dispatch(addTopRatedMovies(json?.results));
        }
    }


    useEffect(()=>{
        getTopRatedMovie();
        console.log("useEffect is running");
    },[])
}

export default useTopRatedMovies;