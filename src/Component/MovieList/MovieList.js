import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MovieList({ movie,serchText,rate }) {
  //  console.log("moviiiiiiie =",movie)
  return (
    <div className= "carte" style= {{flexWrap: "wrap"}} >
      {movie.filter((el)=> el.title.toUpperCase().startsWith(serchText.toUpperCase()) && el.rating>=rate
      ).map((el,i) => (
        <MovieCard  movie={el} key={i}/>
      ))}
    </div>
  );
}

export default MovieList;
