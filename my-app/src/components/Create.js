import { useState } from "react";
import axios from 'axios'

// Return the Create
const Create = () => {

  // array of movies of json
  // explain: it's a react hook that allows you to add state to a functional component
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // hands the sumbmits of title of the movies
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
    const movie = {
      title: title,
      year: year,
      poster: poster
    };
  
    // get movies from localhost:4000
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  // form to upload movies to the server
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} /* user add movie title*/ />
          <br/>
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }} /* user add movie year*/ />
          <br/>
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }} /* user add movie poster*/ />
          <br/>
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}
  
export default Create;