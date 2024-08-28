import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";



const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const getPopularMovie = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', GET_OPTIONS);
        const json = await data.json();
        console.log(json);
        if(json?.results)
        {
            console.log(json?.results);
            dispatch(addPopularMovies(json?.results));
        }
    }


    useEffect(()=>{
        getPopularMovie();
        console.log("useEffect is running");
    },[])
}

export default usePopularMovies;