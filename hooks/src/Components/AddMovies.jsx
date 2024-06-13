import React from "react";
import { FormGroup, FormField, Form, Input, Button } from "semantic-ui-react";
import "./style.css";
function AddMovies({ newMovie, setNewMovie, setMoviesData, moviesData }) {
    console.log(newMovie);
  return (
    <Form className="add-movie">
      <FormGroup
        style={{ display: "flex", alignItems: "center" }}
        widths="equal"
      >
        <FormField
          control={Input}
         
          placeholder="Titre"
          onChange={(e) => {
            setNewMovie({ ...newMovie, titre: e.target.value });
          }}
        />
        <FormField
          control={Input}
         
          placeholder="Poster"
          onChange={(e) => {
            setNewMovie({ ...newMovie, poster: e.target.value });
          }}
        />
        <FormField
          control={Input}
         
          placeholder="Année"
          onChange={(e) => {
            setNewMovie({ ...newMovie, année: Number(e.target.value) });
          }}
        />
        <FormField
          control={Input}
         
          placeholder="Rating"
          onChange={(e) => {
            setNewMovie({ ...newMovie, rating: Number(e.target.value) });
          }}
        />
      </FormGroup>
      <Button
        className="add-movie-btn"
        
        style={{color:"white" ,backgroundColor: "#c1bb83" }}
        type="button"
        onClick={() => {
          setMoviesData([...moviesData, newMovie]);
        }}
      >
        {" "}
        Ajouter
      </Button>
    </Form>
  );
}

export default AddMovies;
