import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = ()=>{

    const data = useSelector(store => store.movies);

    return (data.nowPlayingMovies && (<div className="bg-black">
        <div className="-mt-56 pl-3 relative z-20">
        <MovieList title={"Now Playing"} movies={data.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={data.topRatedMovies}/>
        <MovieList title={"Popular"} movies={data.popularMovies}/>
        <MovieList title={"Upcoming"} movies={data.upcomingMovies}/>
        </div>
    </div>))
}

export default SecondaryContainer;