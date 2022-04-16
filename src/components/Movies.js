import React from "react";
import { movies } from "../data";

function Movies() {
  const movieCards = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h2>Title: {movie.title}</h2>
        <h2>Time: {movie.time}</h2>
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <>
      <h1>Movies Page</h1>
      {movieCards}
    </>
  )
}

export default Movies;
