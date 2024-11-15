import Movies from "./Movies";
import { useEffect, useState  } from 'react';
import axios from "axios";

// The Read
const Read = () => {
    // array of movies of json
    // explain: it's a react hook that allows you to add state to a functional component
    const [movies, setMovies] = useState([]);

    // get movies from http
    // explain: it tells React that your component needs to do something after render
    useEffect(() => {
        axios.get('http://localhost:4000/api/movies') // json http
          .then((response) => {
            setMovies(response.data.movies);
          })
          .catch((error) => { // error function
            console.log(error);
          });
      }, []);
    
    // return read component
    return (
        <div>
            <h3>Hello from read component!</h3>
            <Movies myMovies={movies}/*PASS data to Movies.js*//>
        </div>
    );
  }
  
  export default Read;