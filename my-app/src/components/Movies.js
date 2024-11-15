import MovieItem from "./MovieItem";

// The Movies
const Movies = (props) => {

    // return Movies component and map JSON movies
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
        }
    );
  }

  export default Movies;