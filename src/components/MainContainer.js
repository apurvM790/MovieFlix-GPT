import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

import Shimmer from "./Shimmer";

const MainContainer = () => {
  

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if (!movies || movies.length==0) return;
  
  const mainMovie = movies[0];

  if(mainMovie===undefined) return;
  const { original_title, overview, id } = mainMovie;
  
  return !mainMovie ? (
    <Shimmer />
  ) : (
    <div className="">
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
  // return <div>MainContainer</div>
};

export default MainContainer;
