import HeaderSignIn from "./HeaderSignIn";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import TvShow from "./TvShow";
import MoviesSearch from "./MoviesSearch";

const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    const gptSearch = useSelector((store)=>store.gpt?.gptSearchView);

    const tvShowView = useSelector((store)=>store.gpt?.tvShowSearchView);

    const moviesView = useSelector((store)=>store.gpt?.movieSearchView);



    return !movies || movies.length==0 ? <Shimmer /> :(
        <div>
            <HeaderSignIn />
            {gptSearch ? <GptSearch />
            :(tvShowView ? <TvShow /> 
            :(moviesView ? <MoviesSearch /> 
            : <>
                <MainContainer />
                <SecondaryContainer />
                </>))
            }
            {/*
                Main Container
                    - vedio background
                    - vedio title
                
                Secondary Container
                    - movie list * n
                        - cards * n
            
            */}
        </div>
    )
}
export default Browse;