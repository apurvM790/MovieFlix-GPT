import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = ({title, movies}) => {
  console.log(movies);
  return  !movies || !movies.length? (
    <Shimmer />
  ) : (
    <div className="py-6  ">
      <h1 className="text-2xl font-semibold mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2">
        {movies?.map(movie => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
