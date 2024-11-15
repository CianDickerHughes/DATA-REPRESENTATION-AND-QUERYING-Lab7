const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.g9bhw.mongodb.net/DB14');

// body-parser middleware
// explain: body-parser is an npm module used to process data sent in an HTTP request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors middleware
// explain: setup allows your frontend app to make API requests to the backend
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// message route 
app.get('/', (req, res) => {
    res.send('Hello World');
});

// json of movies
app.get('/api/movies', (req, res) => {
    const movies = [
            {
                "Title": "Avengers: Infinity War (server)",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War (server)",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "World War Z (server)",
                "Year": "2013",
                "imdbID": "tt0816711",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            }
        ];
        
    res.json({ movies });
});

// post request for movies
app.post('/api/movies',(req,res)=>{
    console.log(req.body.title);
    res.send("Movie Added!");
});

// listen request of port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});