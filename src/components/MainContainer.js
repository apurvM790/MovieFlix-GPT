import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = ()=>{
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    const mainMovie = movies[0];
    console.log(mainMovie);

    const { original_title, overview } = mainMovie;

    return <div>
        <VedioTitle title={original_title} overview={overview}/>
        <VedioBackground />
    </div>
}

export default MainContainer;