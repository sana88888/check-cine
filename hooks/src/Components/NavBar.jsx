

import React, {useRef,useEffect} from 'react'
import { GiFilmProjector } from "react-icons/gi";
import "./style.css"
import MainButton from './MainButton';

import ReactStars from "react-stars";


function NavBar({setSearch,setRate,rating}) {
  const ratingChanged=(newRating)=>{
    setRate(newRating);};
  const inputRef=useRef(null);
  useEffect(()=>{
    inputRef.current.focus()
  },[]);
  return (
    <div id="nav-container">
      <div id="icon">
        <GiFilmProjector size={100} color="#c1bb83" />
        <h1>Ciné</h1>
      </div>
      <div id="bouton">
        <span 
          onClick={() => {
            setSearch("");
            setRate(0);
          }}
          style={{ color: "white", cursor: "pointer",display:"flex" ,alignItems:"center" }}
        >
          {"🔘"}
        </span>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"#c1bb83"}
          value={rating}
          half={false}
        />
        ,
        <input
          ref={inputRef}
          type="search"
          placeholder="recherche"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          color="white"
        />
        <MainButton text="recherche" type="nav" inputRef={inputRef} />
      </div>
    </div>
  );
}

export default NavBar
