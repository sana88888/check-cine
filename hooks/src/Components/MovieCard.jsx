import React, { useEffect, useState } from "react";

import "./style.css";
import MainButton from "./MainButton";



function MovieCard({ poster, titre, année, rating }) {
  const [counter, setCounter] = useState(0);

  return (
    <div id="movie-card">
      <img src={poster} alt="" />
      <h3>{titre}</h3>
      <h5>{année}</h5>
      
      <span>{"⭐".repeat(rating)}</span>
      ,
      <MainButton text="Plus" />
    </div>
  );
}

export default MovieCard;
