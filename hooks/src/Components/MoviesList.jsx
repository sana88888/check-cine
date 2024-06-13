import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Data } from "./Data";
import AddMovies from "./AddMovies";
import "./style.css";
function MoviesList({ search, rating }) {
  const [moviesData, setMoviesData] = useState(Data);
  console.log(moviesData);
  const [newMovie, setNewMovie] = useState({
    poster: "",
    titre: "",
    année: 0,
    rating: 0,
  });
  const filteredMovies = moviesData
    .filter((movie) =>
      movie.titre.toLowerCase().startsWith(search.toLowerCase())
    )
    .filter((movie) => rating === 0 || movie.rating === rating);

  console.log("Filtered Movies:", filteredMovies);

  return (
    <div>
      <AddMovies
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        setMoviesData={setMoviesData}
        moviesData={moviesData}
      />
      <div id="movies-list-container">
           {moviesData
          .filter((movie) =>
            movie.titre.toLowerCase().startsWith(search.toLowerCase())
          )
          .filter((movie) => rating === 0 || movie.rating === rating)
          .map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))}   
       
      </div>
    
    </div>
  );
}

export default MoviesList;
