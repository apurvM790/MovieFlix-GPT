import HeaderSignIn from "./HeaderSignIn";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{
    useNowPlayingMovies();

    return (
        <div>
            <HeaderSignIn />
            <MainContainer />
            <SecondaryContainer />
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