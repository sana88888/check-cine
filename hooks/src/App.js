
import "./App.css";

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import MoviesList from './Components/MoviesList';

function App(){
  const [search,setSearch]=useState("");
  const[rating,setRate]=useState(0);

    return (
      <div>
        <NavBar rating={rating}setSearch={setSearch} setRate={setRate} />
        <MoviesList rating={rating} search={search} />
      </div>
    );
  }

export default App;